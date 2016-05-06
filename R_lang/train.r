
library("RSQLite")
library("Hmisc")
library("pastecs")


sqlite <- dbDriver("SQLite")
con <- dbConnect(sqlite,"E:/ruby/JobSpider/db/database.sqlite3")

fpgas <- dbGetQuery(con,'select * from zhilian_jobs where (zhilian_jobs.search_key = "FPGA" )')

p1_fpgas <- fpgas[fpgas$spider_date_id == 9,]

summary(p1_fpgas$salary_low)
summary(p1_fpgas$salary_high)
describe(p1_fpgas$num_req)
stat.desc(p1_fpgas$exp_req_high,basic=TRUE,desc=TRUE,norm=FALSE)

dbClose(con)
