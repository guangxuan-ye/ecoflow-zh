<template>
  <div id="app" :class="mobileFont">
    <v-app>
      <page v-if="pcView" />
      <m-layout v-if="mobileView" />
    </v-app>
  </div>
</template>

<script>
import Page from './components/pages/index'
import mLayout from './components/pages/MobileViews/index'
export default {
  name: 'App',
  components: {
    Page,
    mLayout
  },

  data: () => ({
    mobileView: false,
    pcView: false,
    ios: null,
    android: null,
    mobileFont: ''
  }),
  mounted () {
    const flag = navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    )
    const path = window.location.pathname

    if (flag) {
      this.mobileView = true
      this.pcView = false
      this.mobileFont = ''
      if (path.indexOf('m_') === -1) {
        this.$router.push('/m_product')
      } else {
        this.$router.push(path)
      }
    } else {
      this.pcView = true
      this.mobileView = false

      if (path.indexOf('m_') !== -1) {
        this.$router.push('/')
      } else {
        this.$router.push(path)
      }
    }
  }
}
</script>
<style scoped>
.mobileFont {
  font-size: 3.3334vw;
}
</style>
