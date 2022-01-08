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
            <v-col>睿 RIVER MAX 加电包</v-col>
          </v-row>

          <v-row class="line py-16">
            <v-col :cols="3" class="pro_subtitle zh_title">外观</v-col>
            <v-col>
              <v-img src="@/assets/img/params/600 MAX Module.jpg" contain />
            </v-col>
            <v-col>
            </v-col>
          </v-row>

          <v-row class="line py-16">
            <v-col :cols="3" class="pro_subtitle zh_title">容量</v-col>
            <v-col class="pra_text en_num">
              288Wh<br/>
              (80,000mAh)
            </v-col>
          </v-row>

          <v-row class="line py-16">
            <v-col :cols="3" class="pro_subtitle zh_title">电池</v-col>
            <v-col class="pra_text content">
              <div>
                <span class="pra_subtitle d-block">电芯类型</span><br/>
                <span>高倍率汽车级动力车芯（<span class="en_num">18650</span>锂电池）</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">放电温度</span><br/>
                <span class="en_num">-20-60℃ +/-3℃</span><br/>
              </div>
            </v-col>
            <v-col class="pra_text content">
              <div>
                <span class="pra_subtitle d-block">充电温度</span><br/>
                <span class="en_num">0-45℃ +/-3℃</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">循环寿命</span><br/>
                <span><span class="en_num">500+</span>次循环<span class="en_num">(80%)</span></span><br/>
              </div>
            </v-col>
          </v-row>

          <v-row class="py-16">
            <v-col :cols="3" class="pro_subtitle zh_title">尺寸和重量</v-col>
            <v-col class="pra_text content">
              <div>
                <span class="pra_subtitle d-block">尺寸</span><br/>
                <span class="en_num">28.5x18x5.9cm</span><br/>
              </div>
            </v-col>
            <v-col class="pra_text content">
              <div>
                <span class="pra_subtitle d-block">重量</span><br/>
                <span class="en_num">2.5kg</span><br/>
              </div>
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
        to: { path: '/productCenter' }
      },
      {
        text: '配件系列',
        disabled: false,
        to: { path: '/productCenter#fit' }
      },
      {
        text: '睿 RIVER MAX 加电包',
        disabled: false,
        to: { path: '/powerpackage' }
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
