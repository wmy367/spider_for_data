class CreateCompaniesSpiderDatesZhilianJobs < ActiveRecord::Migration

    def change

        if nil
            drop_table :companies
            drop_table :spider_dates
            drop_table :zhilian_jobs
            drop_table :companies_spider_dates
        else
            create_table :companies do |t|
                t.string :company_name
                t.string :home_url
                t.string :zhilian_company_page_link
                t.string :jobs_link
                t.text :company_descript
                t.text :company_content
                t.string :nature
                t.string :industry
                t.string :location
                t.integer :size_high
                t.integer :size_low
                t.integer :size_fix
                t.string :size
                t.timestamps
            end

            create_table :spider_dates do |t|
                t.timestamps
                t.datetime :probe_time
                t.string :search_key
                t.string :search_location
                t.integer :total
            end

            create_table :zhilian_jobs do |t|
                t.string :job_name
                t.string :welfares
                t.integer :job_lookup
                t.integer :job_feedback_rate
                t.integer :job_feedback_spend
                t.text :job_decript
                t.text :job_req
                t.text :job_location

                t.integer :salary_high
                t.integer :salary_low
                t.integer :salary_fix
                t.string :salary

                t.date :public_date
                t.string :nature

                t.string :search_key
                t.string :search_location

                t.integer :exp_req_high
                t.integer :exp_req_low
                t.integer :exp_req_fix
                t.string :exp_req

                t.string :degree
                t.integer :num_req
                t.string :sort

                t.integer :company_id
                t.integer :spider_date_id
                t.timestamps
            end

            create_table :companies_spider_dates, id: false do |t|
                t.belongs_to :company
                t.belongs_to :spider_date
            end
        end
    end
end
