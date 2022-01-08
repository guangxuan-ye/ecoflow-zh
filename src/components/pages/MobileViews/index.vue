<template>
  <div class="en_num">
      <m-header />
      <router-view />
      <m-footer />
  </div>
</template>

<script>
import MFooter from './Footer.vue'
import MHeader from './Header.vue'
export default {
  name: 'index',
  components: {
    MHeader,
    MFooter
  }

}

</script>
<style>
</style>
