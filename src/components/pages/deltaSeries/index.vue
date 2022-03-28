<template>
  <div class="deltaSeries d-flex justify-center">
    <div class="deltaContain">
      <!-- 展示1 -->
      <v-card
        class="scro_anima_delta delNew d-flex justify-space-between"
        outlined
      >
        <!-- left -->
        <div class="delproLeft d-flex justify-space-between">
          <v-img
            src='@/assets/img/deltaSeries/cn-ecoflow-delta-category-dalta-pro.png'
            height="150"
            max-width="220"
            contain
            class="item"
          >
          </v-img>
          <div class="leftInfoMsg ml-6">
            <span class="newproduct mb-1">[新品上市]</span>
            <span class="delname mb-1">德DELTA Pro</span>
            <span class="deldescribe mb-4">德 DELTA Pro户外电源，具备3600Wh超大容量，更可连接两个额外的加电包扩展至10800Wh；3600W超高额定功率，兼容绝大部分常用电器。可充当家庭备用储能电源，亦可在应急抢险救援中提供充沛电力。适用户外露营、车载自驾游、应急储备、移动储能用电，以及休闲大型娱乐行业应用供电。</span>
            <span class="delMore" @click="godetail('pro')">了解详情 <img src="@/assets/img/deltaSeries/go.png"/></span>
          </div>
        </div>
        <!-- right -->
        <div class="delproRight">
          <v-img
            src='@/assets/img/deltaSeries/cn-ecoflow-delta-category-dalta-pro-scenes.jpg'
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
          class="delBig scro_anima_delta_2"
          outlined>
          <v-img
            src='@/assets/img/deltaSeries/cn-ecoflow-delta-category-dalta-max.png'
            height="205"
            max-width="300"
            contain
            class="item mb-6"
          >
          </v-img>
          <span style="font-size:24px">德DELTA Max</span>
          <span style="font-size:18px;cursor:pointer" class="mb-6" @click="godetail('max')">了解详情</span>
        </v-card>
        <v-card
          class="delBig scro_anima_delta_2"
          outlined>
          <v-img
            src='@/assets/img/deltaSeries/cn-ecoflow-delta-category-dalta-1300.png'
            height="205"
            max-width="300"
            contain
            class="item mb-6"
          >
          </v-img>
          <span style="font-size:24px">德DELTA 1300</span>
          <span style="font-size:18px;cursor:pointer" class="mb-6" @click="godetail('1300')">了解详情</span>
        </v-card>
      </div>
      <!-- 展示三 -->
      <v-card
        class="scro_anima_delta_3 delNew d-flex justify-space-between"
        outlined
      >
        <!-- left -->
        <div class="delproLeft d-flex justify-space-between">
          <v-img
            src='@/assets/img/deltaSeries/cn-ecoflow-delta-category-dalta-mini.png'
            height="150"
            max-width="220"
            contain
            class="item"
          >
          </v-img>
          <div class="leftInfoMsg ml-6">
            <span class="newproduct mb-1">[新品上市]</span>
            <span class="delname mb-1">德DELTA mini</span>
            <span class="deldescribe mb-4">德 DELTA mini 是可轻易搬动的便携储能电源。小小身躯，最高能驱动2200W设备，满足日常用电的基本需求。可充当家庭备用应急电源，亦可作为户外移动电源使用。适用户外露营车载自驾游应急储备用电。</span>
            <span class="delMore" @click="godetail('mini')">了解详情 <img src="@/assets/img/deltaSeries/go.png"/></span>
          </div>
        </div>
        <!-- right -->
        <div class="delproRight">
          <v-img
            src='@/assets/img/deltaSeries/cn-ecoflow-delta-category-dalta-mini-scenes.jpg'
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
    this.animationDelta()
  },
  methods: {
    godetail (product) {
      switch (product) {
        case 'pro':
          var templink = this.$router.resolve({ path: '/deltaprodetail' })
          break;
        case 'max':
          var templink = this.$router.resolve({ path: '/deltamaxdetail' })
          break;
        case '1300':
          var templink = this.$router.resolve({ path: '/delta1300detail' })
          break;
        case 'mini':
          var templink = this.$router.resolve({ path: '/deltadetail' })
          break;
        default:
          var templink = this.$router.resolve({ path: '/deltaprodetail' })
      }
      // const templink = this.$router.resolve({ path: '/deltaprodetail' })
      window.open(templink.href, '_blank')
    }
  }
}
</script>
<style lang="scss" scoped>
  .deltaSeries{
    width:100%;
    height: auto;
    padding:30px 0 100px 0;
    background:#f6f6f6;
    min-width:1000px;
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
              cursor:pointer;
              img{
                display: inline-block;
                width: 20px;
              }
            }
          }
        }
        .delproRight{
          width:45%;
          overflow: hidden;
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
