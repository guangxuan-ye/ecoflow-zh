<template>
  <div class="mdetail">
    <div class="detailcarousel">
      <!-- 轮播图 -->
      <v-carousel
        :show-arrows="false"
        hide-delimiters
        hide-delimiter-background
        delimiter-icon="mdi-minus"
        interval="6000"
        transition="slide-y-reverse-transition"
        reverse-transition="scale-transition"
        style="height:375px"
        @change="changeCar"
        height="auto"
        >
        <v-carousel-item
          class="carouselItem"
          v-for="(item,idx) in items"
          :key="idx">
          <div class="carouselContainDiv">
            <img class="conImg" :src="item.src" alt="">
          </div>
        </v-carousel-item>
      </v-carousel>
      <div class="detailIndex">
        {{ activeNum +' / ' + items.length}}
      </div>
    </div>
    <div class="detailInfo">
      <div class="detailMsg">
        <span class="msgName">德DELTA 1300</span>
        <span class="msgDes">德DELTA 1300移动储能户外电源，具备较高电池容量和输出功率，拥有1008Wh和1260Wh两个容量版本。配合X-Stream快速充电技术和种类丰富的供电接口，可以满足自驾旅行或户外作业中的用电需求。适用户外露营、车载自驾游、应急储备用电，以及部分专业场景用电。</span>
        <span class="msgIntrduce">• 1008Wh/1260Wh超大容量</span>
        <span class="msgIntrduce">• 1600W/1800W额定输出功率，X-Boost升维驱动2000W/2200W</span>
        <span class="msgIntrduce">• X-Stream闪电快充技术，1.6小时充满</span>
        <span class="msgIntrduce">• 11个输出端口，可同时充电</span>
        <span class="msgIntrduce">• APP遥控，定期OTA，智能可进化</span>
      </div>
      <v-divider class="divider"></v-divider>
      <div class="addbtnContain">
        <span class="halfbtn" @click="goTianmao()"><img src="@/assets/img/deltaSeries/shopicon.png"/>天猫购物</span>
        <span class="halfbtn" @click="goJingdong()"><img src="@/assets/img/deltaSeries/shopicon.png">京东购买</span>
        <span class="totalbtn" @click="download()"><img src="@/assets/img/deltaSeries/pdficon.png">说明书下载</span>
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
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-1300-mob-detail-image-1.jpg'
            >
            <img
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-1300-mob-detail-image-2.jpg'
            >
            <img
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-1300-mob-detail-image-3.jpg'
            >
            <img
              style="margin-top:-2px"
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-1300-mob-detail-image-4.jpg'
            >
            <img
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-1300-mob-detail-image-5.jpg'
            >
            <img
              style="margin-top:-1px"
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-1300-mob-detail-image-6.jpg'
            >
            <img
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-1300-mob-detail-image-7.jpg'
            >
            <img
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-1300-mob-detail-image-8.jpg'
            >
            <img
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-1300-mob-detail-image-9.jpg'
            >
            <img
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-1300-mob-detail-image-10.jpg'
            >
            <img
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-1300-mob-detail-image-11.jpg'
            >
            <img
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-1300-mob-detail-image-12.jpg'
            >
            <img
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-1300-mob-detail-image-13.jpg'
            >
            <img
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-1300-mob-detail-image-14.jpg'
            >
            <img
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-1300-mob-detail-image-15.jpg'
            >
            <img
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-1300-mob-detail-image-16.jpg'
            >
            <img
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-1300-mob-detail-image-17.jpg'
            >
            <img
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-1300-mob-detail-image-18.jpg'
            >
            <img
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-1300-mob-detail-image-19.jpg'
            >
            <img
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-1300-mob-detail-image-20.jpg'
            >
            <img
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-1300-mob-detail-image-21.jpg'
            >
            <img
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-1300-mob-detail-image-22.jpg'
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
                <img style="width:100px;height:auto" src="@/assets/img/deltaSeries/cn-ecoflow-dalta-1300-parameter-image.png" alt="">
              </div>
            </div>
            <div class="setList">
              <div class="setListLeft">
                额定功率
              </div>
              <div class="setListRight">
                1800W
              </div>
            </div>
            <div class="setList">
              <div class="setListLeft">
                容量
              </div>
              <div class="setListRight">
                1260Wh
              </div>
            </div>
            <div class="setList">
              <div class="setListLeft">
                加电包
              </div>
              <div class="setListRight">
                无
              </div>
            </div>
            <div class="setList">
              <div class="setListLeft">
                输出
              </div>
              <div class="setListRight">
                AC输出(纯正弦波)<br/>
                数量：4 <br/>
                交流输出功率： 额定功率1800W,峰值3300W,220V,AC 50Hz<br/><br/>

                USB-A端口<br/>
                数量：2<br/>
                参数： 12W,5V,DC 2.4A<br/><br/>

                USB-A快充端口<br/>
                数量：2<br/>
                参数： 18W,5V 2.4A, 9V 2A, 12V 1.5A<br/><br/>

                Type-C端口<br/>
                数量：2<br/>
                参数： 60W,5/9/12V 5A<br/><br/>

                车充端口<br/>
                数量：1<br/>
                参数： 108.8W,13.6V,DC 8A(最大)
              </div>
            </div>
            <div class="setList">
              <div class="setListLeft">
                输入
              </div>
              <div class="setListRight">
                市电充电<br/>
                交流充电输入电压：AC 220-240V(50Hz/60Hz)<br/>
                交流充电输入功率：X-Stream超充1200W最大<br/>
                充电时间1.6小时<br/><br/>

                车充充电<br/>
                车充输入：12V/24V,DC 8A(最大)<br/>
                充电时间： 10小时<br/><br/>

                太阳能板充电<br/>
                太阳能充电输入400W,10-25V,DC 10A(最大)<br/>
                充电时间： 4-8小时(110W x 4)<br/><br/>

                油动发电机<br/>
                充电时间： 1.6小时充满<br/>
                * 油动发电机最高输出大于本产品所需功率
              </div>
            </div>
            <div class="setList">
              <div class="setListLeft">
                电池
              </div>
              <div class="setListRight">
                电芯类型：高倍率汽车级动力车芯(18650锂电池)<br/>

                充电温度：0-45℃ +/-3℃<br/>

                放电温度：-20-45℃（±3℃）<br/>

                循环寿命：800+次循环(80%)
              </div>
            </div>
            <div class="setList">
              <div class="setListLeft">
                APP
              </div>
              <div class="setListRight">
                不支持手机App操控
              </div>
            </div>
            <div class="setList">
              <div class="setListLeft">
                尺寸和重量
              </div>
              <div class="setListRight">
               尺寸：40x21x27cm<br/>
               重量：约14kg
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
                <v-expansion-panel-header style="font-size:13px">{{ item.q }}
                  <template v-slot:actions>
                    <img v-if=" panel === i" src="@/assets/img/sets/subtract.png" style="width:20px;height:20px" alt="">
                    <img v-else src="@/assets/img/sets/plus.png" style="width:20px;height:20px" alt="">
                  </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <div style="border-top:2px solid #38B6C4;padding-top:8px;color:#808080;font-size:13px" v-html="item.a"></div>
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
  data () {
    return {
      items: [
        {
          src: [require('@/assets/img/deltaSeries/cn-ecoflow-dalta-1300-mob-main-image-1.jpg')],
          link: 'https://cn.ecoflow.com/delta'
        },
        {
          src: [require('@/assets/img/deltaSeries/cn-ecoflow-dalta-1300-mob-main-image-2.jpg')],
          link: 'https://cn.ecoflow.com/delta'
        },
        {
          src: [require('@/assets/img/deltaSeries/cn-ecoflow-dalta-1300-mob-main-image-3.jpg')],
          link: 'https://cn.ecoflow.com/delta'
        }
      ],
      activeNum:1, // active页面
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
          q: '电芯',
          a: '电芯种类为：18650，三元锂电池，德 DELTA1300是由：10并14串，140节电芯组成'
        },
        {
          q: '电量',
          a: '德 DELTA1300：1800w-1260wh-35万毫安-约1.3度电；四种种充电方式，可同时供电11台设备，支持额定功率为1800W电器；升维驱动部分2200W电器（以实际测试为准），电储量800次循环不低于80%，暂不支持APP智能管控，可带动电磁炉，电吹风，电炒锅，电钻等多数常见电器'
        },
        {
          q: '功率',
          a: '德 DELTA1300交流电输出功率最大1800W，X-Boost功能升维驱动2200W以内的部分电器（实际的输出功率仍然为1800w最大，此功能并不适用于所有设备，具体以实际测试为准）'
        },
        {
          q: '太阳能充电',
          a: '德 DELTA1300 (1260Wh) 太阳能板充电预估时间：一块110W太阳能板约14小时；两块110W太阳能板约8小时；四块110W太阳能板约4-6小时（两串联再并联，需单独购买并联线）；一块160W太阳能板约12小时；两块160W太阳能板6-8小时；三块太阳能板160W4-6小时；太阳能板充电速度依赖于天气情况，以上时间仅供参考，以实际测试为准'
        },
        {
          q: '充电时间',
          a: '德 DELTA1300 市电充电：约1.6小时（1200W最大）；车充充电：约13.5小时 （12v/24v DC, 8A最大， 需先启动汽车）；发电机充电：发电机功率1800W以上可实现1.6小时充满 ；太阳能板充电：约4小时（400W, 10-65V DC 10A 最大，由4块110W太阳能板测试得出，具体充电速度取决于天气情况）以上数据为测试所得出，具体以实际为准'
        },
        {
          q: '输出端口',
          a: '德 DELTA1300：支持220V交流输出，USB输出，车充输出，共3种输出方式，提供共11个输出口：<br>AC输出×4<br>交流输出功率： 额定功率1800W,峰值3300W,220V,AC 50Hz<br>USB-A端口×2<br>参数： 12W,5V,DC 2.4A<br>USB-A快充端口×2<br>参数：5V/2.4A,9V/2A,12V/1.5A  18W(最大)<br>Type-C端口×2<br>参数： 60W,5-20V,DC 3A(最大)<br>车充输出端口×1<br>参数： 108.8W,13.6V,DC 8A(最大)'
        },
        {
          q: '输出过载',
          a: '德 DELTA1300  AC输出过载：屏幕上会出现AC图标，OVERLOAD图标闪烁<br>1.EPS模式下，我们支持最大功率是2200W，确认用电设备是否在该范围内<br>2.用电设备瞬间功率过大，导致无法运行<br><br>DC输出过载：屏幕上会出现USB图标和OVERLOAD图标一起闪烁<br>1.DC-车充输出过载，确认用电设备功率额定电流是否8A以内，如电流过大会导致过载，甚至车充口烧坏<br>2.DC-USB-Type C接口输出过载，请确认用电设备是否在接口限定电流范围内'
        },
        {
          q: '无输出U-A',
          a: '1.确认DC开关是否打开，打开后DC开关灯是否常亮<br>2.更换不同USB-A接口，尝试接入USB-C等其他USB接口，确认是否为单个接口问题<br>3.更换USB线确认一下，是否线材故障'
        },
        {
          q: '使用教程',
          a: 'DELTA使用教程<br>https://aweme.snssdk.com/aweme/v1/play/?video_id=v0d00fg10000c2mf27hi3tbhesdgbp80&ratio=720p&line=0'
        }
      ]
    }
  },
  methods: {
    changeCar (number) {
      this.activeNum = number + 1
    },
    goTianmao () {
      window.open('http://mtw.so/5ShSMH', '_blank')
    },
    goJingdong () {
      window.open('http://mtw.so/5KLVSg', '_blank')
    },
    download () {
      window.open('https://cn.ecoflow.com/download/' + '德 DELTA 1300-说明书' + '-V0.1.pdf', '_blank')
    }
  }
}
</script>
<style lang="scss" scoped>
  .mdetail{
    width:100%;
    margin-top: 110px;
    background:#f6f6f6;
    .detailcarousel{
      width: 100%;
      height: 375px;
       position: relative;
      .carouselItem{
        width:100%;
        height:100%;
        .carouselContainDiv{
          width:100%;
          height:100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          .conImg{
            display: inline-block;
            width: 100%;
            height: 100%;
            object-fit:cover;
          }
        }
      }
      .detailIndex{
        position: absolute;
        right: 0;
        bottom: 16px;
        font-size: 12px;
        z-index: 1;
        height: 20px;
        line-height: 20px;
        width: 50px;
        color: #fff;
        background:#2badcc;
        border-radius: 10px 0 0 10px;
        text-align: center;
      }
    }
    .detailInfo{
      width: 100%;
      margin-top:25px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .detailMsg{
        width:80%;
        span{
          display: inline-block;
        }
        .msgName{
          color:#333333;
          font-size: 28px;
          margin-bottom: 5px;
        }
        .msgDes{
          color:#2BADCC;
          font-size: 12px;
          margin-bottom: 5px;
        }
        .msgIntrduce{
          color: #808080;
          font-size: 12px;
          &:last-child{
            margin-bottom: 40px;
          }
        }
      }
      .divider{
        width: 80%;
        margin-bottom: 20px;
      }
      .addbtnContain{
        width:80%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        span{
          display: flex;
          align-items: center;
          justify-content: center;
          cursor:pointer;
          font-size: 14px;
          color: #333333;
          &:hover{
            background:#fff
          }
          img{
            display: inline-block;
            width:14px;
            height:14px;
            margin-right: 14px;
          }
        }
        .halfbtn{
          width:48%;
          height:30px;
          border: 1px solid #7b7c7d;
          border-radius: 4px;
          // &:nth-child(1){
          //   margin-right:15px;
          // }
        }
        .totalbtn{
          width:100%;
          max-width: 375px;
          height:30px;
          margin-top:17px;
          border: 1px solid #7b7c7d;
          border-radius: 4px;
        }
      }
    }
    .detailset{
      width:100%;
      margin-top:115px;
      .tabContain{
        width:100%;
        // border-bottom:1px solid rgba(0, 0, 0, 0.12);
      }
      .tabitem{
        width: 100%;
        font-size: 12px;
      }
      .tabList{
        width:100%;
        background:#f6f6f6;
        border-top:1px solid rgba(0, 0, 0, 0.12);
        padding-top:25px;
        display: flex;
        justify-content: center;
        .tabListcontain{
          width:100%;
          background:#fff;
          img{
            display: block;
            width:100%;
            height:auto;
            outline: none;
          }
        }
        .setList{
          width: 100%;
          padding: 25px 0;
          box-sizing: border-box;
          border-bottom: 1px solid rgba(0, 0, 0, 0.12);
          display: flex;
          &:last-child{
            border:none
          }
          .setListLeft{
            width: 35%;
            font-size: 14px;
            color:#000000;
          }
          .setListRight{
            width: 65%;
            color:#ABABAB;
            font-size: 12px;
          }
        }
        .tabexpansion{
          width: 100%;
        }
      }
    }
  }
  .v-expansion-panel:before{
    box-shadow: none !important;
  }
</style>