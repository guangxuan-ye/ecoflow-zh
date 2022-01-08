<template>
  <v-container fluid ma-0 pa-0>
    <div style="width: 100%" class="pb-16 d-flex align-center flex-column">
      <div style="width: 90%">
        <div class="d-flex justify-space-between bread">
          <v-breadcrumbs :items="items">
            <template v-slot:divider>
              <v-icon>mdi-chevron-right</v-icon>
            </template>
          </v-breadcrumbs>
          <span class="pra_subtitle d-block mr-0">技术参数</span>
        </div>
        <div>
          <v-row class="pro_subtitle en_title line py-16">
            <v-col :cols="2"></v-col>
            <v-col>德 DELTA mini</v-col>
            <v-col>德 DELTA 1000</v-col>
            <v-col>德 DELTA 1300</v-col>
            <v-col>德 DELTA Max</v-col>
            <v-col>德 DELTA Pro</v-col>
          </v-row>

          <v-row class="line py-16">
            <v-col :cols="2" class="pro_subtitle zh_title">外观</v-col>
            <v-col>
              <v-img src="@/assets/img/params/DELTA mini.png" contain width="160" height="250" />
               <a href="http://mtw.so/5v33m6" target="_blank"><v-btn depressed style="margin-left:40px;margin-top:50px;background:#333;color:#fff" >立即购买</v-btn></a>
            </v-col>
            <v-col>
              <v-img src="@/assets/img/params/delta.png" contain width="160" height="250" />
            </v-col>
            <v-col>
              <v-img src="@/assets/img/params/delta.png" contain width="160" height="250" />
               <a href="http://mtw.so/5YrTnS" target="_blank"><v-btn depressed style="margin-left:30px;margin-top:40px;background:#333;color:#fff" >立即购买</v-btn></a>
            </v-col>
            <v-col>
              <v-img src="@/assets/img/params/DELTA Max.png" contain width="130" height="250" />
               <a href="http://mtw.so/6lGwZK" target="_blank"><v-btn depressed style="margin-left:20px;margin-top:40px;background:#333;color:#fff" >立即购买</v-btn></a>
            </v-col>
             <v-col>
              <v-img src="@/assets/img/params/DELTA Pro.jpg" contain width="150" height="250" />
               <a href="http://mtw.so/65XGKR" target="_blank"><v-btn depressed style="margin-left:30px;margin-top:40px;background:#333;color:#fff" >立即购买</v-btn></a>
            </v-col>
          </v-row>
          <v-row class="line py-16">
            <v-col :cols="2" class="pro_subtitle zh_title">额定功率</v-col>
            <v-col class="pra_text en_num">
              1400W
            </v-col>
            <v-col class="pra_text en_num">
              1800W
            </v-col>
            <v-col class="pra_text en_num">
              1800W
            </v-col>
            <v-col class="pra_text en_num">
              2400W
            </v-col>
            <v-col class="pra_text en_num">
              3600W
            </v-col>
          </v-row>
          <v-row class="line py-16">
            <v-col :cols="2" class="pro_subtitle zh_title">容量</v-col>
            <v-col class="pra_text en_num">
              882Wh<br/>
              (245,000mAh)
            </v-col>
            <v-col class="pra_text en_num">
              1008Wh<br/>
              (280,000mAh)
            </v-col>
            <v-col class="pra_text en_num">
              1260Wh<br/>
              (350,000mAh)
            </v-col>
            <v-col class="pra_text en_num">
              2016Wh<br/>
              (560,000mAh)
            </v-col>
            <v-col class="pra_text en_num">
              3600Wh<br/>
              <!-- (560,000mAh) -->
            </v-col>
          </v-row>
           <v-row class="line py-16">
            <v-col :cols="2" class="pro_subtitle zh_title">加电包</v-col>
             <v-col class="pra_text en_num">
              无
            </v-col>
            <v-col class="pra_text en_num">
              无
            </v-col>
            <v-col class="pra_text en_num">
              无
            </v-col>
            <v-col class="pra_text en_num">
              支持DELTA Max加电包，以及智能发电机，可同时连接两个加电包（2016Wh/个）
            </v-col>
            <v-col class="pra_text en_num">
              支持DELTA Pro加电包，以及智能发电机，可同时连接一个加电包和一个智能发电机，容量拓展到12.96kWh
            </v-col>
          </v-row>
          <v-row class="line py-16">
            <v-col :cols="2" class="pro_subtitle zh_title">输出</v-col>
            <v-col class="pra_text content">
              <div>
                <span class="pra_subtitle d-block">AC输出(纯正弦波)</span><br/>
                <span>数量：2</span><br/>
                <span>交流输出功率： 额定功率<span class="en_num">1400W</span>,峰值<span class="en_num">2100W,220V,AC 50Hz</span></span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">USB-A端口</span><br/>
                <span>数量：2</span><br/>
                <span>参数： <span class="en_num">12W(每路最大),5V,DC 2.4A</span></span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">USB-A快充端口</span><br/>
                <span>数量：1</span><br/>
                <span>参数： <span class="en_num">18W(最大),5V 2.4A, 9V 2A, 12V 1.5A</span></span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">Type-C端口</span><br/>
                <span>数量：1</span><br/>
                <span>参数： <span class="en_num">100W(最大),5/9/12/15/20V 5A</span></span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">车充端口</span><br/>
                <span>数量：1</span><br/>
                <span>参数： <span class="en_num">126W,12.6V,DC 10A</span></span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">DC 5521</span><br/>
                <span>数量：2</span><br/>
                <span>参数： <span class="en_num">12.6V,3A,车充和DC5521功率共享,最大输出126W</span></span><br/>
              </div>
            </v-col>
            <v-col class="pra_text content">
              <div>
                <span class="pra_subtitle d-block">AC输出(纯正弦波)</span><br/>
                <span>数量：4</span><br/>
                <span>交流输出功率： 额定功率<span class="en_num">1800W</span>,峰值<span class="en_num">3100W,220V,AC 50Hz</span></span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">USB-A端口</span><br/>
                <span>数量：2</span><br/>
                <span>参数： <span class="en_num">12W,5V,DC 2.4A</span></span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">USB-A快充端口</span><br/>
                <span>数量：2</span><br/>
                <span>参数： <span class="en_num">18W,5-12V,DC 2.4A(最大)</span></span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">Type-C端口</span><br/>
                <span>数量：2</span><br/>
                <span>参数： <span class="en_num">60W,5-20V,DC 3A(最大)</span></span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">车充端口</span><br/>
                <span>数量：1</span><br/>
                <span>参数： <span class="en_num">108.8W,13.6V,DC 8A(最大)</span></span><br/>
              </div>
            </v-col>
            <v-col class="pra_text content">
              <div>
                <span class="pra_subtitle d-block">AC输出(纯正弦波)</span><br/>
                <span>数量：4</span><br/>
                <span>交流输出功率： 额定功率<span class="en_num">1800W</span>,峰值<span class="en_num">3300W,220V,AC 50Hz</span></span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">USB-A端口</span><br/>
                <span>数量：2</span><br/>
                <span>参数： <span class="en_num">12W,5V,DC 2.4A</span></span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">USB-A快充端口</span><br/>
                <span>数量：2</span><br/>
                <span>参数： <span class="en_num">18W,5V 2.4A, 9V 2A, 12V 1.5A</span></span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">Type-C端口</span><br/>
                <span>数量：2</span><br/>
                <span>参数： <span class="en_num">60W,5/9/12V 5A</span></span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">车充端口</span><br/>
                <span>数量：1</span><br/>
                <span>参数： <span class="en_num">108.8W,13.6V,DC 8A(最大)</span></span><br/>
              </div>
            </v-col>
            <v-col class="pra_text content">
              <div>
                <span class="pra_subtitle d-block">AC输出(纯正弦波)</span><br/>
                <span>数量：4</span><br/>
                <span>交流输出功率： 额定功率<span class="en_num">2400W</span>,峰值<span class="en_num">4600W,220V,AC 50Hz</span></span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">USB-A端口</span><br/>
                <span>数量：2</span><br/>
                <span>参数： <span class="en_num">12W,5V,DC 2.4A</span></span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">USB-A快充端口</span><br/>
                <span>数量：2</span><br/>
                <span>参数： <span class="en_num">18W,5V 2.4A, 9V 2A, 12V 1.5A</span></span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">Type-C端口</span><br/>
                <span>数量：2</span><br/>
                <span>参数： <span class="en_num">100W,5/9/12/15/20V 5A</span></span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">车充端口</span><br/>
                <span>数量：1</span><br/>
                <span>参数： <span class="en_num">126W,12.6V,DC 10A(最大)</span></span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">DC 5521</span><br/>
                <span>数量：2</span><br/>
                <span>参数： <span class="en_num">12.6V,3A,车充和DC5521功率共享,最大输出126W</span></span><br/>
              </div>
            </v-col>
              <v-col class="pra_text content">
              <div>
                <span class="pra_subtitle d-block">AC输出(纯正弦波)</span><br/>
                <span>数量：4</span><br/>
                <span>交流输出功率： 额定功率<span class="en_num">3600W</span>,峰值<span class="en_num">7200W，220V，50Hz</span></span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">USB-A端口</span><br/>
                <span>数量：2</span><br/>
                <span>参数： <span class="en_num">12W,5V 2.4A</span></span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">USB-A快充端口</span><br/>
                <span>数量：2</span><br/>
                <span>参数： <span class="en_num">18W,5V 2.4A, 9V 2A, 12V 1.5A</span></span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">Type-C端口</span><br/>
                <span>数量：2</span><br/>
                <span>参数： <span class="en_num">100W,5/9/12/15/20V 5A</span></span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">车充端口</span><br/>
                <span>数量：1</span><br/>
                <span>参数： <span class="en_num">126W,12.6V,10A(最大)</span></span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">DC 5521</span><br/>
                <span>数量：2</span><br/>
                <span>参数： <span class="en_num">38W（最大）12.6V,3A</span></span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">安德森端口</span><br/>
                <span>数量：1</span><br/>
                <span>参数： <span class="en_num">378W，12.6V 30A</span></span><br/>
              </div>
            </v-col>
          </v-row>

          <v-row class="line py-16">
            <v-col :cols="2" class="pro_subtitle zh_title">输入</v-col>
            <v-col class="pra_text content">
              <div>
                <span class="pra_subtitle d-block">市电充电</span><br/>
                <span>交流充电输入电压：<span class="en_num">AC 220-240V(50Hz/60Hz)</span></span><br/>
                <span>交流充电输入功率：<span class="en_num">X-Stream快充最大功率900W</span></span><br/>
                <span>充电时间<span class="en_num">1.6</span>小时</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">车充充电</span><br/>
                <span>车充输入：<span class="en_num">12V/24V,DC 8A(默认)</span></span><br/>
                <span>充电时间： <span class="en_num">9.5小时</span></span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">太阳能板充电</span><br/>
                <span>太阳能充电输入<span class="en_num">300W,11-75V,DC 10A(最大)</span></span><br/>
                <span>充电时间： <span class="en_num">3.7-7.4小时(160W x 2)</span></span><br/>
              </div>
               <div class="mt-10">
                <span class="pra_subtitle d-block">油动发电机</span><br/>
                <span>充电时间： <span class="en_num">1.6</span>小时<span class="en_num">充满</span></span><br/>
                <span class="en_num">* 油动发电机最高输出大于本产品所需功率，或调节充电速度</span><br/>
              </div>
            </v-col>
            <v-col class="pra_text content">
              <div>
                <span class="pra_subtitle d-block">市电充电</span><br/>
                <span>交流充电输入电压：<span class="en_num">AC 220-240V(50Hz/60Hz)</span></span><br/>
                <span>交流充电输入功率：<span class="en_num">X-Stream</span>超充<span class="en_num">1200W</span>最大</span><br/>
                <span>充电时间<span class="en_num">1.5</span>小时</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">车充充电</span><br/>
                <span>车充输入：<span class="en_num">12V/24V,DC 8A(最大)</span></span><br/>
                <span>充电时间： <span class="en_num">8</span>小时</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">太阳能板充电</span><br/>
                <span>太阳能充电输入<span class="en_num">400W,10-65V,DC 10A(最大)</span></span><br/>
                <span>充电时间： <span class="en_num">3.5</span>小时<span class="en_num">(110W x 4)</span></span><br/>
              </div>
            </v-col>
            <v-col class="pra_text content">
              <div>
                <span class="pra_subtitle d-block">市电充电</span><br/>
                <span>交流充电输入电压：<span class="en_num">AC 220-240V(50Hz/60Hz)</span></span><br/>
                <span>交流充电输入功率：<span class="en_num">X-Stream</span>超充<span class="en_num">1200W</span>最大</span><br/>
                <span>充电时间<span class="en_num">1.6</span>小时</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">车充充电</span><br/>
                <span>车充输入：<span class="en_num">12V/24V,DC 8A(最大)</span></span><br/>
                <span>充电时间： <span class="en_num">10</span>小时</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">太阳能板充电</span><br/>
                <span>太阳能充电输入<span class="en_num">400W,10-25V,DC 10A(最大)</span></span><br/>
                <span>充电时间： <span class="en_num">4-8</span>小时<span class="en_num">(110W x 4)</span></span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">油动发电机</span><br/>
                <span>充电时间： <span class="en_num">1.6</span>小时<span class="en_num">充满</span></span><br/>
                <span class="en_num">* 油动发电机最高输出大于本产品所需功率</span><br/>
              </div>
            </v-col>
            <v-col class="pra_text content">
              <div>
                <span class="pra_subtitle d-block">市电充电</span><br/>
                <span>交流充电输入电压：<span class="en_num">AC 220-240V(50Hz/60Hz)</span></span><br/>
                <span>交流充电输入功率：<span class="en_num">X-Stream快充2000W最大</span></span><br/>
                <span>充电时间<span class="en_num">1.6</span>小时</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">车充充电</span><br/>
                <span>车充输入：<span class="en_num">12V/24V,DC 8A(默认)</span></span><br/>
                <span>充电时间： <span class="en_num">21小时</span></span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">太阳能板充电</span><br/>
                <span>太阳能充电输入<span class="en_num">800W,11-100V,DC 10A(最大)</span></span><br/>
                <span>充电时间： <span class="en_num">3.2-6.3小时(400W x 2)</span></span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">油动发电机</span><br/>
                <span>充电时间： <span class="en_num">1.6</span>小时<span class="en_num">充满</span></span><br/>
                <span class="en_num">* 取决于油动发电机的功率，最高输出大于本产品所需功率，或调节充电速度</span><br/>
              </div>
               <div class="mt-10">
                <span class="pra_subtitle d-block">智能发电包</span><br/>
                <span>充电时间： <span class="en_num">1.8</span>小时<span class="en_num">充满</span></span>
              </div>
            </v-col>
              <v-col class="pra_text content">
              <div>
                <span class="pra_subtitle d-block">市电充电</span><br/>
                <span>交流充电输入电压：<span class="en_num">AC 220-240V(50Hz/60Hz)</span></span><br/>
                <span>交流充电输入功率：<span class="en_num">X-Stream快充最大2200W</span></span><br/>
                <span>充电时间<span class="en_num">1.7小时可充电80%，2.1小时充满</span></span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">车充充电</span><br/>
                <span>车充输入：<span class="en_num">12V/24V，DC 8A（默认）</span></span><br/>
                <span>充电时间： <span class="en_num">37.5小时充满</span></span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">太阳能板充电</span><br/>
                <span>最大输入功率<span class="en_num">1200W</span></span><br/>
                <span>输入电压: <span class="en_num">11-150V，10A（最大）</span></span><br/>
                <span>充电时间： <span class="en_num">4-8小时（400W×3）</span></span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">油动发电机</span><br/>
                <span>充电时间： <span class="en_num">2.7</span>小时<span class="en_num">充满</span></span><br/>
                <span class="en_num">* 取决于油动发电机的功率，最高输出大于本产品所需功率，或调节充电速度</span><br/>
              </div>
               <div class="mt-10">
                <span class="pra_subtitle d-block">智能发电包</span><br/>
                <span>充电时间： <span class="en_num">2.7</span>小时<span class="en_num">充满</span></span>
              </div>
               <div class="mt-10">
                <span class="pra_subtitle d-block">电动车充电桩：</span><br/>
                <span>充电时间： <span class="en_num">1.7</span>小时<span class="en_num">充满</span></span>
              </div>
            </v-col>
          </v-row>

          <v-row class="line py-16">
            <v-col :cols="2" class="pro_subtitle zh_title">电池</v-col>
            <v-col class="pra_text content">
              <div>
                <span class="pra_subtitle d-block">电芯类型</span><br/>
                <span>高倍率汽车级动力车芯(18650锂电池)</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">充电温度</span><br/>
                <span class="en_num">0-45℃ +/-3℃</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">放电温度</span><br/>
                <span class="en_num">-20-45℃（±3℃）</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">循环寿命</span><br/>
                <span><span class="en_num">800+次循环(80%)</span></span><br/>
              </div>
            </v-col>
            <v-col class="pra_text content">
              <!-- <div>
                <span class="pra_subtitle d-block">电芯类型</span><br/>
                <span>高倍率汽车级动力车芯(<span class="en_num">18650</span>锂电池)</span><br/>
              </div>
                <div class="mt-10">
                  <span class="pra_subtitle d-block">放电温度</span><br/>
                  <span class="en_num">-20～45℃ +/-3℃</span><br/>
                </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">充电温度</span><br/>
                <span class="en_num">0-45℃ +/-3℃</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">循环寿命</span><br/>
                <span><span class="en_num">800+</span>次循环<span class="en_num">(80%)</span></span><br/>
              </div> -->
            </v-col>
            <v-col class="pra_text content">
              <div>
                <span class="pra_subtitle d-block">电芯类型</span><br/>
                <span>高倍率汽车级动力车芯(18650锂电池)</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">充电温度</span><br/>
                <span class="en_num">0-45℃ +/-3℃</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">放电温度</span><br/>
                <span class="en_num">-20-45℃（±3℃）</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">循环寿命</span><br/>
                <span><span class="en_num">800+次循环(80%)</span></span><br/>
              </div>
            </v-col>
            <v-col class="pra_text content">
              <div>
                <span class="pra_subtitle d-block">电芯类型</span><br/>
                <span>高倍率汽车级动力车芯(18650锂电池)</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">充电温度</span><br/>
                <span class="en_num">0-45℃ +/-3℃</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">放电温度</span><br/>
                <span class="en_num">-20-45℃（±3℃）</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">循环寿命</span><br/>
                <span><span class="en_num">800+次循环(80%)</span></span><br/>
              </div>
            </v-col>
               <v-col class="pra_text content">
              <div>
                <span class="pra_subtitle d-block">电芯类型</span><br/>
                <span>磷酸铁锂电池（LFP）</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">充电温度</span><br/>
                <span class="en_num">0-45℃ +/-3℃</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">放电温度</span><br/>
                <span class="en_num">-10-45℃（±3℃）</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">循环寿命</span><br/>
                <span><span class="en_num">3500+次循环（80%）</span></span><br/>
              </div>
            </v-col>
          </v-row>
           <v-row class="line py-16">
            <v-col :cols="2" class="pro_subtitle zh_title">App</v-col>
            <v-col class="pra_text en_num">
              支持手机App操控
            </v-col>
             <v-col class="pra_text en_num">
            </v-col>
             <v-col class="pra_text en_num">
              不支持手机App操控
            </v-col>
             <v-col class="pra_text en_num">
              支持手机App操控
            </v-col>
                <v-col class="pra_text en_num">
              支持手机App操控
            </v-col>
          </v-row>
          <v-row class="py-16">
            <v-col :cols="2" class="pro_subtitle zh_title">尺寸和重量</v-col>
            <v-col class="pra_text content">
              <div>
                <span class="pra_subtitle d-block">尺寸</span><br/>
                <span class="en_num">37.8x18.4x24cm</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">重量</span><br/>
                <span class="en_num">约11kg</span><br/>
              </div>
            </v-col>
            <v-col class="pra_text content">
              <div>
                <span class="pra_subtitle d-block">尺寸</span><br/>
                <span class="en_num">40x21x27cm</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">重量</span><br/>
                <span class="en_num">约14kg</span><br/>
              </div>
            </v-col>
            <v-col class="pra_text content">
               <div>
                <span class="pra_subtitle d-block">尺寸</span><br/>
                <span class="en_num">40x21x27cm</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">重量</span><br/>
                <span class="en_num">约14kg</span><br/>
              </div>
            </v-col>
            <v-col class="pra_text content">
              <div>
                <span class="pra_subtitle d-block">尺寸</span><br/>
                <span class="en_num">49.7x24.2x30.5cm</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">重量</span><br/>
                <span class="en_num">约22kg</span><br/>
              </div>
            </v-col>
                <v-col class="pra_text content">
              <div>
                <span class="pra_subtitle d-block">尺寸</span><br/>
                <span class="en_num">63.5*28.5*41.6cm（带轮子）</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">重量</span><br/>
                <span class="en_num">约45kg</span><br/>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'index',
  data: () => ({
    items: [
      {
        text: '产品中心',
        disabled: false,
        to: { path: '/productCenter' }
      },
      {
        text: '户外电源',
        disabled: false,
        to: { path: '/productCenter#outdoor' }
      },
      {
        text: '德 DELTA 系列',
        disabled: false,
        to: { path: '/delta' }
      }
    ]
  })
}

</script>
<style scoped>
.bread >>> .v-breadcrumbs li {
  font-size: 24px !important;
}
.bread >>> .v-breadcrumbs li:last-child a {
  color:#292929 !important;
}
.bread >>> .v-breadcrumbs__item{
  color: #A8A8A8 !important;
}
</style>
