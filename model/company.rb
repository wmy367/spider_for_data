class Company < ActiveRecord::Base
    has_and_belongs_to_many :spider_dates
    has_many :zhilian_jobs
end
