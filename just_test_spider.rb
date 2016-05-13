require_relative 'env_initial'
require 'spider'

zls = ZhiliangSpider.new(location:'深圳',key:'FPGA',page:1)

zls.scan_job_tab
