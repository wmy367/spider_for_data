
require_relative 'env_initial'
require 'spider'

$tn  = Time.new
$curr_date = SpiderDate.find_or_create_by(probe_time:$tn)

def database_record(location,key,company_attr,job_attr)
    curr_cmp = Company.find_by_company_name company_attr[:company_name]
    unless curr_cmp # can't find
        curr_cmp = Company.create company_attr
    end

    curr_job = ZhilianJob.create job_attr
    curr_job.search_key = key
    curr_job.search_location = location
    $curr_date.zhilian_jobs << curr_job
    curr_cmp.zhilian_jobs << curr_job
    $curr_date.companies << curr_cmp
    #curr_cmp.spiderdates << curr_create

    curr_job.save
    # curr_cmp.update company_attr
    curr_cmp.save
end

def test_basebase_record(company_attr,job_attr)
    puts "----company keys------"
    company_attr.each do |key,value|
        puts "KEY::#{key}----> VALUE::#{value}"
    end
    puts "----job keys----------"
    job_attr.each do |key,value|
        puts "KEY::#{key}----> VALUE::#{value}"
    end
    sleep(3)
    #return nil
end

if ARGV.empty?
    arg_location = '深圳'
    arg_key = 'UI'
elsif ARGV[0] && ARGV[1]
    arg_location    = ARGV[0]
    arg_key         = ARGV[1]
else
    arg_location = '深圳'
    arg_key = 'FPGA'
end

zls = ZhiliangSpider.new(location:arg_location,key:arg_key)
$total = zls.jobs_total
n = 0

begin

    catch(:done) do
        zls.scan_job_tab do |company_attr,job_attr|
            # p company_attr.keys if company_attr
            # p job_attr.keys if job_attr
            #test_basebase_record(company_attr,job_attr)
            database_record(arg_location,arg_key,company_attr,job_attr)
            n += 1
            # sleep(3)
            puts ">>>>#{n}/#{$total}<<<<<<"
            # if n > 10
            #     throw :done
            # end
            #return nil
        end
    end
ensure
    $curr_date.search_key = arg_key
    $curr_date.search_location = arg_location
    $curr_date.total = zls.jobs_total
    $curr_date.save
end
