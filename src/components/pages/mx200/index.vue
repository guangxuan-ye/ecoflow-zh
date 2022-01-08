<template>
  <v-container fluid ma-0 pa-0>
    <div style="width: 100%" class="pb-16 d-flex align-center flex-column">
      <div style="width: 60%">
        <div class="d-flex justify-space-between bread">
          <v-breadcrumbs :items="items">
            <template v-slot:divider>
              <v-icon>mdi-chevron-right</v-icon>
            </template>
          </v-breadcrumbs>
          <span class="pra_subtitle d-block mr-0">技术参数</span>
        </div>
        <div>
          <v-row class="pro_subtitle en_title line py-16">
            <v-col :cols="3"></v-col>
            <v-col>太阳能追踪器</v-col>
          </v-row>

          <v-row class="line py-16">
            <v-col :cols="3" class="pro_subtitle zh_title">外观</v-col>
            <v-col>
                <v-img src="@/assets/img/product/200 MAX Module1.png" contain />
             </v-col>
            <v-col>
              <v-img src="@/assets/img/product/200 MAX Module.png" contain /> 
              <p class="mt-10" style="text-align:center;font-size:12px" >太阳能板为产品效果图，需另行购买搭配使用</p>
            </v-col>
            
            <v-col>
            </v-col>
          </v-row>

          <v-row class="line py-16">
            <v-col :cols="3" class="pro_subtitle zh_title">规格</v-col>
            <v-col class="pra_text content">
              <div>
                <span class="pra_subtitle d-block">重量</span><br/>
                <span class="en_num">25KG</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">最大支持太阳能板重量</span><br/>
                <span class="en_num">25KG</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">俯仰轴范围</span><br/>
                <span>0–85°</span><br/>
              </div>
                <div class="mt-10">
                <span class="pra_subtitle d-block">内置电池容量</span><br/>
                <span class="en_num">5000mAh</span><br/>
              </div>
                <div class="mt-10">
                <span class="pra_subtitle d-block">防水等级</span><br/>
                <span class="en_num">IP54</span><br/>
              </div>
            </v-col>
            <v-col class="pra_text content">
              <div>
                <span class="pra_subtitle d-block">旋转轴范围</span><br/>
                <span class="en_num">0–345°</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">尺寸</span><br/>
                <span>2.5 × 1.5 × 1.5m (最小 2.5 × 1.1 ×1.1m)</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">APP</span><br/>
                <span class="en_num">支持</span><br/>
              </div>
                <div class="mt-10">
                <span class="pra_subtitle d-block">防风等级</span><br/>
                <span class="en_num">6 级</span><br/>
              </div>
            </v-col>
          </v-row>

          <v-row class="line py-16">
            <v-col :cols="3" class="pro_subtitle zh_title">内置电池</v-col>
            <v-col class="pra_text content">
              <div class="mt-10">
                <span class="pra_subtitle d-block">电池材料</span><br/>
                <span class="en_num">三元锂电池</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">货架寿命</span><br/>
                <span class="en_num">1年(满充状态)</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">循环寿命</span><br/>
                <span class="en_num">500次循环后剩余容量仍有80%以上</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">使用温度</span><br/>
                <span class="en_num">-10°C~40°C (最佳: 25°C)</span><br/>
              </div>
              <div class="mt-10">*内置电池可以通过太阳能板充电。如果长时间未使用，可以通过控制模块后面的USBC(5-20V, 1A)接口补电。</div>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'index',
  data: () => ({
    items: [
      {
        text: '产品中心',
        disabled: false,
        to: {path:'/productCenter'}
      },
      {
        text: '配件系列',
        disabled: false,
        to: {path:'/productCenter#fit'}
      },
      {
        text: '太阳能追踪器',
        disabled: false,
        to: {path:'/max200'}
      }
    ]
  })
}

</script>
<style scoped>
.bread >>> .v-breadcrumbs li {
  font-size: 24px !important;
}
.bread >>> .v-breadcrumbs li:last-child a {
  color:#292929 !important;
}
.bread >>> .v-breadcrumbs__item{
  color: #A8A8A8 !important;
}
</style>