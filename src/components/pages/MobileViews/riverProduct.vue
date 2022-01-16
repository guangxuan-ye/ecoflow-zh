<template>
  <div class="mproduct">
    <div class="productItem" v-for="i in 10">
      <img  @click="godetail()" class="productImg" src="@/assets/img/riverSeries/riverLeft.png" alt="">
      <span class="nameproduct">[新品上市]</span>
      <span class="titleproduct">RIVER</span>
      <span class="delMoreproduct" @click="godetail()">了解详情 <img src="@/assets/img/deltaSeries/go.png"/></span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'm_riverproduct',
  data () {
    return {

    }
  },
  methods: {
    godetail () {
      this.$router.push('/m_riverdetail')
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
      padding:55px 62px 12px 62px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin:10px 0;
      .productImg{
        display:block;
        width:57%;
        height:auto;
        margin-bottom: 55px;
      }
      .nameproduct{
        color:#2BADCC;
        font-size:12px;
        display: block;
        margin-bottom:4px;
      }
      .titleproduct{
        color:#333333;
        font-size: 32px;
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
