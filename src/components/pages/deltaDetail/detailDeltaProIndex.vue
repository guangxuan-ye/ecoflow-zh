<template>
  <div class="productdetail">
    <!-- 购物车 -->
    <div class="shopcart">
      <div class="shopcontain">
        <div class="slidershow">
          <!-- 轮播图 -->
          <!--  hide-delimiter-background -->
          <v-carousel
            delimiter-icon="mdi-minus"
            interval="6000"
            transition="slide-y-reverse-transition"
            reverse-transition="scale-transition"
            height="600"
            style="height:600px"
            cycle>
            <v-carousel-item
              v-for="(item,idx) in items"
              class="carouselContain"
              :key="idx">
              <div class="containItem">
                <img class="carouselContainImg" :src="item.src" alt="">
              </div>
            </v-carousel-item>
          </v-carousel>
        </div>
        <div class="addtoshop">
          <span class="addname">德DELTA Pro</span>
          <span class="adddes">德 DELTA Pro户外电源，具备3600Wh超大容量，更可连接两个额外的加电包扩展至10800Wh；3600W超高额定功率，兼容绝大部分常用电器。可充当家庭备用储能电源，亦可在应急抢险救援中提供充沛电力。适用户外露营、车载自驾游、应急储备、移动储能用电，以及休闲大型娱乐行业应用供电。</span>
          <span class="specialty">• 3600Wh澎湃容量</span>
          <span class="specialty">• 3600W额定输出功率，X-Boost升维驱动4500W</span>
          <span class="specialty">• X-Stream闪电快充技术，1.6小时充满</span>
          <span class="specialty">• 14个输出端口，可同时充电</span>
          <span class="specialty">• APP遥控，定期OTA，智能可进化</span>
          <a class="adddes" style="display:block;margin-top:8px" target="_blank" href="/delta">参数对比</a>
          <v-divider class="divider"></v-divider>
          <div class="addbtnContain">
            <span class="halfbtn" @click="goTianmao()"><img src="@/assets/img/deltaSeries/shopicon.png"/>天猫购买</span>
            <span class="halfbtn" @click="goJingdong()"><img src="@/assets/img/deltaSeries/shopicon.png">京东购买</span>
            <span class="totalbtn" @click="download()"><img src="@/assets/img/deltaSeries/pdficon.png">说明书下载</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 功能详情 -->
    <div class="detailset">
      <v-tabs class="tabContain" centered color='#38B6C4' background-color="transparent">
        <v-tab
          class="tabitem"
          :ripple="false"
          v-for="(item, idx) in sets"
          :key="idx"
        >
          {{item.label}}
        </v-tab>
        <!-- 功能特征 -->
        <v-tab-item class="tabList">
          <div class="tabListcontain">
            <img
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-pro-detail-image-1.jpg'
            >
            <img
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-pro-detail-image-2.png'
            >
            <img
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-pro-detail-image-3.png'
            >
            <img
              style="margin-top:-2px"
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-pro-detail-image-4.png'
            >
            <img
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-pro-detail-image-5.png'
            >
            <img
              style="margin-top:-1px"
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-pro-detail-image-6.png'
            >
            <img
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-pro-detail-image-7.png'
            >
            <img
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-pro-detail-image-8.png'
            >
            <img
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-pro-detail-image-9.png'
            >
            <img
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-pro-detail-image-10.png'
            >
            <img
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-pro-detail-image-12.png'
            >
          </div>
        </v-tab-item>
        <!-- 规格参数 -->
        <v-tab-item class="tabList">
          <div>
            <!-- 外观 -->
            <div class="setList">
              <div class="setListLeft">
                外观
              </div>
              <div class="setListRight">
                <img style="width:200px;height:auto" src="@/assets/img/deltaSeries/cn-ecoflow-dalta-pro-parameter-image.png" alt="">
              </div>
            </div>
            <div class="setList">
              <div class="setListLeft">
                额定功率
              </div>
              <div class="setListRight">
                3600W
              </div>
            </div>
            <div class="setList">
              <div class="setListLeft">
                容量
              </div>
              <div class="setListRight">
                3600Wh
              </div>
            </div>
            <div class="setList">
              <div class="setListLeft">
                加电包
              </div>
              <div class="setListRight">
                支持德 DELTA Pro加电包，以及智能发电机，可同时连接一个加电包和一个智能发电机，容量拓展到12.96kWh
              </div>
            </div>
            <div class="setList">
              <div class="setListLeft">
                输出
              </div>
              <div class="setListRight">
                AC输出(纯正弦波)<br/>
                数量：4<br/>
                交流输出功率： 额定功率3600W,峰值7200W，220V，50Hz<br/><br/>

                USB-A端口<br/>
                数量：2<br/>
                参数： 12W,5V 2.4A<br/><br/>

                USB-A快充端口<br/>
                数量：2<br/>
                参数： 18W,5V 2.4A, 9V 2A, 12V 1.5A<br/><br/>

                Type-C端口<br/>
                数量：2<br/>
                参数： 100W,5/9/12/15/20V 5A<br/><br/>

                车充端口<br/>
                数量：1<br/>
                参数： 126W,12.6V,10A(最大)<br/><br/>

                DC 5521<br/>
                数量：2<br/>
                参数： 38W（最大）12.6V,3A<br/><br/>

                安德森端口<br/>
                数量：1<br/>
                参数： 378W，12.6V 30A
              </div>
            </div>
            <div class="setList">
              <div class="setListLeft">
                输入
              </div>
              <div class="setListRight">
                市电充电<br/>
                交流充电输入电压：AC 220-240V(50Hz/60Hz)<br/>
                交流充电输入功率：X-Stream快充最大2200W<br/>
                充电时间1.7小时可充电80%，2.1小时充满<br/><br/>

                车充充电<br/>
                车充输入：12V/24V，DC 8A（默认）<br/>
                充电时间： 37.5小时充满<br/><br/>

                太阳能板充电<br/>
                最大输入功率1200W<br/>
                输入电压: 11-150V，10A（最大）<br/>
                充电时间： 4-8小时（400W×3）<br/><br/>

                油动发电机<br/>
                充电时间： 2.7小时充满<br/>
                * 取决于油动发电机的功率，最高输出大于本产品所需功率，或调节充电速度<br/><br/>

                智能发电包<br/>
                充电时间： 2.7小时充满<br/><br/>

                电动车充电桩：<br/>
                充电时间： 1.7小时充满
              </div>
            </div>
            <div class="setList">
              <div class="setListLeft">
                电池
              </div>
              <div class="setListRight">
                电芯类型：磷酸铁锂电池（LFP）<br/>

                充电温度：0-45℃ +/-3℃<br/>

                放电温度：-10-45℃（±3℃）<br/>

                循环寿命：3500+次循环（80%）
              </div>
            </div>
            <div class="setList">
              <div class="setListLeft">
                APP
              </div>
              <div class="setListRight">
                支持手机App操控
              </div>
            </div>
            <div class="setList">
              <div class="setListLeft">
                尺寸和重量
              </div>
              <div class="setListRight">
               尺寸：63.5*28.5*41.6cm（带轮子）<br/>
               重量：约45kg
              </div>
            </div>
          </div>
        </v-tab-item>
        <!-- 常见问题 -->
        <v-tab-item class="tabList" style="padding-top:0">
          <div class="tabexpansion">
            <v-expansion-panels accordion v-model="panel">
              <v-expansion-panel
                style="background:#f6f6f6;"
                v-for="(item,i) in qas"
                :key="i"
              >
                <v-expansion-panel-header>{{ item.q }}
                  <template v-slot:actions>
                    <img v-if=" panel === i" src="@/assets/img/sets/subtract.png" style="width:26px;height:26px" alt="">
                    <img v-else src="@/assets/img/sets/plus.png" style="width:26px;height:26px" alt="">
                  </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <div style="border-top:2px solid #38B6C4;padding-top:8px;color:#808080;font-size:15px" v-html="item.a">
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </v-tab-item>
      </v-tabs>
    </div>
  </div>
