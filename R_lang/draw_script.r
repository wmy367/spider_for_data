library("stringi")
attach(jobs)

# 人数需求
# dev.new()
jpeg("人数需求.jpg")
hist(num_req,breaks=max(num_req),col="red",xlab="需求人数",ylab="",main="需求人数分布")
# 学历需求
dev.off()
# dev.new()
jpeg("degree.jpg")
degree_pie <- with(jobs,table(stri_encode(degree,from="UTF-8")))

pct <- round(degree_pie/sum(degree_pie)*100,digits=2)

lbls2 <- paste(names(degree_pie)," ",pct,"%",sep="")

pie(degree_pie,main="学历需求",labels=lbls2,col=rainbow(length(lbls2)))
dev.off()
# 待遇
salary_names <- c(  "1000-2000元/月"  , "10001-15000元/月" ,"1000元/月以下" ,   "15001-20000元/月",
                    "15001-25000元/月", "20001-30000元/月","2001-4000元/月",   "30001-50000元/月",
                     "4001-6000元/月" ,  "50000元/月以上" ,  "6001-8000元/月" ,  "8001-10000元/月" ,"面议"  )
order_names <- c(   "1000元/月以下" ,"1000-2000元/月"  , "20001-30000元/月","2001-4000元/月","4001-6000元/月" ,
                    "6001-8000元/月" ,  "8001-10000元/月" ,"10001-15000元/月" ,  "15001-20000元/月",
                    "15001-25000元/月",  "30001-50000元/月",
                    "50000元/月以上" ,  "面议"  )
p_salary <- data.frame(salary=stri_encode(salary,from="UTF-8"),salary_low=salary_low,salary_high=salary_high,salary_fix=salary_fix)
p_salary$salary_low[!is.na(p_salary$salary_fix) & p_salary$salary_fix <= 1000] <- 900
p_salary$salary_low[is.na(p_salary$salary_fix) & is.na(p_salary$salary_low)] <- 0
p_salary$salary_high[!is.na(p_salary$salary_fix) && p_salary$salary_fix >= 50000] <- 50001

# tp <- table(p_salary$salary,p_salary$salary_low)
# index_tp <- which(tp!=0,arr.ind=TRUE)
# index_tp <- index_tp[order(index_tp[,2],decreasing=FALSE),]
# tp <- tp[index_tp]
# index_names <- dimnames(index_tp)
#
# par_salary <- table(stri_encode(p_salary$salary_low,from="UTF-8"))
# par_salary <- par_salary[order(names(par_salary))]

opar <- par(no.readonly=TRUE)
# par_salary <- with(p1_fpgas[order(p1_fpgas$salary_low),],table(stri_encode(salary,from="UTF-8")))
# par_salary  <- sort(par_salary,decreasing=TRUE)
# barplot(par_salary[par_salary != max(par_salary)],main="薪水分布 不包含 面议",xlab="",ylab="数量",cex.axis=0.7)
# dev.new()
# jpeg("salary1.jpg")
# par(las=2,fig=c(0,1,0.2,1))
# barplot(tp,names.arg=dimnames(index_tp)[[1]],main="薪水分布",xlab="",ylab="数量",cex.axis=0.7,width=1)
# dev.off()
# tp_names <- dimnames(index_tp)[[1]]
# jpeg("salary2.jpg")
# par(las=2,fig=c(0,1,0.2,1))
# barplot(tp[2:(length(tp)-0)],names.arg=tp_names[2:(length(tp_names)-0)],main="薪水分布 不包含面议",xlab="",ylab="数量",cex.axis=0.7)


tps <- table(p_salary$salary)
tps <- tps[order_names]
jpeg("salary1.jpg")
par(las=2,fig=c(0,1,0.2,1))
barplot(tps,main="薪水分布",xlab="",ylab="数量",cex.axis=0.7,width=1)
dev.off()
jpeg("salary2.jpg")
par(las=2,fig=c(0,1,0.2,1))
barplot(tps[1:(length(tps)-1)],main="薪水分布 不包含面议",xlab="",ylab="数量",cex.axis=0.7)
dev.off()
# par(opar)
detach(jobs)
