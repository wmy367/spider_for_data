curr_path = File::dirname(File::expand_path(__FILE__))
$: << curr_path
require "uri"
require "open-uri"
require "nokogiri"

class JobInfo

    attr_reader :job_name,:company_name,:welfare,:lookup,:feedback_rate,:feedback_spend,
                :job_info,:job_req,:job_local,:company_info_text,:company_category

    def initialize(str_or_url)
        if str_or_url =~ /http.{4,100}/
            @doc = Nokogiri::HTML(open(str_or_url))
        else
            @doc = str_or_url
        end

        scan_head
        scan_job_info
        scan_descript
        scan_company
    end

    private

    def scan_head
        job_head = @doc.css('div.top-fixed-box').css('div.fixed-inner-box')

        @job_name = job_head.css('div.fl').css('h1').first.text
        @company_name = job_head.css('div.fl').css('h2').ftext
        @welfares = job_head.css('div.fl').first.css('div.welfare-tab-box').css('span').map {|w| w.text}

        other_info = job_head.css('div.fr').css('div.fdtips').css('li')
        @lookup = other_info.css('div.fdtime').css('p').ftext
        @feedback_rate = other_info.css('div.fdreply-pro').css('p').ftext
        @feedback_spend = other_info.css('div.usetime').css('p').ftext

    end


    def scan_job_info
        job_box = @doc.css('div.terminalpage').css('div.terminalpage-left').css('ul.terminal-ul').css('li')
        job_keys = job_box.css('span').map {|k| k.text}
        job_values = job_box.css('strong').map{|v| v.text}
        @job_info = job_keys.zip(job_values)
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
        @job_local = job_company_box[0].css('h2').ftext

        company_info_box = job_company_box[1]

        # company_info_name = company_info_box.css('h5').text
        @company_info_text = company_info_box.css('p').text

    end

    def scan_company
        company_box = @doc.css('div.terminalpage').css('div.terminalpage-right').css('div.company-box')

        @company_name = company_box.css('p.company-name-t').css('a').ftext
        right_company_category = company_box.css('ul').css('li')

        company_category_keys = right_company_category.map {|k| k.css('span').text}
        company_category_values = right_company_category.map {|v| v.css('strong').ftext}

        @company_category = company_category_keys.zip(company_category_values)
    end

end
