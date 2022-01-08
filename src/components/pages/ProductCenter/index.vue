<template>
  <v-container fluid ma-0 pa-0 class="d-flex align-center flex-column">
    <v-carousel
      hide-delimiter-background
      show-arrows-on-hover
      delimiter-icon="mdi-minus"
      interval="6000"
      transition="slide-y-reverse-transition"
      reverse-transition="scale-transition"
      :show-arrows= false
      height="auto"
      cycle >
      <v-carousel-item
        src="@/assets/img/product/banner.jpg"
      >
      </v-carousel-item>
            <v-carousel-item
        src="@/assets/img/product/banner1.jpg"
      >
      </v-carousel-item>
    </v-carousel>
    <div class="pro_center">
      <div id="outdoor" style="width: 100%;" class="text-center d-flex flex-column align-center">
        <div style="width: 70%;" class="mt-16">
          <p class="font-weight-bold mb-6 pro_subtitle">
            户外电源
          </p>
          <div class="d-inline-block mb-14" style="width: 50px;border: 2px #0BB7B3 solid"></div>
          <v-card
            id="river"
            outlined
            class="scro_anima mx-auto text-left pa-16 border"
          >
            <v-row class="d-flex flex-row align-center">
              <v-col :cols="4" class="pl-6 pt-12">
                <span class="news ch_title text-center">新品</span>
                <p class="pro_subtitle mt-5 mb-4 font-weight-bold en_title">睿 RIVER 系列</p>
                <div class="content">
                  <span class="en_num">睿 RIVER</span>系列采用前所未有的模块化设置，用户可安装扩容电池包，使<span class="en_num">RIVER</span>的容量翻倍，但依然便携和灵活。同时<span class="en_num">X-Boost</span>智能逆变技术最高可驱动<span class="en_num">1500W</span>大功率设备，扩大了<span class="en_num">RIVER</span>系列的使用范围，为更高功率用电设备供电。
                </div>
                <span @click="pro_detail('river')" class="ahref ch_title font-weight-bold h6 black--text text--lighten-1 mt-16">技术参数 &gt;</span>
                <a href="http://mtw.so/5v32L0" target="_blank"><v-btn depressed style="margin-left:80px;background:#333;color:#fff" >立即购买</v-btn></a> 
              </v-col>
              <v-col :cols="8" class="pt-12 product">
                <v-img
                  src='@/assets/img/product/river600.png'
                  contain
                  width="100%"
                  class="item"
                />
              </v-col>
            </v-row>
          </v-card>
          <v-card
            id="delta"
            outlined
            class="scro_anima mx-auto text-left mt-6 pa-16 border"
          >
            <v-row class="d-flex flex-row align-center ">
              <v-col :cols="4" class="pl-6 pt-12">
                <p class="pro_subtitle mt-5 mb-4 font-weight-bold en_title">德 DELTA 系列</p>
                <div class="content">
                  <span class="en_num">德 DELTA</span>是具有高功率输出、大容量和突破性充电技术等优势的锂电子电池发电机。具有与传统汽油发电机相同的功率，但低噪音、无气体排放，无需高昂的维护费用
                </div>
                <span @click="pro_detail('delta')" class="ahref ch_title font-weight-bold h6 black--text text--lighten-1 mt-16">技术参数 &gt;</span>
                 <a href="http://mtw.so/65XGmF" target="_blank"><v-btn depressed style="margin-left:80px;background:#333;color:#fff" >立即购买</v-btn></a>
              </v-col>
              <v-col :cols="8" class="pt-12 product">
                <v-img
                  src='@/assets/img/product/delta.png'
                  width="100%"
                  contain
                  class="item"
                />
              </v-col>
            </v-row>
          </v-card>
        </div>
      </div>
      <div id="fit" style="width: 100%;" class="text-center d-flex flex-column align-center">
        <div style="width: 70%;" class="mt-16">
          <p  class="font-weight-bold mb-6 pro_subtitle">
            配件系列
          </p>
          <div class="d-inline-block mb-14" style="width: 50px;border: 2px #0BB7B3 solid"></div>
          <div class="d-flex flex-row flex-wrap" id="panels">
                <v-card
              width="48%"
               outlined
               style="margin-bottom:20px"
              class="scro_anima product mr-6 text-center pa-12 d-flex align-center flex-column border"
            >
         
              <p class="pro_subtitle mb-4 font-weight-bold en_title">太阳能追踪器 <span class="news ch_title text-center">新品</span></p>
              <div class="content">
                <span class="en_num">正浩第一款可移动的太阳能追踪器，全自动追光系统，太阳能转化效率提高30%，光传感器，实时识别光照强度，智能算法，精准定位太阳方向，你的太阳能板，有了新搭档。</span>
              </div>
              <span @click="pro_detail('mx200')" class="ahref ch_title d-block font-weight-bold h6 black--text text--lighten-1 mt-10 mb-4">技术参数 &gt;</span>
               <a href="http://mtw.so/5v31dm" target="_blank"><v-btn depressed style="margin-left:0px;background:#333;color:#fff" >立即购买</v-btn></a>
              <v-img
                src='@/assets/img/product/200 MAX Module.png'
                contain
                class="item"
              />
            </v-card>
            <v-card
              outlined
              width="48%"
               style="margin-bottom:20px"
              class="scro_anima product mr-6 text-center pa-12 d-flex align-center flex-column border"
            >
              <p class="pro_subtitle mb-4 font-weight-bold en_title">110W太阳能板</p>
              <div class="content">
                <span class="en_num">110W</span>太阳能电池板，让您在户外也无后顾之忧。<br />由最高效的单晶硅电池制成，可为DELTA或RIVER充电，<br/>确保设备不间断运行。
              </div>
              <span @click="pro_detail('110panels')" class="ahref ch_title d-block font-weight-bold h6 black--text text--lighten-1 mt-10 mb-4">技术参数 &gt;</span>
               <a href="http://mtw.so/6dpHLG" target="_blank"><v-btn depressed style="margin-left:0px;background:#333;color:#fff" >立即购买</v-btn></a>
              <v-img
                src='@/assets/img/product/110.jpg'
                contain
                class="item"
              />
            </v-card>
            <v-card
              outlined
              width="48%"
              style="margin-bottom:20px"
              class="scro_anima_3 product text-center pa-12 d-flex flex-column align-center border "
            >
              <p class="pro_subtitle mb-4 font-weight-bold en_title">睿 RIVER MAX 加电包</p>
              <div class="content">
                <span class="en_num">睿 RIVER MAX</span>扩容电池包可与<span class="en_num">睿 RIVER</span>配套<br/>使用并为其容量扩增至原来的两倍<br/>使用周期可达<span class="en_num">500+</span>次
              </div>
              <span @click="pro_detail('powerpackage')" class="ahref ch_title d-block font-weight-bold h6 black--text text--lighten-1 mt-10 mb-4">技术参数 &gt;</span>
               <a href="http://mtw.so/6lGxbG" target="_blank"><v-btn depressed style="margin-left:0px;background:#333;color:#fff" >立即购买</v-btn></a>
              <v-img
                src='@/assets/img/product/600 MAX Module.jpg'
                contain
                class="item"
              />
            </v-card>

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

  }),
  mounted () {
    this.scrollDom()
    this.animation()
  },
  watch: {
    '$route' (to, from) {
      this.$router.go(0)
    }
  },
  methods: {
    pro_detail (val) {
      this.$router.push({ path: `/${val}` }).catch(() => {})
    }
  }
}

</script>
<style scoped>
.content{margin-bottom: 20px;}
.news {
  display: inline-block;
  color: #fff;
  width: 84px;
  height: 32px;
  line-height: 32px;
  background: #0BB7B3;
  border-radius: 16px;
  vertical-align: middle;
  font-size: 16px;
}
.ahref {
  color: #292929;
  cursor: pointer;
}
.pro_center {
  background: #F7F7F8;
  background-position: 100% 100%;
  padding-bottom:120px
}
</style>
