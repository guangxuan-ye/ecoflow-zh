<template>
  <div class="mproduct">
    <div class="productItem">
      <img @click="godetail('pro')" class="productImg" src="@/assets/img/deltaSeries/cn-ecoflow-delta-mob-category-dalta-pro.png" alt="">
      <span class="nameproduct">[新品上市]</span>
      <span class="titleproduct">德DELTA Pro</span>
      <span class="delMoreproduct" @click="godetail('pro')">了解详情 <img src="@/assets/img/deltaSeries/go.png"/></span>
    </div>
    <div class="productItem">
      <img @click="godetail('max')" class="productImg" src="@/assets/img/deltaSeries/cn-ecoflow-delta-mob-category-dalta-max.png" alt="">
<!--      <span class="nameproduct">[新品上市]</span>-->
      <span class="titleproduct">德DELTA Max</span>
      <span class="delMoreproduct" @click="godetail('max')">了解详情 <img src="@/assets/img/deltaSeries/go.png"/></span>
    </div>
    <div class="productItem">
      <img @click="godetail('1300')" class="productImg" src="@/assets/img/deltaSeries/cn-ecoflow-delta-mob-category-dalta-1300.png" alt="">
<!--      <span class="nameproduct">[新品上市]</span>-->
      <span class="titleproduct">德DELTA 1300</span>
      <span class="delMoreproduct" @click="godetail('1300')">了解详情 <img src="@/assets/img/deltaSeries/go.png"/></span>
    </div>
    <div class="productItem">
      <img @click="godetail('mini')" class="productImg" src="@/assets/img/deltaSeries/cn-ecoflow-delta-mob-category-dalta-mini.png" alt="">
      <span class="nameproduct">[新品上市]</span>
      <span class="titleproduct">德DELTA mini</span>
      <span class="delMoreproduct" @click="godetail('mini')">了解详情 <img src="@/assets/img/deltaSeries/go.png"/></span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'm_deltaproduct',
  data () {
    return {

    }
  },
  methods: {
    godetail (product) {
      switch (product) {
        case 'pro':
          this.$router.push('/m_deltaprodetail')
          break
        case 'max':
          this.$router.push('/m_deltamaxdetail')
          break
        case '1300':
          this.$router.push('/m_delta1300detail')
          break
        case 'mini':
          this.$router.push('/m_deltadetail')
          break
        default:
          this.$router.push('/m_deltaprodetail')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .mproduct{
    width:100%;
    margin-top: 110px;
    background:#f6f6f6;
    display: flex;
    flex-direction: column;
    align-items: center;
    .productItem{
      width:93%;
      box-sizing: border-box;
      background:#fff;
      /*padding:55px 62px 12px 62px;*/
      padding:55px 0 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin:10px 0;
      .productImg{
        display:block;
        /*width:57%;*/
        height:auto;
        margin-bottom: 55px;
        max-width: 100%;
      }
      .nameproduct{
        color:#2BADCC;
        font-size:12px;
        display: block;
        margin-bottom:4px;
      }
      .titleproduct{
        color:#333333;
        font-size: 30px;
        margin-bottom: 4px;
      }
      .delMoreproduct{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 13px;
        border: 1px solid #333333;
        border-radius: 14px;
        padding:2px 14px;
        cursor:pointer;
        img{
          display: inline-block;
          width: 20px;
          margin-left: 2px;
        }
      }
    }
  }
</style>
