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
        <span class="msgName">德DELTA mini</span>
        <span class="msgDes">德 DELTA mini 是可轻易搬动的便携储能电源。小小身躯，最高能驱动2200W设备，满足日常用电的基本需求。可充当家庭备用应急电源，亦可作为户外移动电源使用。适用户外露营车载自驾游应急储备用电。</span>
        <span class="msgIntrduce">• 882Wh大容量</span>
        <span class="msgIntrduce">• 1400W额定输出功率，X-Boost升维驱动2200W</span>
        <span class="msgIntrduce">• X-Stream闪电快充技术，1.6小时充满</span>
        <span class="msgIntrduce">• 9个输出端口，可同时充电</span>
        <span class="msgIntrduce">• APP遥控，定期OTA，智能可进化</span>
      </div>
      <v-divider class="divider"></v-divider>
      <div class="addbtnContain">
        <span class="halfbtn" @click="goTianmao()"><img src="@/assets/img/deltaSeries/shopicon.png"/>天猫购买</span>
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
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-mini-mob-detail-image-1.jpg'
            >
            <img
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-mini-mob-detail-image-2.jpg'
            >
            <img
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-mini-mob-detail-image-3.jpg'
            >
            <img
              style="margin-top:-2px"
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-mini-mob-detail-image-4.jpg'
            >
            <img
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-mini-mob-detail-image-5.jpg'
            >
            <img
              style="margin-top:-1px"
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-mini-mob-detail-image-6.jpg'
            >
            <img
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-mini-mob-detail-image-7.jpg'
            >
            <img
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-mini-mob-detail-image-8.jpg'
            >
            <img
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-mini-mob-detail-image-9.jpg'
            >
            <img
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-mini-mob-detail-image-10.jpg'
            >
            <img
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-mini-mob-detail-image-11.jpg'
            >
            <img
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-mini-mob-detail-image-12.jpg'
            >
            <img
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-mini-mob-detail-image-13.jpg'
            >
            <img
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-mini-mob-detail-image-14.jpg'
            >
            <img
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-mini-mob-detail-image-15.jpg'
            >
            <img
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-mini-mob-detail-image-16.jpg'
            >
            <img
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-mini-mob-detail-image-17.jpg'
            >
            <img
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-mini-mob-detail-image-18.jpg'
            >
            <img
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-mini-mob-detail-image-19.jpg'
            >
            <img
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-mini-mob-detail-image-20.jpg'
            >
            <img
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-mini-mob-detail-image-21.jpg'
            >
            <img
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-mini-mob-detail-image-22.jpg'
            >
            <img
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-mini-mob-detail-image-23.jpg'
            >
            <img
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-mini-mob-detail-image-24.jpg'
            >
            <img
              src='@/assets/img/deltaSeries/cn-ecoflow-dalta-mini-mob-detail-image-25.jpg'
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
                <img style="width:100px;height:auto" src="@/assets/img/deltaSeries/cn-ecoflow-dalta-mini-parameter-image.png" alt="">
              </div>
            </div>
            <div class="setList">
              <div class="setListLeft">
                额定功率
              </div>
              <div class="setListRight">
                1400W
              </div>
            </div>
            <div class="setList">
              <div class="setListLeft">
                容量
              </div>
              <div class="setListRight">
                882Wh
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
                数量：2 <br/>
                交流输出功率： 额定功率1400W,峰值2100W,220V,AC 50Hz<br/><br/>

                USB-A端口<br/>
                数量：2<br/>
                参数：12W(每路最大),5V,DC 2.4A<br/><br/>

                USB-A快充端口<br/>
                数量：1<br/>
                参数： 18W(最大),5V 2.4A, 9V 2A, 12V 1.5A<br/><br/>

                Type-C端口<br/>
                数量：1<br/>
                参数： 100W(最大),5/9/12/15/20V 5A<br/><br/>

                车充端口<br/>
                数量：1<br/>
                参数：126W,12.6V,DC 10A<br/><br/>

                DC 5521<br/>
                数量：2<br/>
                参数： 12.6V,3A,车充和DC5521功率共享,最大输出126W
              </div>
            </div>
            <div class="setList">
              <div class="setListLeft">
                输入
              </div>
              <div class="setListRight">
                市电充电<br/>
                交流充电输入电压：AC 220-240V(50Hz/60Hz)<br/>
                交流充电输入功率：X-Stream快充最大功率900W<br/>
                充电时间1.6小时<br/><br/>

                车充充电<br/>
                车充输入：12V/24V,DC 8A(默认)<br/>
                充电时间： 9.5小时<br/><br/>

                太阳能板充电<br/>
                太阳能充电输入300W,11-75V,DC 10A(最大)<br/>
                充电时间： 3.7-7.4小时(160W x 2)<br/><br/>

                油动发电机<br/>
                充电时间： 1.6小时充满<br/>
                * 油动发电机最高输出大于本产品所需功率，或调节充电速度
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
                支持手机App操控
              </div>
            </div>
            <div class="setList">
              <div class="setListLeft">
                尺寸和重量
              </div>
              <div class="setListRight">
               尺寸：37.8x18.4x24cm<br/>
               重量：约11kg
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
          src: [require('@/assets/img/deltaSeries/cn-ecoflow-dalta-mini-mob-main-image-1.jpg')],
          link: 'https://cn.ecoflow.com/delta'
        },
        {
          src: [require('@/assets/img/deltaSeries/cn-ecoflow-dalta-mini-mob-main-image-2.jpg')],
          link: 'https://cn.ecoflow.com/delta'
        },
        {
          src: [require('@/assets/img/deltaSeries/cn-ecoflow-dalta-mini-mob-main-image-3.jpg')],
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
          a: '电芯种类为：18650，三元锂电池，DELTA mini是由7并14串，共98节电芯组成'
        },
        {
          q: '电量',
          a: '德 DELTA mini：1400w-882wh-24万毫安-约0.88度电；四种种充电方式，可同时供电9台设备，支持额定功率为1400W电器；升维驱动部分2200W电器（以实际测试为准），电储量800次循环不低于80%，支持APP智能管控，实测可带动电磁炉，电吹风，电炒锅，电钻等多数常见电器'
        },
        {
          q: '功率',
          a: '德 DELTA mini交流电输出功率最大1400W,X-Boost功能升维驱动2200W以内的部分电器，使1400W-2200W内的设备不会因为过载保护而无法使用（但实际的输出功率仍然为1400w最大，此功能并不适用于所有设备，具体以实际测试为准）'
        },
        {
          q: '充电时间',
          a: '德 DELTA mini充电时间：<br>市电充电：1.6小时（最大900w）<br>车充充电：9.5小时（12v,8A）<br>发电机充电：功率需大于1100W可达市电充电时间<br>太阳能充电：3-6小时（300W,11-75V,DC 10A最大），2 块160W或3块110W或1块400W太阳能板，太阳能板充电时间依赖天气情况，具体时间以实际测试为准'
        },
        {
          q: '太阳能充电',
          a: '德 DELTA mini太阳能充电时间：1块110W太阳能板约10小时；2块110W太阳能板约5小时；1块160W太阳能板约7.5小时；2块160W太阳能板约4小时；太阳能板充电速度依赖于天气情况，以上时间仅供参考，以实际测试为准'
        },
        {
          q: '输出端口',
          a: '德 DELTA mini支持AC输出，USB输出，车充输出，DC5521输出，共4种输出方式，提供共9个输出口：<br>AC输出×2<br>交流输出功率： 额定功率1400W,峰值2100W,220V,AC 50Hz<br>智能逆变系统：X-BOOST支持1400-2200W设备<br><br>USB-A端口×2：  （12W,5V,DC 2.4A）<br><br>USB-A快充端口×1： 18W,5-12V,DC 2.4A(最大)<br><br>Type-C端口×1： 100W,5-20V,DC 5A(最大)<br><br>车充端口×1：  126W,12.6V,DC 10A(最大)<br><br>DC5521输出× 2  ：37.8W,12.6V,DC 3A<br>车充与DC5521功率共享，最大126W'
        },
        {
          q: '输出过载',
          a: '德 DELTA mini AC输出过载：屏幕上会出现AC图标，OVERLOAD图标闪烁<br>1.请检查接入设备功率是否符合我们功率范围，接入1400W-2200W功率设备确认x-boost是否开启，默认是开启，可以连接APP再次确认<br>2.EPS模式下，我们支持最大功率是1400W，确认用电设备是否在该范围内（此状态不支持x-boost功能）<br>3.用电设备瞬间功率过大，导致无法运行<br><br>DC输出过载：屏幕上会出现USB图标和OVERLOAD图标一起闪烁<br>1.DC-车充输出过载，确认用电设备功率额定电流是否10A以内，如电流过大会导致过载，甚至车充口烧坏<br>2.DC-USB-Type C接口输出过载，请确认用电设备是否在接口限定电流范围内（5A最大）'
        }
      ]
    }
  },
  methods: {
    changeCar (number) {
      this.activeNum = number + 1
    },
    goTianmao () {
      window.open('http://mtw.so/5ShSu9', '_blank')
    },
    goJingdong () {
      window.open('http://mtw.so/60unCh', '_blank')
    },
    download () {
      window.open('https://cn.ecoflow.com/download/' + '德 DELTA mini-说明书' + '-V0.1.pdf', '_blank')
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
