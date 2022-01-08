<template>
  <div class="deltaSeries d-flex justify-center">
    <div class="deltaContain">
      <!-- 展示1 -->
      <v-card
        class="delNew d-flex justify-space-between"
        outlined
      >
        <!-- left -->
        <div class="delproLeft d-flex justify-space-between">
          <v-img
            src='@/assets/img/deltaSeries/delproLeft.png'
            height="150"
            max-width="220"
            contain
            class="item"
          >
          </v-img>
          <div class="leftInfoMsg ml-6">
            <span class="newproduct mb-1">[新品上市]</span>
            <span class="delname mb-1">德 DELTA Pro</span>
            <span class="deldescribe mb-4">【核心快充技术】真快充1.6小时充满，不伤电池。高效版升级不加价，巨容量更持久，多输出接口，纯正弦波，8重安全防护，适用户外露营车载自驾游应急储能用电</span>
            <span class="delMore">了解详情 <img src="@/assets/img/deltaSeries/go.png"/></span>
          </div>
        </div>
        <!-- right -->
        <div class="delproRight">
          <v-img
            src='@/assets/img/deltaSeries/delproRight.png'
            height="300"
            max-width="450"
            contain
            class="item"
          />
        </div>
      </v-card>
      <!-- 展示二 -->
      <div class="d-flex justify-space-between mt-10 mb-10">
        <v-card
          class="delBig"
          outlined>
          <v-img
            src='@/assets/img/deltaSeries/delbig.png'
            height="205"
            max-width="300"
            contain
            class="item mb-6"
          >
          </v-img>
          <span style="font-size:24px">德 DELTA</span>
          <span style="font-size:18px" class="mb-6">了解详情</span>
        </v-card>
        <v-card
          class="delBig"
          outlined>
          <v-img
            src='@/assets/img/deltaSeries/delbig.png'
            height="205"
            max-width="300"
            contain
            class="item mb-6"
          >
          </v-img>
          <span style="font-size:24px">德 DELTA</span>
          <span style="font-size:18px" class="mb-6">了解详情</span>
        </v-card>
      </div>
      <!-- 展示三 -->
      <v-card
        class="delNew d-flex justify-space-between"
        outlined
      >
        <!-- left -->
        <div class="delproLeft d-flex justify-space-between">
          <v-img
            src='@/assets/img/deltaSeries/delproLeft.png'
            height="150"
            max-width="220"
            contain
            class="item"
          >
          </v-img>
          <div class="leftInfoMsg ml-6">
            <span class="newproduct mb-1">[新品上市]</span>
            <span class="delname mb-1">德 DELTA Pro</span>
            <span class="deldescribe mb-4">【核心快充技术】真快充1.6小时充满，不伤电池。高效版升级不加价，巨容量更持久，多输出接口，纯正弦波，8重安全防护，适用户外露营车载自驾游应急储能用电</span>
            <span class="delMore">了解详情 <img src="@/assets/img/deltaSeries/go.png"/></span>
          </div>
        </div>
        <!-- right -->
        <div class="delproRight">
          <v-img
            src='@/assets/img/deltaSeries/delproRight.png'
            height="300"
            max-width="450"
            contain
            class="item"
          />
        </div>
      </v-card>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DeltaSeries',
  data () {
    return {
      msg: 'delta'
    }
  },
  mounted () {
    this.animation()
  }
}
</script>
<style lang="scss" scoped>
  .deltaSeries{
    width:100%;
    height: auto;
    padding:30px 0 100px 0;
    background:#f6f6f6;
    .deltaContain{
      width:80%;
      .delNew{
        width:100%;
        height: 300px;
        background: #fff;
        .delproLeft{
          width:55%;
          padding:70px 0 0 40px;
          box-sizing: border-box;
          .leftInfoMsg{
            span{
              display: block;
            }
            .newproduct{
              color:#2BADCC;
              font-size: 12px;
            }
            .delname{
              font-size: 24px;
              color:#333333
            }
            .deldescribe{
              font-size: 10px;
              color:#ABABAB
            }
            .delMore{
              display: inline-block;
              font-size: 12px;
              border: 1px solid #333333;
              border-radius: 14px;
              padding:2px 12px;
              img{
                display: inline-block;
                width: 20px;
              }
            }
          }
        }
        .delproRight{
          width:45%;
          display: flex;
          justify-content: flex-end;
        }
      }
      .delBig{
        width:48%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top:60px;
      }
    }
  }
</style>
