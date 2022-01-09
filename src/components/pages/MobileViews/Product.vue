<template>
  <div>
    <div id="delta" style="margin-top:110px">
      <!-- href="http://mtw.so/6eajlz" -->
      <a style="color: #fff"  @click="goproduct()"><v-img src="@/assets/img/mobile/delta.jpg" /></a>
    </div>
    <div id="river" class="mt-2">
      <a style="color: #fff" href="http://mtw.so/6tcJaj"><v-img src="@/assets/img/mobile/river.jpg" /></a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'm_product',
  methods: {
    goproduct () {
      this.$router.push('/m_deltaproduct')
    }
  }
}

</script>
<style>
</style>
