curr_path = File::dirname(File::expand_path(__FILE__))
$: << curr_path
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

# doc = Nokogiri::HTML(open(url))
#doc = Nokogiri::HTML(open(File::join(curr_path,'test_html/test.html')))

# total_num = "//div[@class='seach_yx']/span[@class='search_yx_tj']/em"
# list_tables = "//table[@class='newlist']/tbody/tr"
#css_tables=
#
# def catch_head_info(css_tb)
#     rel = css_tb.css('th')
#     return rel.collect {|c| c.text.strip}
# end
#
# def catch_one_info(css_tb)
#     tds = css_tb.css('td')
#     job_name = tds[0].text.strip
#     job_link = tds[0].to_s.match(/href\s*=\s*"(?<link>.+?)"/)['link']
#     fback = tds[1].text.strip
#     company_name = tds[2].text.strip
#     company_link = tds[2].to_s.match(/href\s*=\s*"(?<link>.+?)"/)['link']
#     salary = tds[3].text.strip
#     job_local = tds[4].text.strip
#     jod_public_date = tds[5].text.strip
#     return [job_name,job_link,company_name,company_link,job_local,jod_public_date]
# end
#
# #puts doc.xpath(list_tables).first
# totle =  doc.css("div.seach_yx").css('span.search_yx_tj').css('em').ftext
# tbs =  doc.css('table.newlist').css('tbody').css('tr')
# #sleep(10)

class SinpleJob

    def initialize (css_tb)
        tds = css_tb.css('td')
        @job_name = tds[0].text.strip
        @job_link = tds[0].to_s.match(/href\s*=\s*"(?<link>.+?)"/)['link']
        @feedback = tds[1].text.strip
        @company_name = tds[2].text.strip
        @company_link = tds[2].to_s.match(/href\s*=\s*"(?<link>.+?)"/)['link']
        @salary = tds[3].text.strip
        @job_local = tds[4].text.strip
        @jod_public_date = tds[5].text.strip
        @job_detail = JobInfo.new(@job_link)
        @company_detail = CompanySpider.new(@company_link)
    # rescue
    #     puts tds
    #     puts "Can't parse Job's table ,maybe Wed have be changed....."
    end

    def summary
        return [@job_name,@job_link,@company_name,@company_link,@job_local,@jod_public_date]
    end

    def record_info(log_file)
        log_file.puts "==============================="
        log_file.puts " 简介"
        log_file.puts @job_name
        log_file.puts @company_name
        log_file.puts "______工作要求________"
        log_file.puts @job_detail.job_req
        log_file.puts "______公司信息_____"
        log_file.puts "公司主页:" + @company_detail.company_home_url.to_s
        log_file.puts "公司其他工作："+@company_detail.company_other_job_link.to_s
        log_file.puts "描述 :\n"+@company_detail.company_des.flatten.join("\n")
        log_file.puts "_______________________________"
    end

end

class ZhiliangSpider
    SEARCH_URL = 'http://sou.zhaopin.com/jobs/searchresult.ashx?'

    def initialize (local:"深圳",key:"JAVA")
        @search_params = {"jl"=> local,"kw"=> key,"p"=>1}
        get_content
        jobs_total
    end

    def get_content(local:"深圳",key:"JAVA",page:1,test:false)
        return Nokogiri::HTML(open(File::join(curr_path,'test_html/test.html'))) if test

        @search_params["jl"] = local
        @search_params["kw"] = key
        @search_params["p"] = page.to_i

        www_params = URI.encode_www_form(@search_params)
        distance = SEARCH_URL + www_params
        puts distance
        cnt = 0
        begin
            @doc = Nokogiri::HTML(open(distance))
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
        get_content page:@search_params["p"]
    end

    def jobs_total
        # puts @doc.css("div.seach_yx").css('span.search_yx_tj').css('em').text.to_i
        @jobs_total = @doc.css("div.seach_yx").css('span.search_yx_tj').css('em').text.to_i
    end

    def scan_jobs(tbs,log_file)
        raise "Can't parse Jobs list" unless tbs
        n = 0;
        m = tbs.size
        tbs.each do |tb|
            sj = SinpleJob.new(tb)
            sj.record_info(log_file)

            print " #{(n+=1)/m*100}% -->"
        end
        print "done \n"
    end

    def scan_job_tab
        tabs = 0
        # tbs =  @doc.css('div#newlist_list_content_table').css('table.newlist')
        # tbs.shift
        # scan_jobs(tbs)
        log_file = File.open('log.txt','w')
         begin
            tbs =  @doc.css('div#newlist_list_content_table').css('table.newlist')
            tbs.shift
            scan_jobs(tbs,log_file)
            tabs += tbs.size
            puts tabs
            if tbs.size == 0
                puts  @doc.css('table.newlist').css('tr').first
                break
            end
            break
        end while ( (tabs < @jobs_total) && get_next_content)
        log_file.close
    end

end

zls = ZhiliangSpider.new

zls.scan_job_tab
