require "uri"
require "open-uri"
require "nokogiri"
require "JobSpider"
require "CompanySpider"

class Nokogiri::XML::NodeSet
    def ftext
        if self.empty?
            self
        elsif self.is_a? Array
            self.first.text.strip
        elsif self
            self.text.strip
        else
            self
        end
    end
end

class SinpleJob
    @@job_link_to_company = []
    attr_reader :info_hash,:company_link
    def initialize (css_tb)
        tds = css_tb.css('td')
        @job_name = tds[0].text.strip
        @job_link = tds[0].to_s.match(/href\s*=\s*"(?<link>.+?)"/)['link']
        @feedback = tds[1].text.strip
        @company_name = tds[2].text.strip
        @company_link = tds[2].to_s.match(/href\s*=\s*"(?<link>.+?)"/)['link']
        @salary = tds[3].text.strip
        @job_location = tds[4].text.strip
        @jod_public_date = tds[5].text.strip
        @job_detail = JobInfo.new(@job_link)

        @job_iv_hash = {}
        @company_iv_hash = {}

        @job_iv_hash[:job_name] = @job_name
        @job_iv_hash[:job_link] = @job_link
        @job_iv_hash[:job_feedback_rate] = @feedback

        @company_iv_hash[:company_name] = @company_name
        @company_iv_hash[:zhilian_company_page_link] = @company_link

        @job_attr = {}
        @company_attr = {}

    # rescue
    #     puts tds
    #     puts "Can't parse Job's table ,maybe Wed have be changed....."
    end

    # def company_info_scan
    #     if @company_link && @company_link ~= /special/
    #         unless @@job_link_to_company.include? @company_link
    #             @@job_link_to_company << @company_link
    #             @company_detail = CompanySpider.new(@company_link)
    #         end
    #     end
    #
    #     @company_info_from_job_page = {}
    #     @company_info_from_job_page[:size] = @job_detail.company_category.assoc('')

    def summary
        return [@job_name,@job_link,@company_name,@company_link,@job_location,@jod_public_date]
    end

    def record_info(log_file=STDOUT)
        log_file.puts "==========BEGIN================="
        log_file.puts "工作简介"
        log_file.puts @job_name
        log_file.puts @company_name
        log_file.puts @company_link
        log_file.puts @job_detail.info_hash[:job_info_category].to_a.flatten.join("\n")
        log_file.puts "______HR信息_________"
        log_file.puts @job_detail.info_hash[:job_lookup]
        log_file.puts @job_detail.info_hash[:job_feedback_rate]
        log_file.puts @job_detail.info_hash[:job_feedback_spend]
        log_file.puts "______工作要求________"
        log_file.puts @job_detail.job_req.strip
        log_file.puts "______公司信息________"
        log_file.puts @job_detail.info_hash[:company_info_category].to_a.flatten.join("\n")
        # log_file.puts "公司其他工作："+@company_detail.company_other_job_link.to_s
        log_file.puts "描述 :\n"+@job_detail.info_hash[:company_descript].strip
        log_file.puts "_______________________________"
    end

    def gen_pair_array(*args)
        s = args.size
        if s%2 == 1
            s += 1
            args << args.last
        end

        Array.new(s/2) {|e| [args[e*2],args[e*2+1]]}
    end



    def job_attr
    #   sql_attr  hash_attr
        pair = gen_pair_array(
              :job_name           , :job_name,
              :welfares           , :welfares,
              :job_lookup         , :job_lookup,
              :job_feedback_rate  , :job_feedback_rate,
              :job_feedback_spend , :job_feedback_spend,
              :job_decript        , :job_decript, # nil
              :job_req            , :job_req,
              :job_location       , :job_location,
              :salary_high        , :salary_high,
              :salary_low         , :salary_low,
              :salary_fix         , :salary_fix,
              :salary             , :salary,
              :public_date        , :public_date,
              :nature             , :nature,
              :exp_req_high       , :exp_req_high,
              :exp_req_low        , :exp_req_low,
              :exp_req_fix        , :exp_req_fix,
              :exp_req            , :exp_req,
              :degree             , :degree,
              :num_req            , :num_req_fix,
              :sort               , :sort )
        categories = @job_detail.info_hash[:job_info_category]
        pair.each do |pr|
            if categories.has_key? pr[1]
                @job_attr[pr[0]] = categories[pr[1]]
            else
                @job_attr[pr[0]] = @job_detail.info_hash[pr[1]]
            end
        end
        unless @job_attr[:num_req]
            @job_attr[:num_req] = 1;
        end
    end

    def company_attr
        #   sql_attr  hash_attr
        pair = gen_pair_array(
             :company_name               , :company_name,
             :home_url                   , :home_url,
             :zhilian_company_page_link  , :zhilian_company_page_link,
             :jobs_link                  , :jobs_link,
             :company_descript           , :company_descript,
             :company_content            , :company_content,        # nil
             :nature                     , :nature,
             :industry                   , :industry,
             :location                   , :location,
             :size_high                  , :size_high,
             :size_low                   , :size_low,
             :size_fix                   , :size_fix,
             :size                       , :size   )
        categories =  @job_detail.info_hash[:company_info_category]
        pair.each do |pr|
            if categories.has_key? pr[1]
                @company_attr[pr[0]] = categories[pr[1]]
            else
                @company_attr[pr[0]] = @job_detail.info_hash[pr[1]]
            end
        end
        @company_attr[:zhilian_company_page_link] = @company_link
        @company_attr[:company_name] = @company_name
    end

    def with_job_company_attr(&block)
        job_attr
        company_attr
        if block_given?
            # block.call @company_attr,@job_attr
            block.call @company_attr,@job_attr
        else
            record_info
        end
    end


