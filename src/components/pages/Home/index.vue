<template>
  <v-container fluid ma-0 pa-0 class="d-flex align-center flex-column">
    <v-carousel
      hide-delimiter-background
      show-arrows-on-hover
      delimiter-icon="mdi-minus"
      interval="6000"
      transition="slide-y-reverse-transition"
      reverse-transition="scale-transition"
      style="height:640px"
      cycle>
      <v-carousel-item
        v-for="(item,idx) in items"
        :key="idx"
        :src="item.src[0]"
        :href="item.link"
        class="carouselItem"
      >
      </v-carousel-item>
    </v-carousel>
    <div style="padding-bottom: 120px;width:100%" class="text-center d-flex flex-column align-center">
      <div style="width: 80%" class="mt-16">
          <v-row class="text-center">
            <v-col>
              <p class="font-weight-bold mb-6 theme_title">
               多场景应用 探索无限可能
              </p>
              <div class="d-inline-block mb-6" style="width: 50px;border: 2px #0BB7B3 solid"></div>
              <div class="d-flex  justify-center">
                <v-card
                  class="scro_anima border mx-3"
                  max-width="344"
                  outlined
                  v-for="(item, index) in scenes"
                  :key="index"
                >
                  <v-img
                    :src='item.src[0]'
                    class="my-3"
                    width="auto"
                    height="auto"
                  />
                  <p class="pro_subtitle ch_title mt-6">{{item.title}}</p>
                  <p class="des mt-3">{{item.content}}<br />{{item.text}}</p>
                </v-card>
              </div>
            </v-col>
          </v-row>
      </div>
      <div style="width: 80%" class="mt-16">
        <v-row class="text-center">
          <v-col>
            <h2 class="font-weight-bold mb-6 theme_title">
              哪款户外移动电源适合你
            </h2>
            <div class="d-inline-block mb-6" style="width: 50px;border: 2px #0BB7B3 solid"></div>
            <!-- 产品展示 -->
            <div class="d-flex justify-center flex-wrap">
              <!-- 德系列 -->
              <v-card
                class="scro_anima text-left py-6 mr-6 border rounded-sm"
                style="background: #F7F7F8"
                width="48%"
                outlined
              >
                <!-- 标题 -->
                <div class="pa-6">
                  <span class="des ch_title">大功率移动储能电站</span>
                  <p class="pro_subtitle mt-n2 mb-6">德 DELTA 系列</p>
                </div>
                <!-- 产品 -->
                <div class="pa-6 d-flex align-center" style="width: 100%">
                  <!-- 左 -->
                  <div class="d-flex flex-wrap justify-space-between" style="width: 50%">
                    <div v-for="(item,idx) in delta" :key="idx" style="width: 50%" class="en_title cla_text text-center mx-auto mb-6">
                      <v-img
                        :src='item.src[0]'
                        contain
                        max-width="62"
                        height="62"
                        class="mx-auto mb-2"
                      />
                      <span style="display:inline-block" class="mb-2">{{item.text}}</span><br/>
                      <span>{{item.subText}}</span>
                    </div>
                  </div>
                  <!-- 右 -->
                  <div class="product" style="width: 50%">
                    <v-img
                      src='@/assets/img/home/delta.png'
                      contain
                      class="item"
                    />
                  </div>
                </div>
                <!-- 了解更多 -->
                <div class="pl-6">
                  <router-link :to="{path: '/deltaproduct'}">
                    <span class="ch_title d-block h6 black--text text--lighten-1 mt-8">了解更多 &gt;</span>
                  </router-link>
                </div>
              </v-card>
              <!-- 睿系列 -->
              <v-card
                class="scro_anima_2 text-left py-6 border rounded-sm"
                style="background: #F7F7F8"
                width="48%"
                outlined
              >
                <!-- 标题 -->
                <div class="pa-6">
                  <span class="des ch_title">便携式智能户外电源</span>
                  <p class="pro_subtitle mt-n2 mb-6">睿 RIVER 系列</p>
                </div>
                <!-- 产品 -->
                <div class="pa-6  d-flex align-center" style="width: 100%">
                  <!-- 左 -->
                  <div  class="d-flex flex-wrap justify-space-between" style="width: 50%">
                    <div v-for="(item,idx) in river" :key="idx" style="width: 50%" class="en_title cla_text text-center mx-auto mb-6">
                      <v-img
                        :src='item.src[0]'
                        contain
                        max-width="62"
                        height="62"
                        class="mx-auto mb-2"
                        />
                        <span style="display:inline-block" class="mb-2">{{item.text}}</span><br/>
                        <span>{{item.subText}}</span>
                    </div>
                  </div>
                  <!-- 右 -->
                  <div class="product" style="width: 50%">
                    <v-img
                      src='@/assets/img/home/river600.png'
                      class="item"
                      contain
                    />
                  </div>
                </div>
                <!-- 了解更多 -->
                <div class="pl-6">
                  <router-link :to="{path: '/riverproduct'}">
                    <span  class="ch_title d-block h6 black--text text--lighten-1 mt-8">了解更多 &gt;</span>
                  </router-link>
                </div>
              </v-card>
              <!-- 太阳能板系列 -->
              <v-card
                class="scro_anima_3 mx-auto d-flex flex-row align-center mt-6 border text-left py-6"
                style="background: #F7F7F8"
                width="98%"
                outlined
              >
                <div class="pa-6" style="width: 48%">
                    <span class="des ch_title">户外折叠便携充电装备</span>
                    <p class="pro_subtitle mt-n2 mb-6">太阳能板系列</p>

                    <div class="d-flex flex-wrap justify-space-evenly">
                      <div v-for="(item,idx) in panels" :key="idx" style="width: 20%" class="en_title cla_text text-center mb-6">
                        <v-img
                          :src='item.src[0]'
                          contain
                          max-width="62"
                          height="62"
                          class="mx-auto mb-2"
                        />
                        <span style="display:inline-block">{{item.text}}</span>
                      </div>
                    </div>
                    <router-link :to="{path: '/productCenter#fit'}">
                      <span class="ch_title d-block h6 black--text text--lighten-1 mt-8">了解更多 &gt;</span>
                    </router-link>
                </div>
                <div class="product"  style="width: 52%">
                  <v-img
                    src='@/assets/img/home/panels.png'
                    class="my-3 item"
                    contain
                  />
                </div>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Content',
  metaInfo: {
    title: '正浩EcoFlow官网',
    meta: [
      {
        name: 'keywords',
        content: '正浩EcoFlow'
      },
      {
        vmid: 'description',
        name: 'description',
        content: '深圳市正浩创新科技股份有限公司(正浩EcoFlow)成立于2017年，总部位于深圳，在欧洲、日本、北美设有市场、销售及售后分部，是一家专注于储能产品的研发销售的国家高新企业。'
      }
    ]
  },
  mounted () {
    this.animation()
  },
  data: () => ({
    items: [
      {
        src: [require('@/assets/img/home/banner.jpg')],
        link: 'https://cn.ecoflow.com/delta'
      },
      {
        src: [require('@/assets/img/home/banner0.jpg')],
        link: 'https://cn.ecoflow.com/river'
      },
      // {
      //   src: [require('@/assets/img/home/banner1.jpg')]
      // },
      {
        src: [require('@/assets/img/home/banner2.jpg')],
        link: 'https://cn.ecoflow.com/delta'
      },
      {
        src: [require('@/assets/img/home/banner3.jpg')],
        link: 'https://cn.ecoflow.com/delta'
      }
    ],
    delta: [
      {
        src: [require('@/assets/img/home/1260power.png')],
        text: '超大储电容量',
        subText: '882-12960Wh'
      },
      {
        src: [require('@/assets/img/home/xBoost.png')],
        text: '额定功率',
        subText: '1400-3600W'
      },
      {
        src: [require('@/assets/img/home/chPower.png')],
        text: '0-80%充电时间',
        subText: '最快仅需1小时'
      },
      {
        src: [require('@/assets/img/home/acout.png')],
        text: '输出端口',
        subText: '9-14个'
      }
    ],
    river: [
      {
        src: [require('@/assets/img/home/1260power.png')],
        text: '超大储电容量',
        subText: '210-1440Wh'
      },
      {
        src: [require('@/assets/img/home/xBoost.png')],
        text: '额定功率',
        subText: '300-600W'
      },
      {
        src: [require('@/assets/img/home/chPower.png')],
        text: '0-80%充电时间',
        subText: '最快仅需1小时'
      },
      {
        src: [require('@/assets/img/home/acout.png')],
        text: '输出端口',
        subText: '7-9个'
      }
    ],
    panels: [
      {
        src: [require('@/assets/img/home/foldable.png')],
        text: '可折叠'
      },
      {
        src: [require('@/assets/img/home/effi.png')],
        text: '高效转化'
      },
      {
        src: [require('@/assets/img/home/waterproof.png')],
        text: '防潮防水'
      },
      {
        src: [require('@/assets/img/home/portable.png')],
        text: '便携收纳'
      }
    ],
    scenes: [
      {
        src: [require('@/assets/img/home/items_home.png')],
        title: '家庭应急',
        content: '停电期间可作为应急电源',
        text: '轻松应对多种紧急情况'
      },
      {
        src: [require('@/assets/img/home/items_outdoor.png')],
        title: '户外旅行',
        content: '轻松解决自驾出游多种设备供电问题',
        text: '让户外旅行放心无忧'
      },
      {
        src: [require('@/assets/img/home/items_pro.png')],
        title: '专业作业',
        content: '工业级需求也能轻松满足',
        text: '在户外也能方便作业'
      }
    ]
  })
}
</script>
<style scope>
  .v-carousel__item.v-image {
    width: 100% !important;
    height: 100% !important;
  }

  /* .v-carousel__item.v-image .v-image__image {
    background-position: 100% 100% !important;
    background-origin: content-box;
    background-size: 100% 100%;
  } */
 /* .container div.v-window {
    height: 700px !important;
  } */
  .border {
    border: none !important;
  }
  a{
    text-decoration: none !important;
  }
  .des {
    font-size: 20px;
    color: #5D5D5D;
  }
  .theme_title {
    font-size: 45px;
    color: #292929;
  }
  .v-btn--active:before {
    opacity: 0 !important;
  }
  .cla_text {
    color: #919191;
    font-size: 18px;
    line-height: 20px;
  }

</style>
