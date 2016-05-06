class SpiderDate < ActiveRecord::Base
    has_and_belongs_to_many :companies
    has_many :zhilian_jobs

end