</template>
<script>
export default {
  name: 'deltaProDetail',
  data () {
    return {
      items: [
        {
          src: [require('@/assets/img/deltaSeries/cn-ecoflow-dalta-pro-main-image-1.jpg')],
          link: 'https://cn.ecoflow.com/delta'
        },
        {
          src: [require('@/assets/img/deltaSeries/cn-ecoflow-dalta-pro-main-image-2.jpg')],
          link: 'https://cn.ecoflow.com/delta'
        },
        {
          src: [require('@/assets/img/deltaSeries/cn-ecoflow-dalta-pro-main-image-3.jpg')],
          link: 'https://cn.ecoflow.com/delta'
        }
      ],
      sets: [
        {
          label: '功能特征'
        },
        {
          label: '规格参数'
        },
        {
          label: '常见问题'
        }
      ],
      panel: [],
      qas: [
        {
          q: '功率',
          a: '德 DELTA Pro交流电输出功率最大3600W,X-Boost功能升维驱动4500W以内的大部分电器，使3600W-4500W内的设备不会因为过载保护而无法使用（但实际的输出功率仍然为3600w最大，此功能并不适用于所有设备，具体以实际测试为准）'
        },
        {
          q: '充电时间',
          a: '德 DELTA Pro（3600Wh约3.6度电）<br>市电充电：2.1小时/2200W<br>太阳能板充电：4小时/1600W(max) （由三块400w太阳能板串联测试得出，实际充电时间依赖天气情况）<br>交流充电桩充电：1.7小时/3400w（max）<br>智能发电机（油动加电包）充电：2.7小时/1700W（max）<br>普通传统发电机充电：输出功率需大于2200W可达市电充电速度'
        },
        {
          q: '太阳能充电',
          a: '德 DELTA Pro（3600Wh约3.6度电）太阳能板充电预估时间：<br>四块160W太阳能板：约8-16小时 四块串联<br>五块160W太阳能板：约 6.5-13小时 五块串联<br>六块160W太阳能板：约5.5-11小时 六块串联<br>一块400W太阳能板：约12-24小时 直联<br>两块400W太阳能板：约6-12小时 两块串联<br>三块400w太阳能板：约4-8小时 三块串联<br>太阳能板需另外单独购买，且充电速度依赖于天气情况，以上时间仅供参考，以实际测试为准'
        },
        {
          q: '电量',
          a: '德 DELTA Pro：3600w-3600wh-112.5万毫安-约3.6度电；<br>8种充电方式，6种输出方式可同时供电14台设备，支持额定功率为3600W电器；升维驱动部分4500W电器（以实际测试为准），电储量3500次循环不低于80%，支持APP智能管控，支持安德森输出接口，适用于多种用电场景使用'
        },
        {
          q: '输出端口',
          a: '德 DELTA Pro支持AC输出，USB输出，车充输出，DC5521输出，安德森端口共5种输出方式 提供共14输出口：AC输出×4交流输出功率： 额定功率3600W,峰值7200W，220V,AC 50Hz。USB-A端口×2 ：12W,5V, 2.4A（恒压）USB-A快充端口×2 ：5V 2.4A 9V 2A 12V 1.5A(恒压），最大功率18W。Type-C端口×2 ：5/9/12/15/20V 5A（恒压），最大功率100W。车充输出端口×1 ：12.6V 10A，最大功率126W。DC5521输出×2：12.6V 3A，最大功率38W每路。安德森端口：12.6V 30A 最大功率378W'
        },
        {
          q: '加电包重量尺寸',
          a: '加电包的重量为38kg，尺寸大小（长宽高）：635 x 285x 416mm(包含轮子尺寸)'
        },
        {
          q: '循环寿命',
          a: '3500次循环后剩余容量仍有80%以上。 电源循环次数的计算逻辑：电量从0充到100，再从100用到0，这算一次循环；同理用到50充满，又用到50再充满，这时候加起来算一次循环'
        },
        {
          q: '电芯',
          a: '德 DELTA Pro使用的是高品质磷酸铁锂电池，一并15串电芯，80AH  总电芯电压48V'
        }
      ]
    }
  },
  methods: {
    goTianmao () {
      window.open('http://mtw.so/680H7G', '_blank')
    },
    goJingdong () {
      window.open('http://mtw.so/5ZOeTS', '_blank')
    },
    download () {
      window.open('https://cn.ecoflow.com/download/' + '德 DELTA Pro-说明书' + '-V0.1.pdf', '_blank')
    }
  }
}
</script>
<style lang="scss" scoped>
  .productdetail{
    width:100%;
    height: auto;
    padding:30px 0 100px 0;
    background:#f6f6f6;
    min-width:1000px;
    .shopcart{
      width:100%;
      display: flex;
      justify-content: center;
      .shopcontain{
        width:1110px;
        height:600px;
        display: flex;
        .slidershow{
          width:550px;
          height:600px;
          margin-right:60px;
          border: 1px black dashed;
          .carouselContain{
            width:100%;
            height:600px;
            .containItem{
              width:100%;
              height:100%;
              display: flex;
              align-items: center;
              justify-content: center;
              .carouselContainImg{
                display: inline-block;
                width:550px;
                margin-bottom: 50px;
              }
            }
          }
        }
        .addtoshop{
          width:550px;
          span{
            display: block;
          }
          .addname{
            font-size: 48px;
            color:#333333;
            margin-bottom: 17px;
          }
          .adddes{
            font-size: 14px;
            color:#2BADCC;
            margin-bottom: 24px;
          }
          .specialty{
            font-size: 15px;
            color:#808080;
          }
          .divider{
            margin:72px 0 37px 0;
          }
          .addbtnContain{
            width:100%;
            display: flex;
            flex-wrap: wrap;
            span{
              display: flex;
              align-items: center;
              justify-content: center;
              cursor:pointer;
              font-size: 20px;
              color: #333333;
              &:hover{
                background:#fff
              }
              img{
                display: inline-block;
                width:19px;
                height:19px;
                margin-right: 18px;
              }
            }
            .halfbtn{
              width:242px;
              height:50px;
              border: 1px solid #333333;
              border-radius: 4px;
              &:nth-child(1){
                margin-right:15px;
              }
            }
            .totalbtn{
              width:500px;
              height:50px;
              margin-top:17px;
              border: 1px solid #333333;
              border-radius: 4px;
            }
          }
        }
      }
    }
    .detailset{
      width:100%;
      margin-top:200px;
      .tabContain{
        width:100%;
        // border-bottom:1px solid rgba(0, 0, 0, 0.12);
      }
      .tabitem{
        width: 100%;
      }
      .tabList{
        width:100%;
        background:#f6f6f6;
        border-top:1px solid rgba(0, 0, 0, 0.12);
        padding-top:78px;
        display: flex;
        justify-content: center;
        .tabListcontain{
          width:1110px;
          background:#fff;
          img{
            display: block;
            width:100%;
            height:auto;
            outline: none;
          }
        }
        .setList{
          width: 1100px;
          padding: 77px 0;
          box-sizing: border-box;
          border-bottom: 1px solid rgba(0, 0, 0, 0.12);
          display: flex;
          &:last-child{
            border:none
          }
          .setListLeft{
            width: 400px;
            font-size: 20px;
            color:#000000;
          }
          .setListRight{
            width: 700px;
            color:#ABABAB;
            font-size: 18px;
          }
        }
        .tabexpansion{
          width: 1110px;
        }
      }
    }
  }
  .v-expansion-panel:before{
    box-shadow: none !important;
  }
</style>
