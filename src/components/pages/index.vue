<template>
  <div>
      <v-app-bar
        app
        color="#fff"
        dense
        centered
        flat
        class="d-flex justify-center"
        height='84'
      >
      <bar/>
      </v-app-bar>
      <v-main>
        <router-view />
      </v-main>
      <v-footer
        color="black lighten-1"
        class="d-flex justify-center"
        v-if="errorMsg"
      >
        <a-footer/>
      </v-footer>
  </div>
</template>

<script>
import Bar from '../common/Bar'
import aFooter from '../common/Footer'
import bus from '../../utils/bus'
export default {
  name: 'index',
  components: {
    Bar,
    aFooter
  },
  data: () => ({
    errorMsg: true
  }),
  watch: {
    $route (to, from) {
      if (from.name === 'error') {
        this.errorMsg = true
      }
    }
  },
  mounted () {
    bus.$on('disfooter', msg => {
      this.errorMsg = msg
    })
  }
}

</script>
<style scoped>
.v-toolbar__content {
  width: 65% !important;
}
</style>
