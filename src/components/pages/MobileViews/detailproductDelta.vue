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
        cycle>
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
        <span class="msgName">德 DELTA mini</span>
        <span class="msgDes">【核心快充技术】真快充1.6小时充满，不伤电池。高效版升级不加价，巨容量更持久，多输出接口，纯正弦波，8重安全防护，适用户外露营车载自驾游应急储能用电</span>
        <span class="msgIntrduce">·  882Wh容量，大能量</span>
        <span class="msgIntrduce">·  X-Stream闪电快充技术，1.6小时充满</span>
        <span class="msgIntrduce">·  X-Boost智能逆变技术，最高驱动2200W设备</span>
        <span class="msgIntrduce">·  多接口，同时充电爽</span>
        <span class="msgIntrduce">·  强结构，工艺最优化</span>
        <span class="msgIntrduce">·  定期OTA，智能可进化</span>
        <span class="msgIntrduce">·  超便携，轻松搬得动</span>
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
              src='@/assets/img/sets/sets01.png'
            >
            <img
              src='@/assets/img/sets/sets02.png'
            >
            <img
              src='@/assets/img/sets/sets03.png'
            >
            <img
              style="margin-top:-2px"
              src='@/assets/img/sets/sets04.png'
            >
            <img
              src='@/assets/img/sets/sets05.png'
            >
            <img
              style="margin-top:-1px"
              src='@/assets/img/sets/sets06.png'
            >
            <img
              src='@/assets/img/sets/sets07.png'
            >
            <img
              src='@/assets/img/sets/sets08.png'
            >
            <img
              src='@/assets/img/sets/sets09.png'
            >
            <img
              src='@/assets/img/sets/sets10.png'
            >
            <img
              src='@/assets/img/sets/sets11.png'
            >
            <img
              src='@/assets/img/sets/sets12.png'
            >
            <img
              src='@/assets/img/sets/sets13.png'
            >
            <img
              src='@/assets/img/sets/sets14.png'
            >
            <img
              src='@/assets/img/sets/sets15.png'
            >
            <img
              src='@/assets/img/sets/sets16.png'
            >
            <img
              src='@/assets/img/sets/sets17.png'
            >
            <img
              src='@/assets/img/sets/sets18.png'
            >
            <img
              src='@/assets/img/sets/sets19.png'
            >
            <img
              src='@/assets/img/sets/sets20.png'
            >
            <img
              src='@/assets/img/sets/sets21.png'
            >
            <img
              src='@/assets/img/sets/sets22.png'
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
                <img style="width:100px;height:auto" src="@/assets/img/deltaSeries/delbig.png" alt="">
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
                882Wh (245,000mAh)
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
                参数： 12W(每路最大),5V,DC 2.4A<br/><br/>

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
                v-for="(item,i) in 5"
                :key="i"
              >
                <v-expansion-panel-header style="font-size:13px">重量尺寸问题重量尺寸问题
                  <template v-slot:actions>
                    <img v-if=" panel === i" src="@/assets/img/sets/subtract.png" style="width:20px;height:20px" alt="">
                    <img v-else src="@/assets/img/sets/plus.png" style="width:20px;height:20px" alt="">
                  </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <div style="border-top:2px solid #38B6C4;padding-top:8px;color:#808080;font-size:13px">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
  data () {
    return {
      items: [
        {
          src: [require('@/assets/img/deltaSeries/mdetail.png')],
          link: 'https://cn.ecoflow.com/delta'
        },
        {
          src: [require('@/assets/img/deltaSeries/mdetail.png')],
          link: 'https://cn.ecoflow.com/delta'
        },
        {
          src: [require('@/assets/img/deltaSeries/mdetail.png')],
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
      panel: []
    }
  },
  methods: {
    changeCar (number) {
      this.activeNum = number + 1
    },
    goTianmao () {
      window.open('http://mtw.so/5YrSSA', '_blank')
    },
    goJingdong () {
      window.open('http://mtw.so/6lGwv6', '_blank')
    },
    download () {
      window.open('https://cn.ecoflow.com/download/' + '德 DELTA Pro-说明书' + '-V0.1.pdf', '_blank')
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