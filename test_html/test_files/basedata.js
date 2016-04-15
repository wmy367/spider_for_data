﻿var dIndustry='@210500|互联网/电子商务|10100@160400|计算机软件|10100@160000|IT服务(系统/数据/维护)|10100@160500|电子技术/半导体/集成电路|10100@160200|计算机硬件|10100@300100|通信/电信/网络设备|10100@160100|通信/电信运营、增值服务|10100@160600|网络游戏|10100@180000|基金/证券/期货/投资|10200@180100|保险|10200@300500|银行|10200@300900|信托/担保/拍卖/典当|10200@140000|房地产/建筑/建材/工程|10800@140100|家居/室内设计/装饰装潢|10800@140200|物业管理/商业中心|10800@200300|专业服务/咨询(财会/法律/人力资源等)|10900@200302|广告/会展/公关|10900@201400|中介服务|10900@201300|检验/检测/认证|10900@300300|外包服务|10900@120400|快速消费品（食品/饮料/烟酒/日化）|10300@120200|耐用消费品（服饰/纺织/皮革/家具/家电）|10300@170500|贸易/进出口|10300@170000|零售/批发|10300@300700|租赁服务|10300@201100|教育/培训/院校|10400@120800|礼品/玩具/工艺美术/收藏品/奢侈品|10400@121000|汽车/摩托车|10500@129900|大型设备/机电设备/重工业|10500@121100|加工制造（原料加工/模具）|10500@121200|仪器仪表及工业自动化|10500@210600|印刷/包装/造纸|10500@120700|办公用品及设备|10500@121300|医药/生物工程|10500@121500|医疗设备/器械|10500@300000|航空/航天研究与制造|10500@150000|交通/运输|11500@301100|物流/仓储|11500@121400|医疗/护理/美容/保健/卫生服务|10000@200600|酒店/餐饮|10000@200800|旅游/度假|10000@210300|媒体/出版/影视/文化传播|11300@200700|娱乐/体育/休闲|11300@130000|能源/矿产/采掘/冶炼|11600@120500|石油/石化/化工|11600@130100|电气/电力/水利|11600@201200|环保|11600@200100|政府/公共事业/非盈利机构|11100@120600|学术/科研|11100@100000|农/林/牧/渔|11400@100100|跨领域经营|11400@990000|其他|11400@';
var dCity='@489|全国|0@530|北京|489@538|上海|489@548|广东|489@763|广州|548@764|韶关|548@765|深圳|548@766|珠海|548@767|汕头|548@768|佛山|548@769|江门|548@770|湛江|548@771|茂名|548@772|肇庆|548@773|惠州|548@774|梅州|548@775|汕尾|548@776|河源|548@777|阳江|548@778|清远|548@779|东莞|548@780|中山|548@781|潮州|548@782|揭阳|548@783|云浮|548@10112|台山|548@10113|普宁|548@10117|南沙开发区|548@10118|开平|548@10120|龙川|548@10138|鹤山|548@531|天津|489@546|湖北|489@736|武汉|546@737|黄石|546@738|十堰|546@739|宜昌|546@740|襄阳|546@741|鄂州|546@742|荆门|546@743|孝感|546@744|荆州|546@745|黄冈|546@746|咸宁|546@747|随州|546@748|恩施|546@10057|公安|546@10139|武穴|546@10140|天门|546@10168|仙桃|546@10169|潜江|546@10171|宜城|546@10179|神农架|546@556|陕西|489@854|西安|556@855|铜川|556@856|宝鸡|556@857|咸阳|556@858|渭南|556@859|延安|556@860|汉中|556@861|榆林|556@862|安康|556@863|商洛|556@10058|兴平|556@10470|杨凌|556@552|四川|489@801|成都|552@802|自贡|552@803|攀枝花|552@804|泸州|552@805|德阳|552@806|绵阳|552@807|广元|552@808|遂宁|552@809|内江|552@810|乐山|552@811|南充|552@812|眉山|552@813|宜宾|552@814|广安|552@815|达州|552@816|雅安|552@817|巴中|552@818|资阳|552@819|阿坝|552@820|甘孜|552@821|凉山|552@10065|峨眉|552@10104|西昌|552@10201|简阳|552@535|辽宁|489@600|大连|535@599|沈阳|535@601|鞍山|535@602|抚顺|535@603|本溪|535@604|丹东|535@605|锦州|535@606|营口|535@607|阜新|535@608|辽阳|535@609|盘锦|535@610|铁岭|535@611|朝阳|535@612|葫芦岛|535@10023|兴城|535@10070|海城|535@10080|昌图|535@10144|开原|535@536|吉林|489@613|长春|536@10198|珲春|536@614|吉林市|536@615|四平|536@616|辽源|536@617|通化|536@618|白山|536@619|松原|536@620|白城|536@621|延边|536@10122|公主岭|536@539|江苏|489@635|南京|539@639|苏州|539@640|昆山|539@650|常熟|539@652|张家港|539@636|无锡|539@651|江阴|539@637|徐州|539@638|常州|539@641|南通|539@642|连云港|539@643|淮安|539@644|盐城|539@645|扬州|539@646|镇江|539@647|泰州|539@649|靖江|539@648|宿迁|539@911|太仓市|539@10028|句容|539@10049|宜兴|539@10051|如皋|539@10114|丹阳|539@10124|扬中|539@10126|高邮|539@10136|启东|539@10149|泰兴|539@10150|溧阳|539@10152|盱眙|539@10155|通州|539@10175|金湖|539@544|山东|489@702|济南|544@703|青岛|544@704|淄博|544@705|枣庄|544@706|东营|544@707|烟台|544@708|潍坊|544@709|济宁|544@710|泰安|544@711|威海|544@712|日照|544@713|莱芜|544@714|临沂|544@715|德州|544@716|聊城|544@717|滨州|544@718|菏泽|544@912|荣成|544@10026|黄岛|544@10060|乳山|544@10096|城阳|544@10097|即墨|544@10099|肥城|544@10116|兖州|544@10146|海阳|544@10156|胶州|544@10172|胶南|544@10173|平度|544@10174|莱西|544@540|浙江|489@653|杭州|540@654|宁波|540@655|温州|540@656|嘉兴|540@657|湖州|540@658|绍兴|540@659|金华|540@660|衢州|540@661|舟山|540@662|台州|540@663|丽水|540@909|玉环县|540@10004|义乌|540@10052|平湖|540@10055|永康|540@10056|东阳|540@10067|嘉善|540@10085|余姚|540@10086|慈溪|540@10089|乐清|540@10091|永嘉|540@10127|桐乡|540@10128|瑞安|540@10129|温岭|540@10130|上虞|540@10131|诸暨|540@10133|海宁|540@10134|宁海|540@10145|三门|540@10151|德清|540@10154|象山|540@10158|方家山|540@10180|龙泉|540@549|广西|489@785|南宁|549@786|柳州|549@787|桂林|549@788|梧州|549@789|北海|549@790|防城港|549@791|钦州|549@792|贵港|549@793|玉林|549@794|百色|549@795|贺州|549@796|河池|549@904|来宾|549@905|崇左|549@541|安徽|489@664|合肥|541@665|芜湖|541@666|蚌埠|541@667|淮南|541@668|马鞍山|541@669|淮北|541@670|铜陵|541@671|安庆|541@672|黄山|541@673|滁州|541@674|阜阳|541@675|宿州|541@676|巢湖|541@677|六安|541@678|亳州|541@679|池州|541@680|宣城|541@10069|凤阳|541@10181|广德|541@10182|宿松|541@532|河北|489@565|石家庄|532@566|唐山|532@567|秦皇岛|532@568|邯郸|532@569|邢台|532@570|保定|532@571|张家口|532@572|承德|532@573|沧州|532@574|廊坊|532@575|衡水|532@10050|燕郊开发区|532@10142|固安|532@10143|遵化|532@10167|香河|532@10170|三河|532@533|山西|489@576|太原|533@577|大同|533@578|阳泉|533@579|长治|533@580|晋城|533@581|朔州|533@582|晋中|533@583|运城|533@584|忻州|533@585|临汾|533@586|吕梁|533@910|永济市|533@10082|和顺|533@534|内蒙古|489@587|呼和浩特|534@588|包头|534@589|乌海|534@590|赤峰|534@591|通辽|534@592|鄂尔多斯|534@593|呼伦贝尔|534@594|兴安盟|534@595|锡林郭勒盟|534@596|乌兰察布|534@597|巴彦淖尔|534@598|阿拉善盟|534@10031|乌审旗|534@10157|满洲里|534@537|黑龙江|489@622|哈尔滨|537@623|齐齐哈尔|537@624|鸡西|537@625|鹤岗|537@626|双鸭山|537@627|大庆|537@628|伊春|537@629|佳木斯|537@630|七台河|537@631|牡丹江|537@632|黑河|537@633|绥化|537@634|大兴安岭|537@10081|安达|537@10159|双城|537@10160|尚志|537@10161|绥芬河|537@10510|肇东市|537@542|福建|489@681|福州|542@682|厦门|542@683|莆田|542@684|三明|542@685|泉州|542@686|泉港区|542@687|漳州|542@688|南平|542@689|龙岩|542@690|宁德|542@10020|福安|542@10148|晋江|542@543|江西|489@691|南昌|543@692|景德镇|543@693|萍乡|543@694|九江|543@695|新余|543@696|鹰潭|543@697|赣州|543@698|吉安|543@699|宜春|543@700|抚州|543@701|上饶|543@545|河南|489@719|郑州|545@720|开封|545@721|洛阳|545@722|平顶山|545@723|安阳|545@724|鹤壁|545@725|新乡|545@726|焦作|545@727|濮阳|545@728|许昌|545@729|漯河|545@730|三门峡|545@731|南阳|545@732|商丘|545@733|信阳|545@734|周口|545@735|驻马店|545@10044|济源|545@10059|西平|545@10137|长葛|545@547|湖南|489@749|长沙|547@750|株洲|547@751|湘潭|547@752|衡阳|547@753|邵阳|547@754|岳阳|547@755|常德|547@756|张家界|547@757|益阳|547@758|郴州|547@759|永州|547@760|怀化|547@761|娄底|547@762|湘西|547@550|海南|489@799|海口|550@800|三亚|550@907|洋浦市/洋浦经济开发区|550@10153|琼海|550@10183|儋州|550@10184|五指山|550@10185|文昌|550@10186|万宁|550@10187|东方|550@10188|定安|550@10189|屯昌|550@10190|澄迈|550@10191|临高|550@10192|琼中|550@10193|保亭|550@10194|白沙|550@10195|昌江|550@10196|乐东|550@10197|陵水|550@551|重庆|489@553|贵州|489@822|贵阳|553@823|六盘水|553@824|遵义|553@825|安顺|553@826|铜仁|553@827|黔西南|553@828|毕节|553@829|黔东南|553@830|黔南|553@554|云南|489@831|昆明|554@832|曲靖|554@833|玉溪|554@834|保山|554@835|昭通|554@836|楚雄|554@837|红河|554@838|文山|554@839|思茅|554@840|西双版纳|554@841|大理|554@842|德宏|554@843|丽江|554@844|怒江|554@845|迪庆|554@846|临沧|554@10163|普洱|554@555|西藏|489@847|拉萨|555@848|昌都|555@849|山南|555@850|日喀则|555@851|那曲|555@852|阿里|555@853|林芝|555@557|甘肃|489@864|兰州|557@865|嘉峪关|557@866|金昌|557@867|白银|557@868|天水|557@869|武威|557@870|张掖|557@871|平凉|557@872|酒泉|557@873|庆阳|557@874|定西|557@875|陇南|557@876|临夏|557@877|甘南|557@558|青海|489@878|西宁|558@879|海东|558@880|海北|558@881|黄南|558@882|海南州|558@883|果洛|558@884|玉树|558@885|海西|558@559|宁夏|489@886|银川|559@887|石嘴山|559@888|吴忠|559@889|固原|559@906|中卫|559@560|新疆|489@890|乌鲁木齐|560@891|克拉玛依|560@892|吐鲁番|560@893|哈密|560@894|昌吉|560@895|博尔塔拉|560@896|巴音郭楞|560@897|阿克苏|560@898|克孜勒苏|560@899|喀什|560@900|和田|560@901|伊犁|560@902|塔城|560@903|阿勒泰|560@10061|石河子|560@10164|奎屯市|560@10166|乌苏|560@10176|阿拉尔|560@10177|图木舒克|560@10178|五家渠|560@561|香港|489@562|澳门|489@563|台湾省|489@480|国外|0@481|阿根廷|0@482|澳大利亚|0@483|奥地利|0@484|白俄罗斯|0@485|比利时|0@486|巴西|0@487|保加利亚|0@488|加拿大|0@490|塞浦路斯|0@491|捷克|0@492|丹麦|0@493|埃及|0@494|芬兰|0@495|法国|0@496|德国|0@497|希腊|0@498|匈牙利|0@499|冰岛|0@500|印度|0@501|印度尼西亚|0@502|爱尔兰|0@503|以色列|0@504|意大利|0@505|日本|0@506|韩国|0@507|科威特|0@508|马来西亚|0@509|荷兰|0@510|新西兰|0@511|挪威|0@513|巴基斯坦|0@514|波兰|0@515|葡萄牙|0@516|俄罗斯联邦|0@517|沙特阿拉伯|0@518|新加坡|0@519|南非|0@520|西班牙|0@521|瑞典|0@522|瑞士|0@523|泰国|0@524|土耳其|0@525|乌克兰|0@526|阿联酋|0@527|英国|0@528|美国|0@529|越南|0@913|安哥拉|0@914|加纳|0@915|尼日利亚|0@916|坦桑尼亚|0@917|乌干达|0@918|阿尔及利亚|0@919|塞内加尔|0@512|其他|0@';
var dJobtype='@4010200|销售业务|20@7001000|销售管理|20@7002000|销售行政/商务|20@4000000|客服/售前/售后技术支持|20@4082000|市场|20@4084000|公关/媒介|20@7004000|广告/会展|20@2060000|财务/审计/税务|21@5002000|人力资源|21@3010000|行政/后勤/文秘|21@201300|项目管理/项目协调|22@2023405|质量管理/安全防护|22@1050000|高级管理|22@160000|软件/互联网开发/系统集成|23@160300|硬件开发|23@160200|互联网产品/运营管理|23@160400|IT质量管理/测试/配置管理|23@200500|IT运维/技术支持|23@200300|IT管理/项目协调|23@5001000|电信/通信技术开发及应用|23@141000|房地产开发/经纪/中介|24@140000|土木/建筑/装修/市政工程|24@142000|物业管理|24@2071000|银行|25@2070000|证券/期货/投资管理/服务|25@7006000|保险|25@200900|信托/担保/拍卖/典当|25@4083000|采购/贸易|26@4010300|交通运输服务|26@4010400|物流/仓储|26@121100|生产管理/运营|27@160100|电子/电器/半导体/仪器仪表|27@7003000|汽车制造|27@7003100|汽车销售与服务|27@5003000|机械设计/制造/维修|27@7005000|服装/纺织/皮革设计/生产|27@5004000|技工/操作工|27@121300|生物/制药/医疗器械|27@120500|化工|27@2120000|影视/媒体/出版/印刷|28@2100708|艺术/设计|28@2140000|咨询/顾问/调研/数据分析|29@2090000|教育/培训|29@2080000|律师/法务/合规|29@2120500|翻译（口译与笔译）|29@5005000|商超/酒店/娱乐管理/服务|30@4040000|旅游/度假/出入境服务|30@201100|烹饪/料理/食品研发|30@2050000|保健/美容/美发/健身|30@2051000|医院/医疗/护理|30@6270000|社区/居民/家政服务|30@130000|能源/矿产/地质勘查|31@2023100|环境科学/环保|31@100000|农/林/牧/渔业|31@200100|公务员/事业单位/科研机构|31@5006000|实习生/培训生/储备干部|32@200700|志愿者/社会工作者|32@300100|兼职/临时|32@300200|其他|32@';
var dSubjobtype='@656|农艺师|100000@914|林业技术人员|100000@915|园艺师|100000@657|畜牧师|100000@655|动物育种/养殖|100000@913|动物营养/饲料研发|100000@654|饲料销售|100000@264|其他|100000@136|首席执行官CEO/总裁/总经理|1050000@138|首席运营官COO|1050000@139|首席财务官CFO|1050000@137|CTO/CIO|1050000@140|副总裁/副总经理|1050000@141|分公司/代表处负责人|1050000@144|部门/事业部管理|1050000@142|总裁助理/总经理助理|1050000@870|总编/副总编|1050000@907|行长/副行长|1050000@911|工厂厂长/副厂长|1050000@912|校长/副校长|1050000@143|合伙人|1050000@148|其他|1050000@023|化工工程师|120500@502|化工研发工程师|120500@396|化学分析|120500@112|化学技术应用|120500@111|化学操作|120500@371|化学制剂研发|120500@505|油漆/化工涂料研发|120500@614|塑料工程师|120500@504|化学实验室技术员/研究员|120500@503|化工项目管理|120500@113|其他|120500@061|工厂厂长/副厂长|121100@869|生产总监|121100@065|生产经理/车间主任|121100@064|生产主管/督导/组长|121100@932|生产运营管理|121100@063|生产项目经理/主管|121100@062|生产项目工程师|121100@871|产品管理|121100@487|生产计划|121100@075|制造工程师|121100@072|工艺/制程工程师|121100@074|工业工程师|121100@068|生产设备管理|121100@069|生产物料管理（PMC）|121100@592|包装工程师|121100@090|技术文档工程师|121100@077|其他|121100@296|医药代表|121300@770|医药销售经理/主管|121300@766|药品市场推广经理/主管|121300@767|药品市场推广专员/助理|121300@773|医疗器械销售|121300@378|医疗器械推广|121300@775|医药学术推广|121300@496|医药招商|121300@495|医药项目管理|121300@769|医药项目招投标管理|121300@292|生物工程/生物制药|121300@776|药品研发|121300@876|医疗器械研发|121300@293|临床研究员|121300@877|临床协调员|121300@765|临床数据分析员|121300@763|医药化学分析|121300@764|医药技术研发管理人员|121300@875|药品注册|121300@771|医疗器械注册|121300@294|药品生产/质量管理|121300@772|医疗器械生产/质量管理|121300@774|医疗器械维修/保养|121300@297|其他|121300@284|石油/天然气技术人员|130000@285|空调/热能工程师|130000@290|核力/火力工程师|130000@617|水利/水电工程师|130000@286|电力工程师/技术员|130000@372|地质勘查/选矿/采矿|130000@534|能源/矿产项目管理|130000@291|其他|130000@350|高级建筑工程师/总工|140000@096|建筑工程师|140000@884|建筑设计师|140000@097|土木/土建/结构工程师|140000@707|岩土工程|140000@703|建筑制图|140000@383|建筑工程测绘/测量|140000@466|道路/桥梁/隧道工程技术|140000@885|水利/港口工程技术|140000@886|架线和管道工程技术|140000@099|给排水/暖通/空调工程|140000@289|智能大厦/布线/弱电/安防|140000@100|室内装潢设计|140000@564|幕墙工程师|140000@563|园林/景观设计|140000@103|城市规划与设计|140000@562|市政工程师|140000@106|工程监理/质量管理|140000@102|工程造价/预结算|140000@704|工程资料管理|140000@705|建筑施工现场管理|140000@706|施工队长|140000@107|施工员|140000@565|建筑工程安全管理|140000@108|其他|140000@710|房地产项目策划经理/主管|141000@351|房地产项目策划专员/助理|141000@883|房地产项目招投标|141000@701|房地产项目开发报建|141000@711|房地产项目配套工程师|141000@709|房地产销售经理|141000@882|房地产销售主管|141000@708|房地产销售/置业顾问|141000@567|房地产评估|141000@105|房地产中介/交易|141000@566|房地产项目管理|141000@568|其他|141000@393|物业经理/主管|142000@095|物业管理专员/助理|142000@101|物业租赁/销售|142000@352|物业维修|142000@712|物业顾问|142000@465|物业招商管理|142000@569|其他|142000@044|高级软件工程师|160000@045|软件工程师|160000@079|软件研发工程师|160000@665|需求工程师|160000@667|系统架构设计师|160000@668|系统分析员|160000@047|数据库开发工程师|160000@048|ERP技术/开发应用|160000@053|互联网软件工程师|160000@679|手机软件开发工程师|160000@687|嵌入式软件开发|160000@863|移动互联网开发|160000@864|WEB前端开发|160000@317|语音/视频/图形开发|160000@669|用户界面（UI）设计|160000@861|用户体验（UE/UX）设计|160000@054|网页设计/制作/美工|160000@057|游戏设计/开发|160000@671|游戏策划|160000@672|游戏界面设计|160000@666|系统集成工程师|160000@060|其他|160000@686|电子技术研发工程师|160100@078|电子/电器工程师|160100@528|电器研发工程师|160100@091|电子/电器工艺/制程工程师|160100@089|电路工程师/技术员|160100@406|模拟电路设计/应用工程师|160100@408|版图设计工程师|160100@404|集成电路IC设计/应用工程师|160100@405|IC验证工程师|160100@082|电子元器件工程师|160100@684|射频工程师|160100@318|无线电工程师|160100@411|激光/光电子技术|160100@559|光源/照明工程师|160100@681|变压器与磁电工程师|160100@083|电池/电源开发|160100@085|家用电器/数码产品研发|160100@560|空调工程/设计|160100@402|音频/视频工程师/技术员|160100@808|安防系统工程师|160100@401|电子/电器设备工程师|160100@403|电子/电器维修/保养|160100@409|电子/电器项目管理|160100@865|电气工程师|160100@467|电气设计|160100@683|电气线路设计|160100@682|线路结构设计|160100@081|半导体技术|160100@086|仪器/仪表/计量工程师|160100@033|自动化工程师|160100@084|现场应用工程师（FAE）|160100@410|测试/可靠性工程师|160100@094|其他|160100@316|互联网产品经理/主管|160200@675|互联网产品专员/助理|160200@676|电子商务经理/主管|160200@677|电子商务专员/助理|160200@052|网络运营管理|160200@670|网络运营专员/助理|160200@056|网站编辑|160200@552|SEO/SEM|160200@556|其他|160200@314|高级硬件工程师|160300@043|硬件工程师|160300@407|嵌入式硬件开发|160300@557|其他|160300@693|IT质量管理经理/主管|160400@049|IT质量管理工程师|160400@694|系统测试|160400@695|软件测试|160400@696|硬件测试|160400@868|配置管理工程师|160400@692|信息技术标准化工程师|160400@561|其他|160400@305|公务员/事业单位人员|200100@362|科研管理人员|200100@255|科研人员|200100@306|其他|200100@398|CTO/CIO|200300@928|IT技术/研发总监|200300@313|IT技术/研发经理/主管|200300@688|IT项目总监|200300@042|IT项目经理/主管|200300@689|IT项目执行/协调人员|200300@841|其他|200300@040|信息技术经理/主管|200500@041|信息技术专员|200500@058|IT技术支持/维护经理|200500@315|IT技术支持/维护工程师|200500@046|系统工程师|200500@051|系统管理员|200500@055|网络工程师|200500@388|网络管理员|200500@059|网络与信息安全工程师|200500@389|数据库管理员|200500@678|计算机硬件维护工程师|200500@551|ERP实施顾问|200500@690|IT技术文员/助理|200500@699|IT文档工程师|200500@698|Helpdesk|200500@840|其他|200500@658|志愿者/义工|200700@838|社会工作者/社工|200700@839|其他|200700@930|信托服务|200900@921|担保业务|200900@929|拍卖师|200900@931|典当业务|200900@811|珠宝/收藏品鉴定|200900@812|其他|200900@275|厨师/面点师|201100@635|食品加工/处理|201100@369|调酒师/茶艺师/咖啡师|201100@370|营养师|201100@801|厨工|201100@596|食品/饮料研发|201100@836|食品/饮料检验|201100@837|其他|201100@813|项目总监|201300@814|项目经理/项目主管|201300@815|项目专员/助理|201300@816|广告/会展项目管理|201300@817|IT项目总监|201300@818|IT项目经理/主管|201300@819|IT项目执行/协调人员|201300@820|通信项目管理|201300@829|房地产项目配套工程师|201300@830|房地产项目管理|201300@834|证券/投资项目管理|201300@831|保险项目经理/主管|201300@821|生产项目经理/主管|201300@822|生产项目工程师|201300@823|汽车工程项目管理|201300@824|电子/电器项目管理|201300@825|服装/纺织/皮革项目管理|201300@826|医药项目管理|201300@827|化工项目管理|201300@828|物流/仓储项目管理|201300@832|咨询项目管理|201300@833|能源/矿产项目管理|201300@835|其他|201300@380|环保技术工程师|2023100@616|环境评价工程师|2023100@905|环境监测工程师|2023100@615|水处理工程师|2023100@903|固废处理工程师|2023100@904|废气处理工程师|2023100@266|生态治理/规划|2023100@379|环境管理/园林景区保护|2023100@267|其他|2023100@249|质量管理/测试经理|2023405@250|质量管理/测试主管|2023405@251|质量管理/测试工程师|2023405@252|质量检验员/测试员|2023405@067|化验/检验|2023405@253|认证/体系工程师/审核员|2023405@807|环境/健康/安全经理/主管|2023405@529|环境/健康/安全工程师|2023405@330|供应商/采购质量管理|2023405@331|安全管理|2023405@384|安全消防|2023405@254|其他|2023405@377|美发/发型师|2050000@640|化妆师|2050000@639|美容师/美甲师|2050000@802|美容顾问(BA)|2050000@376|健身/美体/舞蹈教练|2050000@641|按摩/足疗|2050000@638|救生员|2050000@234|其他|2050000@228|医疗管理人员|2051000@229|综合门诊/全科医生|2051000@642|内科医生|2051000@643|外科医生|2051000@644|儿科医生|2051000@645|牙科医生|2051000@899|美容整形科医生|2051000@646|中医科医生|2051000@647|麻醉医生|2051000@373|心理医生|2051000@648|眼科医生/验光师|2051000@900|医学影像/放射科医师|2051000@374|化验/检验科医师|2051000@232|药房管理/药剂师|2051000@804|理疗师|2051000@898|兽医|2051000@397|护士/护理人员|2051000@649|营养师|2051000@375|针灸/推拿|2051000@650|其他|2051000@399|首席财务官CFO|2060000@200|财务总监|2060000@201|财务经理|2060000@202|财务主管/总帐主管|2060000@714|财务顾问|2060000@205|财务助理|2060000@203|财务分析经理/主管|2060000@204|财务分析员|2060000@206|会计经理/主管|2060000@207|会计/会计师|2060000@713|会计助理/文员|2060000@208|出纳员|2060000@212|审计经理/主管|2060000@213|审计专员/助理|2060000@209|税务经理/主管|2060000@210|税务专员/助理|2060000@211|成本经理/主管|2060000@527|成本会计|2060000@570|资产/资金管理|2060000@715|资金专员|2060000@214|统计员|2060000@215|其他|2060000@349|证券总监/部门经理|2070000@187|证券/期货/外汇经纪人|2070000@910|证券/投资客户总监|2070000@191|证券/投资客户经理|2070000@908|证券/投资客户主管|2070000@909|证券/投资客户代表|2070000@575|证券分析/金融研究|2070000@188|投资/理财服务|2070000@576|投资银行业务|2070000@346|融资总监|2070000@809|融资经理/主管|2070000@810|融资专员/助理|2070000@577|股票/期货操盘手|2070000@579|资产评估|2070000@190|风险管理/控制/稽查|2070000@198|储备经理人|2070000@468|证券/投资项目管理|2070000@199|其他|2070000@716|行长/副行长|2071000@347|银行经理/主任|2071000@721|银行大堂经理|2071000@887|银行客户总监|2071000@718|银行客户经理|2071000@888|银行客户主管|2071000@889|银行客户代表|2071000@192|银行客户服务|2071000@719|综合业务经理/主管|2071000@720|综合业务专员/助理|2071000@193|银行会计/柜员|2071000@572|公司业务|2071000@573|个人业务|2071000@571|银行卡/电子银行业务推广|2071000@194|信贷管理/资信评估/分析|2071000@725|信审核查|2071000@717|外汇交易|2071000@722|进出口/信用证结算|2071000@723|清算人员|2071000@724|风险控制|2071000@574|其他|2071000@225|法务经理/主管|2080000@629|法务专员/助理|2080000@223|律师|2080000@860|律师助理|2080000@363|企业律师/合规经理/主管|2080000@224|企业律师/合规顾问|2080000@226|知识产权/专利顾问/代理人|2080000@497|合同管理|2080000@227|其他|2080000@361|幼教|2090000@628|小学教师|2090000@627|初中教师|2090000@625|高中教师|2090000@358|大学教师|2090000@626|职业技术教师|2090000@359|家教|2090000@785|兼职教师|2090000@791|理科教师|2090000@792|文科教师|2090000@793|外语教师|2090000@790|音乐教师|2090000@906|美术教师|2090000@360|体育老师/教练|2090000@624|校长/副校长|2090000@132|教学/教务管理人员|2090000@786|培训督导|2090000@131|培训师/讲师|2090000@788|培训助理/助教|2090000@135|教育产品开发|2090000@787|培训策划|2090000@789|培训/招生/课程顾问|2090000@134|其他|2090000@364|设计管理人员|2100708@153|艺术/设计总监|2100708@753|绘画|2100708@754|原画师|2100708@608|CAD设计/制图|2100708@149|平面设计|2100708@554|三维/3D设计/制作|2100708@555|Flash设计/开发|2100708@673|特效设计|2100708@674|视觉设计|2100708@862|用户体验（UE/UX）设计|2100708@184|美术编辑/美术设计|2100708@151|多媒体/动画设计|2100708@150|包装设计|2100708@366|家具设计|2100708@751|家居用品设计|2100708@365|工艺品/珠宝设计|2100708@752|玩具设计|2100708@755|店面/展览/展示/陈列设计|2100708@750|工业设计|2100708@867|游戏界面设计|2100708@157|其他|2100708@175|导演/编导|2120000@367|总编/副总编|2120000@180|艺术指导/舞美设计|2120000@179|摄影师/摄像师|2120000@182|化妆师/造型师/服装/道具|2120000@177|主持人/司仪|2120000@893|演员/模特|2120000@891|配音员|2120000@890|音效师|2120000@185|后期制作|2120000@178|经纪人/星探|2120000@760|放映管理|2120000@762|作家/编剧/撰稿人|2120000@176|文字编辑/组稿|2120000@892|美术编辑/美术设计|2120000@612|记者/采编|2120000@761|电话采编|2120000@152|文案策划|2120000@395|校对/录入|2120000@183|发行管理|2120000@181|排版设计|2120000@533|印刷排版/制版|2120000@613|印刷操作|2120000@186|其他|2120000@268|英语翻译|2120500@271|法语翻译|2120500@269|日语翻译|2120500@270|德语翻译|2120500@272|俄语翻译|2120500@630|西班牙语翻译|2120500@631|意大利语翻译|2120500@632|葡萄牙语翻译|2120500@633|阿拉伯语翻译|2120500@273|韩语/朝鲜语翻译|2120500@274|其他语种翻译|2120500@216|咨询总监|2140000@217|咨询经理/主管|2140000@219|咨询顾问/咨询员|2140000@220|专业顾问|2140000@623|调研员|2140000@894|数据分析师|2140000@221|情报信息分析|2140000@781|猎头顾问/助理|2140000@783|咨询项目管理|2140000@222|其他|2140000@659|兼职|300100@300|临时|300100@303|其他|300100@304|其他|300200@328|行政总监|3010000@114|行政经理/主管/办公室主任|3010000@115|行政专员/助理|3010000@116|助理/秘书/文员|3010000@117|前台/总机/接待|3010000@859|文档/资料管理|3010000@498|电脑操作/打字/录入员|3010000@119|后勤人员|3010000@329|其他|3010000@391|客户服务总监|4000000@390|客户服务经理|4000000@549|客户服务主管|4000000@257|客户服务专员/助理|4000000@261|客户关系/投诉协调人员|4000000@260|客户咨询热线/呼叫中心人员|4000000@846|网络/在线客服|4000000@258|售前/售后技术支持管理|4000000@392|售前/售后技术支持工程师|4000000@262|其他|4000000@006|销售代表|4010200@008|客户代表|4010200@009|销售工程师|4010200@007|渠道/分销专员|4010200@925|区域销售专员/助理|4010200@933|业务拓展专员/助理|4010200@926|大客户销售代表|4010200@011|电话销售|4010200@924|网络/在线销售|4010200@452|团购业务员|4010200@927|销售业务跟单|4010200@010|医药代表|4010200@018|其他|4010200@246|机动车司机/驾驶|4010300@879|列车驾驶/操作|4010300@880|船舶驾驶/操作|4010300@245|飞机驾驶/操作|4010300@594|公交/地铁乘务|4010300@489|列车乘务|4010300@881|船舶乘务|4010300@878|船员/水手|4010300@737|航空乘务|4010300@736|地勤人员|4010300@248|其他|4010300@241|物流总监|4010400@597|物流经理/主管|4010400@242|物流专员/助理|4010400@740|货运代理|4010400@353|运输经理/主管|4010400@247|快递员/速递员|4010400@746|水运/空运/陆运操作|4010400@741|集装箱业务|4010400@742|报关员|4010400@490|单证员|4010400@243|仓库经理/主管|4010400@244|仓库/物料管理员|4010400@745|理货/分拣/打包|4010400@394|物流/仓储调度|4010400@744|物流/仓储项目管理|4010400@491|搬运工|4010400@598|其他|4010400@799|旅游产品销售|4040000@530|旅游顾问|4040000@282|导游/票务|4040000@531|旅游计划调度|4040000@897|旅游产品/线路策划|4040000@800|签证业务办理|4040000@283|其他|4040000@158|市场总监|4082000@600|市场经理|4082000@604|市场主管|4082000@171|市场专员/助理|4082000@159|市场营销经理|4082000@601|市场营销主管|4082000@160|市场营销专员/助理|4082000@311|业务拓展经理/主管|4082000@602|业务拓展专员/助理|4082000@847|产品经理|4082000@848|产品主管|4082000@849|产品专员/助理|4082000@168|品牌经理|4082000@603|品牌主管|4082000@170|品牌专员/助理|4082000@161|市场策划/企划经理/主管|4082000@605|市场策划/企划专员/助理|4082000@851|市场文案策划|4082000@749|活动策划|4082000@759|活动执行|4082000@748|促销主管/督导|4082000@850|促销员|4082000@451|网站推广|4082000@866|SEO/SEM|4082000@853|学术推广|4082000@747|选址拓展/新店开发|4082000@167|市场调研与分析|4082000@174|其他|4082000@235|采购总监|4083000@550|采购经理/主管|4083000@236|采购专员/助理|4083000@663|供应商开发|4083000@488|供应链管理|4083000@664|买手|4083000@312|外贸/贸易经理/主管|4083000@237|外贸/贸易专员/助理|4083000@238|贸易跟单|4083000@239|报关员|4083000@240|其他|4083000@162|公关总监|4084000@606|公关经理/主管|4084000@163|公关专员/助理|4084000@164|媒介经理/主管|4084000@165|媒介专员/助理|4084000@513|媒介策划/管理|4084000@768|政府事务管理|4084000@607|其他|4084000@680|通信技术工程师|5001000@500|通信研发工程师|5001000@323|数据通信工程师|5001000@324|移动通信工程师|5001000@325|电信网络工程师|5001000@322|电信交换工程师|5001000@320|有线传输工程师|5001000@321|无线/射频通信工程师|5001000@326|通信电源工程师|5001000@558|通信标准化工程师|5001000@499|通信项目管理|5001000@327|其他|5001000@120|人力资源总监|5002000@121|人力资源经理|5002000@618|人力资源主管|5002000@122|人力资源专员/助理|5002000@125|培训经理/主管|5002000@126|培训专员/助理|5002000@123|招聘经理/主管|5002000@124|招聘专员/助理|5002000@127|薪酬福利经理/主管|5002000@780|薪酬福利专员/助理|5002000@619|绩效考核经理/主管|5002000@778|绩效考核专员/助理|5002000@620|员工关系/企业文化/工会|5002000@858|企业培训师/讲师|5002000@779|人事信息系统(HRIS)管理|5002000@128|猎头顾问/助理|5002000@130|其他|5002000@332|工程机械经理|5003000@333|工程机械主管|5003000@729|机械设备经理|5003000@583|机械设备工程师|5003000@029|机械工程师|5003000@093|机械设计师|5003000@334|机械制图员|5003000@584|机械研发工程师|5003000@586|机械结构工程师|5003000@585|机械工艺/制程工程师|5003000@587|气动工程师|5003000@591|CNC/数控工程师|5003000@588|模具工程师|5003000@873|夹具工程师|5003000@874|注塑工程师|5003000@590|铸造/锻造工程师/技师|5003000@732|机电工程师|5003000@593|材料工程师|5003000@589|机械维修/保养|5003000@735|飞机设计与制造|5003000@734|飞机维修/保养|5003000@595|列车设计与制造|5003000@920|列车维修/保养|5003000@923|船舶设计与制造|5003000@922|船舶维修/保养|5003000@335|其他|5003000@339|车床/磨床/铣床/冲床工|5004000@343|模具工|5004000@338|钳工/机修工/钣金工|5004000@337|电焊工/铆焊工|5004000@599|电工|5004000@342|水工/木工/油漆工|5004000@341|铲车/叉车工|5004000@340|空调工/电梯工/锅炉工|5004000@336|汽车维修/保养|5004000@344|普工/操作工|5004000@345|其他|5004000@895|店长/卖场管理|5005000@016|楼面管理|5005000@493|品牌/连锁招商管理|5005000@276|大堂经理/领班|5005000@281|酒店管理|5005000@636|客房管理|5005000@794|收银主管|5005000@354|收银员|5005000@017|店员/营业员/导购员|5005000@355|理货员|5005000@896|促销主管/督导|5005000@173|促销员|5005000@634|品类管理|5005000@277|前厅接待/礼仪/迎宾|5005000@796|预订员|5005000@798|行李员|5005000@279|服务员|5005000@492|防损员/内保|5005000@494|奢侈品销售|5005000@637|主持人/司仪|5005000@357|其他|5005000@299|实习生|5006000@302|培训生|5006000@301|储备干部|5006000@381|其他|5006000@805|保安经理|6270000@104|保安|6270000@308|家政人员|6270000@611|婚礼/庆典策划服务|6270000@233|宠物护理和美容|6270000@901|保姆/母婴护理|6270000@806|搬运工|6270000@651|保洁|6270000@310|其他|6270000@000|销售总监|7001000@001|销售经理|7001000@002|销售主管|7001000@845|客户总监|7001000@004|客户经理|7001000@548|客户主管|7001000@003|渠道/分销总监|7001000@453|渠道/分销经理/主管|7001000@005|区域销售总监|7001000@843|区域销售经理/主管|7001000@454|业务拓展经理/主管|7001000@660|大客户销售经理|7001000@455|团购经理/主管|7001000@844|医药销售经理/主管|7001000@458|其他|7001000@459|销售行政经理/主管|7002000@015|销售行政专员/助理|7002000@662|销售运营经理/主管|7002000@661|销售运营专员/助理|7002000@461|商务经理/主管|7002000@460|商务专员/助理|7002000@463|销售培训师/讲师|7002000@462|销售数据分析|7002000@464|其他|7002000@872|汽车动力系统工程师|7003000@474|汽车底盘/总装工程师|7003000@470|车身设计工程师|7003000@476|汽车电子工程师|7003000@475|汽车机械工程师|7003000@473|汽车零部件设计师|7003000@472|汽车装配工艺工程师|7003000@478|安全性能工程师|7003000@471|汽车工程项目管理|7003000@485|其他|7003000@469|汽车销售|7003100@479|汽车零配件销售|7003100@581|汽车售后服务/客户服务|7003100@728|汽车维修/保养|7003100@727|汽车质量管理/检验检测|7003100@480|汽车定损/车险理赔|7003100@483|汽车装饰美容|7003100@484|二手车评估师|7003100@477|4S店管理|7003100@582|其他|7003100@756|广告创意/设计总监|7004000@757|广告创意/设计经理/主管|7004000@510|广告创意/设计师|7004000@509|广告文案策划|7004000@512|广告美术指导|7004000@514|广告制作执行|7004000@855|广告客户总监|7004000@506|广告客户经理|7004000@856|广告客户主管|7004000@507|广告客户代表|7004000@508|广告/会展业务拓展|7004000@610|会展策划/设计|7004000@857|会务经理/主管|7004000@172|会务专员/助理|7004000@609|广告/会展项目管理|7004000@515|其他|7004000@155|服装/纺织品设计|7005000@522|服装打样/制版|7005000@739|服装/纺织/皮革工艺师|7005000@738|电脑放码员|7005000@524|裁床|7005000@523|样衣工|7005000@521|面料辅料开发/采购|7005000@520|服装/纺织/皮革跟单|7005000@516|服装/纺织品/皮革销售|7005000@519|服装/纺织品/皮革质量管理|7005000@517|服装/纺织/皮革项目管理|7005000@525|其他|7005000@535|保险业务管理|7006000@196|保险代理/经纪人/客户经理|7006000@537|保险顾问/财务规划师|7006000@540|保险产品开发/项目策划|7006000@543|保险培训师|7006000@545|保险契约管理|7006000@197|核保理赔|7006000@726|汽车定损/车险理赔|7006000@348|保险精算师|7006000@541|客户服务/续期管理|7006000@539|保险内勤|7006000@536|保险项目经理/主管|7006000@544|储备经理人|7006000@546|其他|7006000@';
var dDate='@1|今天@3|最近三天@7|最近一周@30|最近一个月@|所有日期@';
var dExpe='@0000|无经验@0001|1年以下@0103|1-3年@0305|3-5年@0510|5-10年@1099|10年以上@';
var dDegree='@-1|无@7|高中/中专/中技及以下@5|大专及同等学历@4|本科/学士及等同学历@3|硕士/研究生及等同学历@1|博士及以上@8|其他@';
var dComptype='@1|国企@5|民营@4|合资@2|外商独资@8|股份制企业@9|上市公司@3|代表处@6|国家机关@10|事业单位@7|其它@';
var dCompsize='@1|20人以下@2|20-99人@3|100-499人@4|500-999人@5|1000-9999人@6|10000人以上@';
var dDistrict='@2001|东城区|530@2002|西城区|530@2003|崇文区|530@2004|宣武区|530@2005|海淀区|530@2006|朝阳区|530@2007|丰台区|530@2008|石景山区|530@2009|通州区|530@2010|顺义区|530@2011|房山区|530@2012|大兴区|530@2013|昌平区|530@2014|怀柔区|530@2015|平谷区|530@2016|门头沟区|530@2017|密云县|530@2018|延庆县|530@2165|和平区|531@2166|河东区|531@2167|河西区|531@2168|南开区|531@2169|河北区|531@2170|红桥区|531@2171|滨海新区|531@2172|东丽区|531@2173|西青区|531@2174|津南区|531@2175|北辰区|531@2176|武清区|531@2177|宝坻区|531@2178|静海县|531@2179|宁河县|531@2180|蓟县|531@2019|黄浦区|538@2021|徐汇区|538@2022|长宁区|538@2023|静安区|538@2024|普陀区|538@2025|闸北区|538@2026|虹口区|538@2027|杨浦区|538@2028|闵行区|538@2029|宝山区|538@2030|嘉定区|538@2031|浦东新区|538@2032|金山区|538@2033|松江区|538@2034|青浦区|538@2035|奉贤区|538@2036|崇明县|538@2312|渝中区|551@2313|江北区|551@2314|南岸区|551@2315|沙坪坝区|551@2316|九龙坡区|551@2317|大渡口区|551@2318|渝北区|551@2319|巴南区|551@2320|北碚区|551@2321|万州区|551@2322|黔江区|551@2323|永川区|551@2324|涪陵区|551@2325|长寿区|551@2326|江津区|551@2327|合川区|551@2328|双桥区|551@2329|万盛区|551@2330|南川区|551@2331|荣昌县|551@2332|大足县|551@2333|壁山县|551@2334|铜梁县|551@2335|潼南县|551@2336|綦江县|551@2337|忠县|551@2338|开县|551@2339|云阳县|551@2340|梁平县|551@2341|垫江县|551@2342|丰都县|551@2343|奉节县|551@2344|巫山县|551@2345|巫溪县|551@2346|城口县|551@2347|武隆县|551@2348|石柱县|551@2349|秀山县|551@2350|酉阳县|551@2351|彭水县|551@2360|北部新区|551@2433|石柱土家族自治县|551@2434|秀山土家族苗族自治县|551@2435|酉阳土家族苗族自治县|551@2436|彭水苗族土家族自治县|551@2288|长安区|565@2289|桥东区|565@2290|桥西区|565@2291|新华区|565@2292|裕华区|565@2293|东开发区|565@2294|井陉矿区|565@2295|辛集市|565@2296|藁城市|565@2297|晋州市|565@2298|新乐市|565@2299|鹿泉市|565@2300|正定县|565@2301|平山县|565@2302|元氏县|565@2412|栾城县|565@2413|行唐县|565@2414|灵寿县|565@2415|深泽县|565@2416|无极县|565@2417|赵县|565@2418|高邑县|565@2419|赞皇县|565@2420|井陉县|565@2501|小店区|576@2502|迎泽区|576@2503|杏花岭区|576@2504|尖草坪区|576@2505|万柏林区|576@2506|晋源区|576@2507|清徐县|576@2508|阳曲县|576@2509|娄烦县|576@2510|古交市|576@2126|和平区|599@2127|沈河区|599@2128|皇姑区|599@2129|大东区|599@2130|铁西区|599@2132|东陵区（浑南新区）|599@2133|于洪区|599@2134|沈北新区|599@2135|苏家屯区|599@2382|棋盘山开发区|599@2383|新民市|599@2384|辽中县|599@2385|康平县|599@2386|法库县|599@2181|西岗区|600@2182|中山区|600@2183|沙河口区|600@2184|甘井子区|600@2185|高新园区|600@2186|开发区|600@2187|旅顺口区|600@2188|金州区 |600@2394|普兰店市|600@2395|瓦房店市|600@2396|庄河市|600@2397|长海县|600@2398|长兴岛|600@2140|南关区|613@2141|宽城区|613@2142|朝阳区|613@2143|二道区|613@2144|绿园区|613@2145|高新开发区|613@2146|经济开发区|613@2147|汽车产业开发区|613@2148|双阳区|613@2387|榆树市|613@2388|九台市|613@2389|德惠市|613@2390|农安县|613@2270|南岗区|622@2271|道里区|622@2272|道外区|622@2273|香坊区|622@2274|松北区|622@2275|平房区|622@2276|呼兰区|622@2277|阿城区|622@2424|五常市|622@2426|方正县|622@2427|依兰县|622@2428|宾　县|622@2429|巴彦县|622@2430|木兰县|622@2431|通河县|622@2432|延寿县|622@2084|玄武区|635@2086|秦淮区|635@2087|建邺区|635@2088|鼓楼区|635@2090|浦口区|635@2091|六合区|635@2092|栖霞区|635@2093|雨花台区|635@2094|江宁区|635@2095|溧水县|635@2096|高淳县|635@2512|江阴市|636@2513|宜兴市|636@2514|崇安区|636@2515|南长区|636@2516|北塘区|636@2517|滨湖区|636@2518|无锡新区|636@2519|惠山区|636@2520|锡山区|636@2215|虎丘区|639@2216|吴中区|639@2217|相城区|639@2218|工业园区|639@2404|高新区|639@2511|姑苏区|639@2561|吴江区|639@2233|上城区|653@2234|下城区|653@2235|江干区|653@2236|拱墅区|653@2237|西湖区|653@2238|滨江区|653@2239|萧山区|653@2240|余杭区|653@2241|桐庐县|653@2242|淳安县|653@2409|建德市|653@2457|下沙|653@2479|临安市|653@2478|富阳市|653@2352|庐阳区|664@2353|瑶海区|664@2354|蜀山区|664@2355|包河区|664@2356|经济技术开发区|664@2357|滨湖新区|664@2358|新站综合开发试验区|664@2359|高新区|664@2437|政务文化新区|664@2438|北城新区|664@2251|鼓楼区|681@2252|台江区|681@2253|仓山区|681@2254|马尾区|681@2255|晋安区|681@2256|闽侯县|681@2257|罗源县|681@2258|连江县|681@2259|永泰县|681@2260|闽清县|681@2261|平潭县|681@2472|长乐|681@2473|福清|681@2264|思明区|682@2265|湖里区|682@2266|集美区|682@2267|海沧区|682@2268|同安区|682@2269|翔安区|682@2536|东湖区|691@2537|西湖区|691@2538|青云谱区|691@2539|青山湖区|691@2540|湾里区|691@2541|南昌县|691@2542|新建县|691@2543|进贤县|691@2544|安义县|691@2097|市中区|702@2098|历下区|702@2099|天桥区|702@2100|槐荫区|702@2101|历城区|702@2102|长清区|702@2103|平阴县|702@2104|济阳县|702@2105|商河县|702@2376|高新区|702@2471|章丘市|702@2153|市南区|703@2154|市北区（新行政区）|703@2156|李沧区|703@2157|黄岛区（新行政区）|703@2158|崂山区|703@2159|城阳区|703@2160|胶州市|703@2161|即墨市|703@2162|平度市|703@2164|莱西市|703@2391|保税区|703@2392|青岛经济技术开发区|703@2393|青岛高新技术产业开发区|703@2545|芝罘区|707@2546|福山区|707@2547|牟平区|707@2548|莱山区|707@2549|长岛县|707@2550|龙口市|707@2551|莱阳市|707@2552|莱州市|707@2553|蓬莱市|707@2554|招远市|707@2555|栖霞市|707@2556|海阳市|707@2557|高新区|707@2558|开发区|707@2194|中原区|719@2195|二七区|719@2196|管城区|719@2197|金水区|719@2198|惠济区|719@2199|郑东新区 |719@2203|经开区|719@2204|高新区|719@2205|上街区|719@2399|新郑市|719@2400|登封市|719@2401|新密市|719@2402|荥阳市|719@2403|中牟县|719@2444|巩义市|719@2445|航空港区|719@2057|江岸区|736@2058|江汉区|736@2059|硚口区|736@2060|汉阳区|736@2061|武昌区|736@2062|青山区|736@2063|洪山区|736@2064|蔡甸区|736@2065|东西湖区|736@2066|汉南区|736@2067|江夏区|736@2068|黄陂区|736@2069|新洲区|736@2365|武汉经济技术开发区|736@2366|东湖新技术开发区|736@2367|武汉吴家山经济技术开发区|736@2224|芙蓉区|749@2225|天心区|749@2226|岳麓区|749@2227|开福区|749@2228|雨花区|749@2405|望城区|749@2406|长沙县|749@2407|宁乡县|749@2408|浏阳市|749@2045|越秀区|763@2046|海珠区|763@2047|荔湾区|763@2048|天河区|763@2049|白云区|763@2050|黄埔区|763@2052|番禺区|763@2051|花都区|763@2053|萝岗区|763@2054|南沙区|763@2475|增城|763@2474|从化|763@2037|福田区|765@2038|罗湖区|765@2039|南山区|765@2040|盐田区|765@2041|宝安区|765@2042|龙岗区|765@2043|坪山新区|765@2044|光明新区|765@2361|龙华新区|765@2362|大鹏新区|765@2531|禅城区|768@2534|三水区|768@2535|高明区|768@2562|南海区|768@2560|顺德区|768@2246|惠城区|773@2247|惠阳区|773@2107|青羊区|801@2108|锦江区|801@2109|金牛区|801@2110|武侯区|801@2111|成华区|801@2112|龙泉驿区|801@2113|青白江区|801@2114|新都区|801@2115|温江区|801@2116|双流县|801@2117|郫县|801@2118|金堂县|801@2119|大邑县|801@2120|蒲江县|801@2121|新津县|801@2377|邛崃市|801@2378|崇州市|801@2379|彭州市|801@2380|都江堰市|801@2381|高新区|801@2521|云岩区|822@2522|南明区|822@2523|花溪区|822@2524|观山湖区（金阳新区）|822@2525|白云区|822@2526|乌当区|822@2527|清镇市|822@2528|修文县|822@2529|息烽县|822@2530|开阳县|822@2070|新城区|854@2071|碑林区|854@2072|莲湖区|854@2073|雁塔区|854@2074|未央区|854@2075|灞桥区|854@2076|长安区|854@2077|阎良区|854@2078|临潼区|854@2079|蓝田县|854@2080|周至县|854@2081|户县|854@2082|高陵县|854@2083|沣渭新区|854@2368|高新技术产业开发区|854@2369|经济技术开发区|854@2370|曲江新区|854@2371|浐灞生态区|854@2372|阎良国家航空高新技术产业基地|854@2373|西安国家民用航天产业基地|854@2374|国际港务区|854@';
var jobtypeClass=[{'id':'20','name':'销售|客服|市场'},{'id':'21','name':'财务|人力资源|行政'},{'id':'22','name':'项目|质量|高级管理'},{'id':'23','name':'IT|互联网|通信'},{'id':'24','name':'房产|建筑|物业管理'},{'id':'25','name':'金融'},{'id':'26','name':'采购|贸易|交通|物流'},{'id':'27','name':'生产|制造'},{'id':'28','name':'传媒|印刷|艺术|设计'},{'id':'29','name':'咨询|法律|教育|翻译'},{'id':'30','name':'服务业'},{'id':'31','name':'能源|环保|农业|科研'},{'id':'32','name':'兼职|实习|社工|其他'}];
var industryClass=[{'id':'10100','name':'IT|通信|电子|互联网'},{'id':'10200','name':'金融业'},{'id':'10800','name':'房地产|建筑业'},{'id':'10900','name':'商业服务'},{'id':'10300','name':'贸易|批发|零售|租赁业'},{'id':'10400','name':'文体教育|工艺美术'},{'id':'10500','name':'生产|加工|制造'},{'id':'11500','name':'交通|运输|物流|仓储'},{'id':'10000','name':'服务业'},{'id':'11300','name':'文化|传媒|娱乐|体育'},{'id':'11600','name':'能源|矿产|环保'},{'id':'11100','name':'政府|非盈利机构'},{'id':'11400','name':'农|林|牧|渔|其他'}];
var cityjson={'B':[{'n':'北京','l':'beijing'},{'n':'保定','l':'baoding'},{'n':'包头','l':'baotou'}],'C':[{'n':'长春','l':'changchun'},{'n':'长株潭','l':'changzhutan'},{'n':'成都','l':'chengdu'},{'n':'重庆','l':'chongqing'},{'n':'常州','l':'changzhou'}],'D':[{'n':'大连','l':'dalian'},{'n':'东莞','l':'dongguan'},{'n':'大庆','l':'daqing'},{'n':'丹东','l':'dandong'}],'E':[{'n':'鄂尔多斯','l':'eerduosi'}],'F':[{'n':'福州','l':'fuzhou'},{'n':'佛山','l':'foshan'},{'n':'抚顺','l':'fushun'}],'G':[{'n':'广州','l':'guangzhou'},{'n':'贵阳','l':'guiyang'},{'n':'赣州','l':'ganzhou'}],'H':[{'n':'哈尔滨','l':'haerbin'},{'n':'杭州','l':'hangzhou'},{'n':'合肥','l':'hefei'},{'n':'邯郸','l':'handan'},{'n':'海口','l':'haikou'},{'n':'呼和浩特','l':'huhehaote'},{'n':'湖州','l':'huzhou'},{'n':'珲春','l':'hunchun'}],'J':[{'n':'济南','l':'jinan'},{'n':'吉林','l':'jilin'},{'n':'嘉兴','l':'jiaxing'},{'n':'江门','l':'jiangmen'}],'K':[{'n':'昆明','l':'kunming'}],'L':[{'n':'临沂','l':'linyi'},{'n':'兰州','l':'lanzhou'},{'n':'洛阳','l':'luoyang'},{'n':'连云港','l':'lianyungang'}],'M':[{'n':'绵阳','l':'mianyang'}],'N':[{'n':'南京','l':'nanjing'},{'n':'宁波','l':'ningbo'},{'n':'南昌','l':'nanchang'},{'n':'南通','l':'nantong'},{'n':'南宁','l':'nanning'},{'n':'宁夏','l':'ningxia'}],'Q':[{'n':'青岛','l':'qingdao'},{'n':'秦皇岛','l':'qinhuangdao'},{'n':'泉州','l':'quanzhou'}],'S':[{'n':'上海','l':'shanghai'},{'n':'深圳','l':'shenzhen'},{'n':'沈阳','l':'shenyang'},{'n':'石家庄','l':'shijiazhuang'},{'n':'苏州','l':'suzhou'},{'n':'绍兴','l':'shaoxing'}],'T':[{'n':'天津','l':'tianjin'},{'n':'太原','l':'taiyuan'},{'n':'唐山','l':'tangshan'},{'n':'台州','l':'taizhou'},{'n':'铁岭','l':'tieling'}],'W':[{'n':'武汉','l':'wuhan'},{'n':'无锡','l':'wuxi'},{'n':'温州','l':'wenzhou'},{'n':'威海','l':'weihai'},{'n':'乌鲁木齐','l':'wulumuqi'},{'n':'芜湖','l':'wuhu'},{'n':'潍坊','l':'weifang'}],'X':[{'n':'西安','l':'xian'},{'n':'厦门','l':'xiamen'},{'n':'徐州','l':'xuzhou'},{'n':'襄阳','l':'xiangfan'}],'Y':[{'n':'扬州','l':'yangzhou'},{'n':'烟台','l':'yantai'},{'n':'义乌','l':'yiwu'},{'n':'营口','l':'yingkou'}],'Z':[{'n':'郑州','l':'zhengzhou'},{'n':'中山','l':'zhongshan'},{'n':'珠海','l':'zhuhai'},{'n':'淄博','l':'zibo'},{'n':'珠三角','l':'zhusanjiao'},{'n':'漳州','l':'zhangzhou'},{'n':'镇江','l':'zhenjiang'}]};
          
var dataHandle = dataHandle || {};dataHandle.getNameById = function(dataSource, id){var i = 0, len = dataSource.length;for (; i < len; i+=1){if (dataSource[i].id === id){return dataSource[i].name;}}return '';};
