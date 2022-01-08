<template>
  <div class="ch_title">
    <v-img
      style="position: fixed; z-index: 10"
      hetght="52px"
      src="@/assets/img/mobile/header.png"
    />
    <v-app-bar
      color="#fff"
      dark
      flat
      fixed
      app
      class="appBar mt-13"
      :hide-on-scroll="false"
    >
      <v-toolbar-title class="third_title">{{ title }}</v-toolbar-title>
      <v-app-bar-nav-icon
        @click="openDrawer"
        color="#434343"
        class="float-right"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <drawer :drawer="drawer" @changePage="(val) => changePage(val, 'drawer')" />
  </div>
</template>

<script>
import bus from '@/utils/bus.js'
import Drawer from './Drawer.vue'
export default {
  name: 'index',
  components: {
    Drawer
  },
  data () {
    return {
      drawer: false,
      title: '我们的产品'
    }
  },
  mounted () {
    bus.$on('changePage', (msg) => {
      this.changePage(msg)
    })
  },
  watch: {
    $route (to, from) {
      this.changePage(to.name)
    }
  },
  methods: {
    openDrawer () {
      this.drawer = false
      setTimeout(() => {
        this.drawer = true
      }, 200)
    },
    changePage (msg, type) {
      switch (msg) {
        case 'm_about':
          this.title = '关于正浩EcoFlow'
          break
        case 'm_download':
          this.title = '下载中心'
          break
        case 'm_contact':
          this.title = '联系我们'
          break
        case 'm_privacy-policy':
          this.title = '隐私政策'
          break
        case 'm_userAgreement':
          this.title = '用户协议'
          break
        default:
          this.title = '我们的产品'
          break
      }
      if (type === 'drawer') {
        this.drawer = false
      }
    }
  }
}
</script>
<style scoped>
.appBar >>> .v-toolbar__content {
  display: flex !important;
  justify-content: space-between !important;
}
</style>
