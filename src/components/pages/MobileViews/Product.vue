<template>
  <div>
    <div id="delta" style="margin-top:110px">
      <!-- href="http://mtw.so/6eajlz" -->
      <a style="color: #fff"  @click="goproductDelta()"><v-img src="@/assets/img/mobile/delta.jpg" /></a>
    </div>
    <div id="river" class="mt-2">
      <!-- href="http://mtw.so/6tcJaj" -->
<!--      <a style="color: #fff" @click="goproductRiver()"><v-img src="@/assets/img/mobile/river.jpg" /></a>-->
      <a style="color: #fff" href="javascript:void(0);"><v-img src="@/assets/img/mobile/river.jpg" /></a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'm_product',
  methods: {
    goproductDelta () {
      this.$router.push('/m_deltaproduct')
    },
    goproductRiver () {
      this.$router.push('/m_riverproduct')
    }
  }
}

</script>
<style>
</style>
