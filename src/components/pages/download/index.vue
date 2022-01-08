<template>
  <v-container fluid ma-0 pa-0 class="d-flex align-center flex-column">
    <v-carousel
      hide-delimiter-background
      hide-delimiters
      :show-arrows= false
      height="auto">
      <v-carousel-item
        src="@/assets/img/download/banner.jpg"
      >
      </v-carousel-item>
    </v-carousel>
     <div style="padding-bottom: 120px;width: 100%" class="d-flex align-center flex-column">
       <div style="width: 60%" class="mt-16">
         <p class="down_title en_title">App</p>
         <div style="width:100%;" class="mt-16 pb-14 line">
           <v-row>
             <v-col :cols="3">
               <v-img src="@/assets/img/download/down_zh.png" contain width="114" height="114" />
             </v-col>
             <v-col :cols="9">
               <div class="pro_subtitle en_title">正浩EcoFlow App</div>
               <div class="content"><span class="en_num">正浩EcoFlow app</span>是户外电源品牌<span class="en_num">正浩EcoFlow</span>的智能管理平台，应用于新一代<br/>
               移动储能设备<span class="en_num">RIVER</span>全系产品及后期其他产品系列，方便用户查看状态、选项设置及远程管理设备。</div>
             </v-col>
           </v-row>
           <div class="mt-13 d-flex text-center flex-row flex-wrap">
              <a href="https://apps.apple.com/cn/app/id1531850847">
              <v-card elevation="1" outlined height="305px" width="262px" class="downCard mt-6 mx-3 d-flex justify-center align-center" :class="iosCodeBack" @mouseenter="iosCodeTab" @mouseleave="iosCodeTab" >
                <div v-show="iosIcon" class="text-center">
                  <v-img src="@/assets/img/download/ios.png" class="d-inline-block" width="45%" />
                  <p class="content en_num mt-4">iPhone</p>
                </div>
                <div v-show="iosCode" class="text-center">
                  <v-img src="@/assets/img/download/down_code.png" class="d-inline-block" width="55%" />
                  <p class="content en_num mb-0">扫描二维码<br/>下载正浩EcoFlow App</p>
                </div>
              </v-card>
              <!-- <span class="d-inline-block mt-6 content">V 1.0.4</span> -->
              </a>
              <a href="https://iot-ecoflow.oss-cn-shenzhen.aliyuncs.com/apk/app-release.apk">
                <v-card elevation="1" outlined height="305px" width="262px" class="downCard mt-6 mx-3 d-flex justify-center align-center" :class="anCodeBack" @mouseenter="anCodeTab" @mouseleave="anCodeTab" @click="downApp('android')">
                  <div v-show="anIcon" class="text-center">
                    <v-img src="@/assets/img/download/android.png" class="d-inline-block" width="45%" />
                    <p class="content en_num mt-4">Android</p>
                  </div>
                  <div v-show="anCode" class="text-center">
                    <v-img src="@/assets/img/download/down_code.png" class="d-inline-block" width="55%" />
                    <p class="content en_num mb-0">扫描二维码<br/>下载正浩EcoFlow App</p>
                  </div>
                </v-card>
                <!-- <span class="d-inline-block mt-6 content">11</span> -->
              </a>
           </div>
         </div>

         <p class="down_title zh_title mt-10">产品说明书</p>
         <div style="width:100%" class="mt-16">
           <div class="pa-6">
             <v-row class="en_num bac_row" v-for="(item,idx) in proDirect" :key="idx">
               <v-col :cols="4">{{item.pro}}</v-col>
               <v-col :cols="4" class="text-center">{{item.date}}</v-col>
               <v-col :cols="4" class="text-right" style="color: #0BB7B3;cursor: pointer;">PDF
                 <a :href="'https://cn.ecoflow.com/download/'+ item.pro + '-V0.1.pdf'">
                   <img src="@/assets/img/download/down.png" contain class="pl-4" />
                 </a>
               </v-col>
             </v-row>
           </div>
         </div>

       </div>
     </div>
  </v-container>
</template>

<script>
export default {
  name: 'index',
  data: () => ({
    proDirect: [
      // { pro: '睿 RIVER Mini-(标配版)说明书', date: '2021-9-29' },
      // { pro: '睿 RIVER Mini-(无线充版)说明书', date: '2021-9-26' },
      // { pro: '睿 RIVER 说明书', date: '2020-11-13' },
      // { pro: '睿 RIVER MAX 说明书', date: '2020-11-13' },
      // { pro: '德 DELTA 说明书', date: '2020-9-18' },
      // { pro: '太阳能板说明书', date: '2020-2-15' }
      { pro: '太阳能板追踪器-说明书', date: '2021-11-30' },
      { pro: 'APP说明书', date: '2021-11-02' },
      { pro: '德 DELTA Pro-说明书', date: '2021-10-20' },
      { pro: '德 DELTA Max-说明书', date: '2021-10-12' },
      { pro: '德 DELTA Mini-说明书', date: '2021-10-12' },
      { pro: '德 DELTA-说明书', date: '2021-10-12' },
      { pro: '睿 RIVER mini-说明书', date: '2021-10-12' },
      { pro: '太阳能板说明书', date: '2021-10-12' },
    ],
    iosIcon: true,
    iosCode: false,
    iosCodeBack: '',
    anIcon: true,
    anCode: false,
    anCodeBack: ''
  }),
  methods: {
    iosCodeTab () {
      this.iosIcon = !this.iosIcon
      this.iosCode = !this.iosCode
      if (this.iosCode) {
        this.iosCodeBack = 'code_back'
      } else {
        this.iosCodeBack = ''
      }
    },
    anCodeTab () {
      this.anIcon = !this.anIcon
      this.anCode = !this.anCode
      if (this.anCode) {
        this.anCodeBack = 'code_back'
      } else {
        this.anCodeBack = ''
      }
    },
    downApp (type) {
      if (type === 'ios') {
        window.open('https://itunes.apple.com/in/app/apple-store/1531850847')
      }
    }
  }
}

</script>
<style scoped>
.down_title {
  font-size: 24px;
  line-height: 25px;
  color: #292929;
}
.bac_row:nth-child(2n+1) {
  background: #F7F7F8;
}
.downCard {
  cursor: pointer;
  border-radius: 14px !important;
}
.code_back {
  background: #EFEFEF;
}
</style>
