require_relative 'env_initial'
require 'spider'

# spd = SpiderDate.last
# spd.zhilian_jobs.each {|zj| zj.delete}
# spd.delete

ZhilianJob.where("spider_date_id = 18").each {|zj| zj.delete }
ZhilianJob.where("spider_date_id = 19").each {|zj| zj.delete }
