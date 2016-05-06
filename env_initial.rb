require 'rubygems'
require 'active_record'
require 'yaml'

ROOT = File.join(File.expand_path(File.dirname(__FILE__)),'')

SUB_ROOT = (Dir::entries(ROOT)-%w{. ..}).select {|f| File.directory? File.join(ROOT,f) }

SUB_ROOT.each do |folder|
    $: << File.join(ROOT,folder)
end

LogFile = File.join(ROOT,'/log/debug.log')
YmlFile = File.join(ROOT,'/config/database.yml')
ModelFile = File.join(ROOT,'/model/models.rb')

## connect to database
dbconfig = YAML::load(File.open(YmlFile))
ActiveRecord::Base.establish_connection(dbconfig)

## load models

require ModelFile
