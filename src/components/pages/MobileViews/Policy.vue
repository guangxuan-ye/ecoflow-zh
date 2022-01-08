<template>
  <div>
    <div style="margin-top:110px">
      <!-- <v-img src="@/assets/img/policy.jpg" /> -->
      <div class="mt-16 pb-6">
         <div class="text-left pa-4">
            <p class="zh_title mb-0 text-center">正浩EcoFlow官网用户隐私政策</p>
            <Content />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Content from '../PvcPolicy/content.vue'
export default {
  components: { Content },
  name: 'm_privacy-policy'

}

</script>
<style>
</style>