require "uri"
require "open-uri"
require "nokogiri"
require "spiderrange"

class JobInfo
    attr_reader :job_name,:company_name,:welfare,:lookup,:feedback_rate,:feedback_spend,
                :job_info,:job_req,:job_local,:company_info_text,:company_category,:info_hash

    def initialize(str_or_url)
        if str_or_url =~ /http.{4,100}/
            @doc = Nokogiri::HTML(open(str_or_url))
        else
            @doc = str_or_url
        end
        @info_hash = {}
        @company_info_category = {}
        @job_info_category = {}
        scan_head
        scan_job_info
        scan_descript
        scan_company
    end

    private

    def scan_head
        job_head = @doc.css('div.top-fixed-box').css('div.fixed-inner-box')

        @job_name = job_head.css('div.fl').css('h1').ftext
        @company_name = job_head.css('div.fl').css('h2').ftext
        @welfares = job_head.css('div.fl').first.css('div.welfare-tab-box').css('span').map {|w| w.text}

        other_info = job_head.css('div.fr').css('div.fdtips').css('li')
        @lookup = other_info.css('div.fdtime').css('p').ftext
        @feedback_rate = other_info.css('div.fdreply-pro').css('p').ftext
        @feedback_spend = other_info.css('div.usetime').css('p').ftext

        @info_hash[:job_name] = @job_name
        @info_hash[:company_name] = @company_name
        @info_hash[:welfares] = @welfares.join(" ")
        # @info_hash[:job_lookup] = parse_integer_for_str(@lookup.to_s)
        # @info_hash[:job_feedback_rate] = parse_integer_for_str(@feedback_rate.to_s)
        # @info_hash[:job_feedback_spend] = parse_integer_for_str(@feedback_spend.to_s)

        @info_hash[:job_lookup] = @lookup
        @info_hash[:job_feedback_rate] = @feedback_rate
        @info_hash[:job_feedback_spend] = @feedback_spend

    end

    def parse_integer_for_str(str)
        if str
            str.match(/\d{1,10}/)
            if $~
                $~.to_integer
            else
                nil
            end
        else
            nil
        end
    end


    def scan_job_info
        job_box = @doc.css('div.terminalpage').css('div.terminalpage-left').css('ul.terminal-ul').css('li')
        @job_info = job_box.map do |li|
            key = li.css('span').ftext
            value = li.css('strong').ftext
            if key
                key =~ /(.+?)\b/
                key = $~[1] if $~
            end
            value =value.strip if value.is_a? String
            if key
                [key,value]
            else
                nil
            end
        end
        @job_info.compact!
        # job_keys = job_box.css('span').map {|k| k.text}
        # job_values = job_box.css('strong').map{|v| v.text}
        # @job_info = job_keys.zip(job_values)
        # @info_hash[:job_decript] = @job_info
        # puts look_for_category(@job_info,'职位月薪')
        @job_info_category.merge!(SpiderRange.new(look_for_category(@job_info,'职位月薪')).sr_hash(:salary))
        @job_info_category[:location] = look_for_category(@job_info,'工作地点')
        @job_info_category[:public_date] = look_for_category(@job_info,'发布日期')
        @job_info_category[:nature] = look_for_category(@job_info,'工作性质')
        @job_info_category.merge!(SpiderRange.new(look_for_category(@job_info,'工作经验')).sr_hash(:exp_req))
        @job_info_category[:degree] = look_for_category(@job_info,'最低学历')
        @job_info_category.merge!(SpiderRange.new(look_for_category(@job_info,'招聘人数')).sr_hash(:num_req))
        @job_info_category[:sort] = look_for_category(@job_info,'职位类别')
        @info_hash[:job_info_category] = @job_info_category
    end


    def scan_descript
        terminal_info_box = @doc.css('div.terminalpage').css('div.terminalpage-main')
        job_company_box = terminal_info_box.css('div.tab-cont-box').css('div.tab-inner-cont')
        @job_req = job_company_box[0].css("div").css('div')
        unless @job_req.empty?
            @job_req = @job_req.text
        else
            @job_req = job_company_box[0].css("p").text
        end
        match_job_local = job_company_box[0].css('h2').to_s.match(/<h2>\s*(?<location>.+?)\s*<a.+>.+<\/a>.+<\/h2>/m)
        if match_job_local
            @job_local = match_job_local[:location]
        else
            @job_local = nil
        end

        company_info_box = job_company_box[1]

        # company_info_name = company_info_box.css('h5').text
        @company_info_text = company_info_box.css('p').text
        @info_hash[:company_descript] = @company_info_text
        @info_hash[:job_req]    = @job_req
        @info_hash[:job_location] = @job_local
    end

    def scan_company
        company_box = @doc.css('div.terminalpage').css('div.terminalpage-right').css('div.company-box')

        @company_name = company_box.css('p.company-name-t').css('a').ftext
        right_company_category = company_box.css('ul').css('li')

        # company_category_keys = right_company_category.map {|k| k.css('span').text}
        # company_category_values = right_company_category.map {|v| v.css('strong').ftext}
        #
        # @company_category = company_category_keys.zip(company_category_values)

        @company_category = right_company_category.map do |li|
            key = li.css('span').ftext
            value = li.css('strong').ftext
            if key
                key =~ /(.+?)\b/
                key = $~[1] if $~
            end
            value =value.strip
            if key
                [key,value]
            else
                nil
            end
        end
        @company_category.compact!

        @company_info_category.merge!(SpiderRange.new(look_for_category(@company_category,'公司规模')).sr_hash(:size))

        @company_info_category[:nature] = look_for_category(@company_category,'公司性质')
        @company_info_category[:industry] = look_for_category(@company_category,'公司行业')
        @company_info_category[:home_url] = look_for_category(@company_category,'公司主页')
        @company_info_category[:location] = look_for_category(@company_category,'公司地址')
        @info_hash[:company_info_category] = @company_info_category
    end

    def look_for_category(category_array,accos_key,&block)
        rel = category_array.assoc(accos_key)
        return nil unless rel
        unless block_given?
            rel[1]
        else
            yield rel[1]
        end
    end

end
