class ZhilianJob < ActiveRecord::Base
    belongs_to :company
    belongs_to :spider_date
end
