<template>
  <v-container fluid ma-0 pa-0 class="d-flex align-center flex-column">
    <v-carousel
      hide-delimiter-background
      hide-delimiters
      :show-arrows= false
      height="auto">
      <v-carousel-item
        src="@/assets/img/userAccount.jpg"
      >
      </v-carousel-item>
    </v-carousel>
    <div style="padding-bottom: 120px" class="d-flex flex-column align-center">
      <div style="width: 70%" class="mt-16">
        <p class="brandTitle text-center mb-10">正浩EcoFlow官网用户使用协议</p>
        <Content />

      </div>
    </div>
  </v-container>
</template>

<script>
import Content from '../UserAgreement/content.vue'
export default {
  components: { Content }

}

</script>
<style scoped>
.container div.v-window {
  height: auto !important;
}
</style>
