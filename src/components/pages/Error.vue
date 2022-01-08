<template>
  <div class="wrap">
    <div class="errorMsg text-center">
      <v-img
        src='@/assets/img/404.png'
        contain
      />
      <p class="content">您访问的页面不存在</p>
    </div>

  </div>
</template>

<script>
import bus from '../../utils/bus'
export default {
  name: 'error',
  data () {
    return {
    }
  },
  mounted () {
    const msg = this.$route.params.msg
    bus.$emit('disfooter', msg)
  }
}

</script>
<style scoped>
.wrap {
  width: 100%;
  height: calc(100% - 84px)
}
.errorMsg {
  width: 300px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.content {
  color: #38B6C4;
}
</style>
