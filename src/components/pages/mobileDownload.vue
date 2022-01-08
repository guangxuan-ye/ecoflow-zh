<template>
  <div>
    <v-card
      class="mx-auto"
    >
      <v-container>
        <v-row dense>
          <v-col
            v-for="(item, i) in items"
            :key="i"
            cols="12"
          >
            <v-card
              v-if="item.operator"
              :color="item.color"
              dark
            >
              <div class="download-card">
                <div>
                  <v-card-title
                    class="headline"
                    v-html="item.title"
                  ></v-card-title>
                  <v-card-subtitle v-text="item.artist"></v-card-subtitle>
                  <v-card-actions>
                    <v-btn><a :href="item.src" style="color: #fff">下载最新版App</a></v-btn>
                  </v-card-actions>
                </div>

                <v-avatar
                  style="margin: 16px"
                  size="125"
                  tile
                >
                  <v-img :src="item.img[0]" contain></v-img>
                </v-avatar>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-card
              color="#385F73"
              dark
            >
              <v-card-title class="headline">正浩EcoFlow天猫旗舰店</v-card-title>

              <v-card-subtitle class="sub-text">不论是户外自驾出游、户外作业、还是应急救援，正浩EcoFlow这个便捷式“户外移动电站”都能轻松满足您在多种情况下的用电需求，让户外精彩不断！</v-card-subtitle>

              <v-card-actions>
                <v-btn @click="goMall">去购买</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-card
              color="#385F73"
              dark
            >
              <v-card-title class="headline">正浩EcoFlow京东旗舰店</v-card-title>

              <v-card-subtitle class="sub-text">睿 RIVER系列采用前所未有的模块化设置，用户可安装扩容电池包，使睿 RIVER的容量翻倍，但依然便携和灵活。同时X-Boost智能逆变技术最高可驱动1800W大功率设备，扩大了睿 RIVER系列的使用范围，为更高 ...</v-card-subtitle>

              <v-card-actions>
                <v-btn ><a style="color: #fff" href="https://shop.m.jd.com/?shopId=10258534">去购买</a></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
let that
export default {
  name: 'mobileDownload',
  props: {
    android: {
      type: Boolean
    },
    ios: {
      type: Boolean
    }
  },
  data () {
    return {
      items: [
        {
          color: 'rgba(0, 0, 0, .9)',
          img: [require('../../assets/img/download/ios.png')],
          src: 'https://itunes.apple.com/in/app/apple-store/1531850847',
          title: '正浩EcoFlow IOS APP下载',
          artist: 'Power your life',
          operator: this.ios
        },
        {
          color: 'rgba(0, 0, 0, .9)',
          img: [require('../../assets/img/download/android.png')],
          src: 'https://iot-ecoflow.oss-cn-shenzhen.aliyuncs.com/apk/app-release.apk',
          title: '正浩EcoFlow Android APP下载',
          artist: 'Power your life',
          operator: this.android
        }
      ],
      downloader: null
    }
  },
  beforeCreate () {
    that = this
  },
  mounted () {
    document.addEventListener('visibilitychange webkitvisibilitychange', function () {
      // 如果页面隐藏，推测打开scheme成功，清除定时任务
      if (document.hidden || document.webkitHidden) {
        clearTimeout(that.downloader)
      }
    })
    window.addEventListener('pagehide', function () {
      clearTimeout(that.downloader)
    })
  },
  methods: {
    goMall () {
      window.location.href = 'taobao://ecoflow.tmall.com/?spm=a220o.1000855.1997427721.d4918089.3c0c4464vlSVAo'
      this.downloader = setTimeout(function () {
        window.location.href = 'https://ecoflow.tmall.com/?spm=a220o.1000855.1997427721.d4918089.3c0c4464vlSVAo'
      }, 3000)
    }
  }
}
</script>

<style scoped>
.download-card {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.sub-text {
  font-size: 12px;
  margin-top: 5px !important;
}
.headline {
  word-spacing: 0%;
  word-break: unset;
}
</style>
