require "uri"
require "open-uri"
require "nokogiri"

class CompanySpider
    attr_reader :company_name,:company_des,:company_content,:company_home_url,:company_other_job_link,:info_hash
    def initialize(str_or_url)
        if str_or_url =~ /http.{4,100}/
            doc = Nokogiri::HTML(open(str_or_url))
        else
            doc = str_or_url
        end
        @info_hash = {}
        body_box = doc.css('div.main').css('div.mainLeft')
        @company_name = body_box.css('div').css('h1').ftext
        company_des_ts = body_box.css('table.comTinyDes').css('tr')
        @company_des = company_des_ts.map do |pair|
            pair.css('td span')[0..1].map {|td| td.text.strip }
        end
        company_content_box = body_box.css('div.part2').css('div.company-content')
        @company_content = company_content_box.text.strip
        #puts company_content_box
        @company_home_url = get_home_page(company_content_box.to_s,@company_des.flatten.join("\n"))
        @company_other_job_link = get_url(body_box.css('a.moreJobs').to_s)

        @info_hash[:company_name] = @company_name
        @info_hash[:company_descript] = @company_des
        @info_hash[:company_content] = @company_content
        @info_hash[:company_home_page] = @company_home_url
        @info_hash[:jobs_link] = @company_other_job_link
    end

    def get_url(str)
        href_match = str.match(/<a\s*href\s*=\s*\"(?<url>http.+?)\".*?>/)
        if href_match
            return href_match["url"]
        end
        doc_match = str.match(/(w{3,3}\.){0,1}[a-zA-Z0-9_-]{1,30}\.[a-z]{1,4}(\.[a-z]{1,4})?/)
        if doc_match
            return doc_match[0]
        end
        return nil
    end

    def get_home_page(content,company_descript)
        url = get_url(content)
        return url if url
        url = get_url(company_descript)
        if url
            return url
        else
            return nil
        end
    end
end
# doc = Nokogiri::HTML(open(File::join(curr_path,'test_html/test_company.htm')))
# company_spider = CompanySpider.new(doc)
#
# puts company_spider.company_name
# puts company_spider.company_des
# puts company_spider.company_other_job_link
#
# puts company_spider.company_home_url
