attach(jobs)

p_exp_req <- data.frame(exp_req=stri_encode(exp_req,from="UTF-8"),
                    exp_req_low=exp_req_low,
                    exp_req_high=exp_req_high,
                    exp_req_fix=exp_req_fix)
names <- c('1-3年', '10年以上' , '1年以下',  '2年以上', '3-5年',  '5-10年',  '不限', '无经验' )
order_names <- c('不限','1年以下','1-3年', '2年以上','3-5年','5-10年','10年以上' , '无经验' )

p_exp_req$exp_req_low[is.na(p_exp_req$exp_req_low) & p_exp_req$exp_req_fix == 1] <- 0
p_exp_req$exp_req_low[is.na(p_exp_req$exp_req_low) & p_exp_req$exp_req_fix > 1] <- 100
p_exp_req$exp_req_low[is.na(p_exp_req$exp_req_low)  & is.na(p_exp_req$exp_req_fix)] <- 200

tp <- table(p_exp_req$exp_req)
tp <- tp[order_names]
tp <- c(tp[1:3],tp[5:length(tp)])
dev.new()
par(las=2,fig=c(0,1,0.2,1))
barplot(tp,main="工作经验需求",xlab="",ylab="",cex.axis=0.7,width=1)

## nature

names <- c("保密" , "代表处"  ,  "股份制企业" ,"国企" , "合资"  , "民营"   ,  "其它",  "上市公司" ,"事业单位", "外商独资")
tp <- table(jobs$cmp_nature)
tp <- tp[order(tp,decreasing=TRUE)]
dev.new()
par(las=2,fig=c(0,1,0.2,1))
barplot(tp,main="企业性质",xlab="",ylab="",cex.axis=0.7,width=1)

## 规模

names <- c("100-499人"  , "1000-9999人" ,"10000人以上", "20-99人" ,  "20人以下"  ,"500-999人" , "保密" )
order_names <- c("20人以下"  ,"20-99人" , "100-499人"  ,"500-999人" , "1000-9999人" ,"10000人以上",  "保密" )

tp <- table(jobs$size)
tp <- tp[order_names]
dev.new()
par(las=2,fig=c(0,1,0.2,1))
barplot(tp,main="企业规模",xlab="",ylab="",cex.axis=0.7,width=1)


detach(jobs)
