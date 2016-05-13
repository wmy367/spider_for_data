options(encoding="utf-8")
library("RSQLite")
library("Hmisc")
library("pastecs")
library("stringi")

sqlite <- dbDriver("SQLite")
con <- dbConnect(sqlite,"E:/ruby/JobSpider/db/database.sqlite3")
new_spider_date <- dbGetQuery(con,'select * from spider_dates')
new_spider_date <- data.frame(id=new_spider_date$id,search_key=new_spider_date$search_key)
new_spider_date_id <- max(new_spider_date$id)
query_str <- sprintf("select * from zhilian_jobs where (zhilian_jobs.search_key =\"%s\" and zhilian_jobs.spider_date_id =\"%s\" )",
                    new_spider_date[new_spider_date$id==new_spider_date_id,2][1],new_spider_date_id)

jobs <- dbGetQuery(con,query_str)


cmp_query_str <- sprintf("select * from companies ")
companies <- dbGetQuery(con,cmp_query_str)

companies <- with(companies,data.frame(id=id,size=stri_encode(size,from="UTF-8"),
                                        cmp_nature=stri_encode(nature,from="UTF-8"),
                                        industry=stri_encode(industry,from="UTF-8"),stringsAsFactors=FALSE))

jobs_companies <- companies[ companies$id[jobs$company_id],]

jobs <- cbind(jobs,jobs_companies)
# jobs$company_size <- companies$id[jobs$company_id]

gen_new_frame <- function(frame,new_order,frame_col){
    start <- frame[1,]
    white <- start
    for(n in names(white)){
        white[1,n] <- NULL
    }
    for(i in new_order){
        index <- which(frame[[frame_col]] == i)
        if(length(index)>0){
            start <- rbind(start,frame[index,])
        }else{
            start <- rbind(start,list())
        }
    }
}


summary(jobs$salary_low)
summary(jobs$salary_high)
describe(jobs$num_req)
stat.desc(jobs$exp_req_high,basic=TRUE,desc=TRUE,norm=FALSE)

dbDisconnect(con)
