curr_path = File::dirname(File::expand_path(__FILE__))
$: << curr_path
require "uri"
require "open-uri"
require "nokogiri"

zhiliang = 'http://sou.zhaopin.com/jobs/searchresult.ashx?jl=%E6%B7%B1%E5%9C%B3&kw=JAVA&sm=0&sg=8d4844681a38457ba491660007ca2eea&p=1'
zhilian_search = 'http://sou.zhaopin.com/jobs/searchresult.ashx?'

search_params = {"jl"=>"深圳","kw"=>"JAVA","p"=>"1"}

www_params = URI.encode_www_form(search_params)

url = zhilian_search+www_params

# doc = Nokogiri::HTML(open(url))
doc = Nokogiri::HTML(open(File::join(curr_path,'test_html/test.html')))

total_num = "//div[@class='seach_yx']/span[@class='search_yx_tj']/em"

puts doc.xpath("//div[@class='seach_yx']/span[@class='search_yx_tj']/em").first

sleep(10)