end

class ZhiliangSpider
    SEARCH_URL = 'http://sou.zhaopin.com/jobs/searchresult.ashx?'
    attr_reader :jobs_total
    def initialize (location:"深圳",key:"JAVA",page:1)
        @docs = []
        @search_params = {"jl"=> location,"kw"=> key,"p"=>page}
        get_content
        scan_jobs_total
        return if @jobs_total == 0
        pages = @jobs_total/60 + (@jobs_total%60 == 0 ? 0 : 1) - 1
        puts "getting search result ......"
        pages.times { get_next_content }
        puts "get search result done !!!"
    end

    def get_content(test:false)
        return Nokogiri::HTML(open(File::join(curr_path,'test_html/test.html'))) if test

        # @search_params["jl"] = location
        # @search_params["kw"] = key
        # @search_params["p"] = page.to_i

        www_params = URI.encode_www_form(@search_params)
        distance = SEARCH_URL + www_params
        puts "connect to --> #{distance}"
        cnt = 0
        begin
            @docs << Nokogiri::HTML(open(distance))
        rescue
            cnt += 1
            if cnt < 10
                puts ">>#{cnt}<< Can't connect to #{distance}.....,and retry again."
                sleep(5)
                retry
            else
                puts ">>#{cnt}<< Can't connect to #{distance},dismiss!!!"
            end
        end
    end

    def get_next_content
        @search_params["p"] += 1;
        get_content 
    end

    def scan_jobs_total
        # puts @doc.css("div.seach_yx").css('span.search_yx_tj').css('em').text.to_i
        @jobs_total = @docs[0].css("div.seach_yx").css('span.search_yx_tj').css('em').text.to_i
    end

    def scan_jobs(tbs,log_file=STDOUT,&block)
        raise "Can't parse Jobs list" unless tbs
        m = tbs.size
        if block_given?
            record_tbs = tbs
        else
            record_tbs = tbs[0..10]
        end
        record_tbs.each do |tb|
            sj = SinpleJob.new(tb)
            unless block_given?
                sj.record_info(log_file)
                print " -->"
            else
                sj.with_job_company_attr(&block)
            end
        end
        print "done \n"
    end

    def scan_job_tab(&block)
        tabs = 0
        log_file = File.open('log.txt','w') unless block_given?
        @docs.each do |doc|
            tbs =  doc.css('div#newlist_list_content_table').css('table.newlist')
            tbs.shift
            scan_jobs(tbs,log_file,&block)
            tabs += tbs.size
            if tbs.size == 0
                puts  doc.css('table.newlist').css('tr').first
                break
            end
        end
        log_file.close unless block_given?
    end

end

# zls = ZhiliangSpider.new
#
# zls.scan_job_tab
