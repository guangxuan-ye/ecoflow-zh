<template>
  <v-container fluid ma-0 pa-0 class="d-flex align-center flex-column">
    <v-carousel
      hide-delimiter-background
      hide-delimiters
      :show-arrows= false
      height="auto"
      class="head_carousel"
      >
      <v-carousel-item
        src="@/assets/img/policy.jpg"
      >
      </v-carousel-item>
    </v-carousel>
    <div style="padding-bottom: 120px" class="d-flex flex-column align-center">
      <div style="width: 70%" class="mt-16">
        <div class="content en_num">
          <p class="brandTitle text-center">正浩EcoFlow官网用户隐私政策</p>
          <Content />
        </div>

      </div>
    </div>
  </v-container>
</template>

<script>
import Content from './content.vue'
export default {
  components: { Content },

}

</script>
<style scoped>
.container div.v-window {
  height: auto !important;
}
</style>
