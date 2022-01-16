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
            <v-col>睿 RIVER mini</v-col>
            <v-col>睿 RIVER</v-col>
            <v-col>睿 RIVER Max</v-col>
            <v-col>睿 RIVER Pro</v-col>
          </v-row>

          <v-row class="line py-16">
            <v-col :cols="2" class="pro_subtitle zh_title">外观</v-col>
             <v-col>
              <v-img  @click="godetail()" src="@/assets/img/params/RIVER 600 mini.png" style="margin-left:-20px;cursor:pointer" contain width="272"  height="210" />
              <a href="http://mtw.so/6lGwDY" target="_blank"><v-btn depressed style="margin-left:70px;margin-top:40px;background:#333;color:#fff" >立即购买</v-btn></a>
              <span @click="godetail()" style="display:block;margin-left:80px;margin-top:20px;cursor:pointer">了解详情</span>
            </v-col>
            <v-col>
              <v-img  @click="godetail()" src="@/assets/img/params/RIVER 600.png" style="margin-left:-20px;cursor:pointer"  contain width="272" height="210" />
              <a href="http://mtw.so/5v339Q" target="_blank"><v-btn depressed style="margin-left:70px;margin-top:40px;background:#333;color:#fff" >立即购买</v-btn></a>
              <span @click="godetail()" style="display:block;margin-left:80px;margin-top:20px;cursor:pointer">了解详情</span>
            </v-col>
            <v-col>
              <v-img  @click="godetail()" src="@/assets/img/params/RIVER 600 MAX.png" style="margin-left:-20px;cursor:pointer"  contain width="272" height="210"/>
              <a href="http://mtw.so/65XGiN" target="_blank"><v-btn depressed style="margin-left:70px;margin-top:40px;background:#333;color:#fff" >立即购买</v-btn></a>
              <span @click="godetail()" style="display:block;margin-left:80px;margin-top:20px;cursor:pointer">了解详情</span>
            </v-col>
            <v-col>
              <v-img  @click="godetail()" src="@/assets/img/params/RIVER 600 PRO.png" style="margin-left:-20px;cursor:pointer"  contain width="272" height="210"/>
              <a href="http://mtw.so/5v33k0" target="_blank"><v-btn depressed style="margin-left:80px;margin-top:40px;background:#333;color:#fff" >立即购买</v-btn></a>
              <span @click="godetail()" style="display:block;margin-left:80px;margin-top:20px;cursor:pointer">了解详情</span>
            </v-col>
          </v-row>

          <v-row class="line py-16">
          <v-col :cols="2" class="pro_subtitle zh_title">容量</v-col>
             <v-col class="pra_text en_num">
              210Wh<br/>
              (58400mAh)
            </v-col>
            <v-col class="pra_text en_num">
              288Wh<br/>
              (80,000mAh)
            </v-col>
            <v-col class="pra_text en_num">
              576Wh<br/>
              (160,000mAh)
            </v-col>
            <v-col class="pra_text en_num">
              720Wh<br/>
              (200,000mAh)
            </v-col>
          </v-row>
           <v-row class="line py-16">
            <v-col :cols="2" class="pro_subtitle zh_title">加电包</v-col>
             <v-col class="pra_text en_num">
              无
            </v-col>
            <v-col class="pra_text en_num">
             支持加电包（288Wh）
            </v-col>
            <v-col class="pra_text en_num">
              无
            </v-col>
            <v-col class="pra_text en_num">
              支持RIVER Pro加电包（720Wh）
            </v-col>
          </v-row>
          <v-row class="line py-16">
            <v-col :cols="2" class="pro_subtitle zh_title">输出</v-col>
             <v-col class="pra_text content">
              <div>
                <span class="pra_subtitle d-block">AC输出(纯正弦波)</span><br/>
                <span>数量：1</span><br/>
                <span>交流输出功率： 额定功率<span class="en_num">300W</span>峰值<span class="en_num">600W,220V,AC 50Hz</span></span><br/>
                <span>X-Boost智能逆变功能：<span class="en_num">最高能驱动600W设备</span></span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">USB-A端口</span><br/>
                <span>数量：3</span><br/>
                <span>参数： <span class="en_num">12W(最大),5V,2.4A</span></span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">Type-C端口</span><br/>
                <span>数量：1</span><br/>
                <span>参数： <span class="en_num">100W(最大),5/9/12/15/20V 5A</span></span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">车充端口</span><br/>
                <span>数量：1</span><br/>
                <span>参数： <span class="en_num">126W(最大),12.6V,10A</span></span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">无线充电</span><br/>
                <span>数量：1</span><br/>
                <span>参数：<span class="en_num">15W</span></span><br/>
              </div>
            </v-col>
            <v-col class="pra_text content">
              <div>
                <span class="pra_subtitle d-block">AC输出(纯正弦波)</span><br/>
                <span>数量：2</span><br/>
                <span>交流输出功率： 额定功率<span class="en_num">600W</span>峰值<span class="en_num">1200W,220V,AC 50Hz</span></span><br/>
                <span>X-Boost智能逆变功能：<span class="en_num">最高能驱动1500W设备</span></span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">USB-A端口</span><br/>
                <span>数量：2</span><br/>
                <span>参数： <span class="en_num">12W(最大),5V,2.4A</span></span><br/>
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
                <span>参数： <span class="en_num">136W(最大),13.6V,10A</span></span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">DC 5521</span><br/>
                <span>数量：2</span><br/>
                <span>参数： 每端口<span class="en_num">13.6V,3A(最大)</span></span><br/>
              </div>
            </v-col>
            <v-col class="pra_text content">
              <div>
                <span class="pra_subtitle d-block">AC输出(纯正弦波)</span><br/>
                <span>数量：2</span><br/>
                <span>交流输出功率： 额定功率<span class="en_num">600W</span>峰值<span class="en_num">1200W,220V,AC 50Hz</span></span><br/>
                <span>X-Boost智能逆变功能：<span class="en_num">最高能驱动1500W设备</span></span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">USB-A端口</span><br/>
                <span>数量：2</span><br/>
                <span>参数： <span class="en_num">12W(最大),5V,2.4A</span></span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">USB-A 快充端口</span><br/>
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
                <span>参数： <span class="en_num">136W（最大）,13.6V,10A</span></span><br/>
              </div>
               <div class="mt-10">
                <span class="pra_subtitle d-block">DC 5521</span><br/>
                <span>数量：2</span><br/>
                <span>参数： 每端口<span class="en_num">13.6V,3A（最大）</span></span><br/>
              </div>
            </v-col>
            <v-col class="pra_text content">
              <div>
                <span class="pra_subtitle d-block">AC输出(纯正弦波)</span><br/>
                <span>数量：2</span><br/>
                <span>交流输出功率： 额定功率<span class="en_num">600W</span>峰值<span class="en_num">1200W,220V,AC 50Hz</span></span><br/>
                <span>X-Boost智能逆变功能：<span class="en_num">最高能驱动1500W设备</span></span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">USB-A端口</span><br/>
                <span>数量：2</span><br/>
                <span>参数： <span class="en_num">12W(最大),5V,2.4A</span></span><br/>
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
                <span>参数： <span class="en_num">136W(最大),13.6V,10A</span></span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">DC 5521</span><br/>
                <span>数量：2</span><br/>
                <span>参数： 每端口<span class="en_num">13.6V,3A(最大)</span></span><br/>
              </div>
            </v-col>
          </v-row>

          <v-row class="line py-16">
            <v-col :cols="2" class="pro_subtitle zh_title">输入</v-col>
            <v-col class="pra_text content">
              <div>
                <span class="pra_subtitle d-block">市电充电</span><br/>
                <span>交流充电输入电压：<span class="en_num">AC 220-240V(50Hz/60Hz)</span></span><br/>
                <span>交流充电输入功率：<span class="en_num">X-Stream</span>超充<span class="en_num">300W</span>最大</span><br/>
                <span>充电时间<span class="en_num">1.5</span>小时</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">车充充电</span><br/>
                <span>车充输入：<span class="en_num">12V/24V,8A(最大)</span></span><br/>
                <span>充电时间： <span class="en_num">3.5</span>小时</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">太阳能板充电</span><br/>
                <span>太阳能充电输入<span class="en_num">11-39V 8A（最大）；功率100W最大</span></span><br/>
                <span>充电时间： <span class="en_num">3-6</span>小时<span class="en_num">(110W x 1)</span></span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">油动发电机</span><br/>
                <span>充电时间： <span class="en_num">1.5</span>小时<span class="en_num">充满</span></span><br/>
                <span class="en_num">* 油动发电机额定功率需大于机器的最大输入功率</span><br/>
              </div>
            </v-col>
            <v-col class="pra_text content">
              <div>
                <span class="pra_subtitle d-block">市电充电</span><br/>
                <span>交流充电输入电压：<span class="en_num">AC 220-240V(50Hz/60Hz)</span></span><br/>
                <span>交流充电输入功率：<span class="en_num">X-Stream</span>超充<span class="en_num">250W</span>最大</span><br/>
                <span>充电时间<span class="en_num">1.6</span>小时</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">车充充电</span><br/>
                <span>车充输入：<span class="en_num">12V/24V,DC 8A（最大）</span></span><br/>
                <span>充电时间： <span class="en_num">3.5</span>小时</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">太阳能板充电</span><br/>
                <span>太阳能充电输入<span class="en_num">200W,11-100V,DC 12A(最大)</span></span><br/>
                <span>充电时间： <span class="en_num">1.6-3</span>小时<span class="en_num">(110W x 2)</span></span><br/>
              </div>
               <div class="mt-10">
                <span class="pra_subtitle d-block">油动发电机</span><br/>
                <span>充电时间： <span class="en_num">1.6</span>小时<span class="en_num">充满</span></span><br/>
                <span class="en_num">* 油动发电机最高输出大于本产品所需功率,或调节充电速度</span><br/>
              </div>
            </v-col>
            <v-col class="pra_text content">
              <div>
                <span class="pra_subtitle d-block">市电充电</span><br/>
                <span>交流充电输入电压：<span class="en_num">AC 220-240V(50Hz/60Hz)</span></span><br/>
                <span>交流充电输入功率：<span class="en_num">X-Stream</span>超充<span class="en_num">500W</span>最大</span><br/>
                <span>充电时间<span class="en_num">1.6</span>小时</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">车充充电</span><br/>
                <span>车充输入：<span class="en_num">12V,8A(最大)</span></span><br/>
                <span>充电时间： <span class="en_num">6.5</span>小时</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">太阳能板充电</span><br/>
                <span>太阳能充电输入<span class="en_num">200W,10-25V,12A</span></span><br/>
                <span>充电时间： <span class="en_num">3-6</span>小时<span class="en_num">(110W x 2)</span></span><br/>
              </div>
               <div class="mt-10">
                <span class="pra_subtitle d-block">油动发电机</span><br/>
                <span>充电时间： <span class="en_num">1.6</span>小时<span class="en_num">充满</span></span><br/>
                <span class="en_num">* 油动发电机最高输出大于本产品所需功率,或调节充电速度</span><br/>
              </div>
            </v-col>
            <v-col class="pra_text content">
              <div>
                <span class="pra_subtitle d-block">市电充电</span><br/>
                <span>交流充电输入电压：<span class="en_num">AC 220-240V(50Hz/60Hz)</span></span><br/>
                <span>交流充电输入功率：<span class="en_num">X-Stream快充660W最大</span></span><br/>
                <span>充电时间<span class="en_num">1.6</span>小时</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">车充充电</span><br/>
                <span>车充输入：<span class="en_num">12V,8A(最大)</span></span><br/>
                <span>充电时间： <span class="en_num">8</span>小时</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">太阳能板充电</span><br/>
                <span>太阳能充电输入<span class="en_num">200W,10-25V,12A</span></span><br/>
                <span>充电时间： <span class="en_num">4-8小时(110W x 2)</span></span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">油动发电机</span><br/>
                <span>充电时间： <span class="en_num">1.6</span>小时<span class="en_num">充满</span></span><br/>
                <span class="en_num">* 油动发电机最高输出大于本产品所需功率,或调节充电速度</span><br/>
              </div>
            </v-col>
          </v-row>

          <v-row class="line py-16">
            <v-col :cols="2" class="pro_subtitle zh_title">电池</v-col>
            <v-col class="pra_text content">
              <div>
                <span class="pra_subtitle d-block">电芯类型</span><br/>
                <span>高倍率汽车级动力车芯（21700锂电池）</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">放电环境温度</span><br/>
                <span class="en_num">-20℃至45℃</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">充电环境温度</span><br/>
                <span class="en_num">0℃至45℃</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">循环寿命</span><br/>
                <span><span class="en_num">500+次循环(80%)</span></span><br/>
              </div>
            </v-col>
            <v-col class="pra_text content">
              <div>
                <span class="pra_subtitle d-block">电芯类型</span><br/>
                <span>高倍率汽车级动力车芯（18650锂电池）</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">放电温度</span><br/>
                <span class="en_num">-20-45℃（±3℃）</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">充电温度</span><br/>
                <span class="en_num">0-45℃ +/-3℃</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">循环寿命</span><br/>
                <span><span class="en_num">500+</span>次循环<span class="en_num">(80%)</span></span><br/>
              </div>
            </v-col>
            <v-col class="pra_text content">
              <div>
                <span class="pra_subtitle d-block">电芯类型</span><br/>
                <span>高倍率汽车级动力车芯（18650锂电池）</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">放电环境温度</span><br/>
                <span class="en_num">-20-45℃（±3℃）</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">充电环境温度</span><br/>
                <span class="en_num">0-45℃ +/-3℃</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">循环寿命</span><br/>
                <span><span class="en_num">500+次循环(80%)</span></span><br/>
              </div>
            </v-col>
            <v-col class="pra_text content">
              <div>
                <span class="pra_subtitle d-block">电芯类型</span><br/>
                <span class="en_num">高倍率汽车级动力车芯(18650锂电池)</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">放电温度</span><br/>
                <span class="en_num">-20-45℃（±3℃）</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">充电温度</span><br/>
                <span class="en_num">0-45℃ +/-3℃</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">循环寿命</span><br/>
                <span class="en_num">800+次循环(80%)</span><br/>
              </div>
            </v-col>
          </v-row>
          <v-row class="line py-16">
            <v-col :cols="2" class="pro_subtitle zh_title">App</v-col>
            <v-col class="pra_text en_num">
              支持手机App操控
            </v-col>
             <v-col class="pra_text en_num">
              支持手机App操控
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
                <span class="en_num">24.9*14.0*13.3cm</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">重量</span><br/>
                <span class="en_num">约2.85 kg</span><br/>
              </div>
            </v-col>
            <v-col class="pra_text content">
              <div>
                <span class="pra_subtitle d-block">尺寸</span><br/>
                <span class="en_num">28.8x18.5x19.4cm</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">重量</span><br/>
                <span class="en_num">约5kg</span><br/>
              </div>
            </v-col>
            <v-col class="pra_text content">
              <div>
                <span class="pra_subtitle d-block">尺寸</span><br/>
                <span class="en_num">28.9x18.4x23.5cm</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">重量</span><br/>
                <span class="en_num">约7.7kg</span><br/>
              </div>
            </v-col>
            <v-col class="pra_text content">
              <div>
                <span class="pra_subtitle d-block">尺寸</span><br/>
                <span class="en_num">28.9 x 18.0 x 23.5 cm</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">重量</span><br/>
                <span class="en_num">约7.6kg</span><br/>
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
        text: '睿 RIVER系列',
        disabled: false,
        to: { path: '/river600' }
      }
    ]
  }),
  methods: {
    godetail () {
      const routerJump = this.$router.resolve({ path: '/riverdetail' })
      window.open(routerJump.href, '_blank')
    }
  }
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
