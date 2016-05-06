# require "active_record"
# require "yaml"
# require "sqlite3"
#
# ROOT = File.join(File.expand_path(File.dirname(__FILE__)),'')
#
# ['/lib','/db'].each do |folder|
#     $: << File.join(ROOT,folder)
# end
#
# LogFile = File.join(ROOT,'/log/debug.log')
# YmlFile = File.join(ROOT,'/config/database.yml')
#
# ActiveRecord:Base.logger = Logger.new(LogFile)
# ActiveRecord:Base.configurations = YAML::load(IO.read(YmlFile))
# ActiveRecord:Base.establish_connection('development')
#
# require "db/schema"

require_relative 'env_initial'

class Tproduct
    p0 = Product.new
    p0.number = 100
    p0.save
    puts Product.first.number
end
