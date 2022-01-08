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
            <v-col>60W太阳能板</v-col>
          </v-row>

          <v-row class="line py-16">
            <v-col :cols="3" class="pro_subtitle zh_title">外观</v-col>
            <v-col>
              <v-img src="@/assets/img/params/60.jpg" contain />
            </v-col>
            <v-col>
            </v-col>
          </v-row>

          <v-row class="line py-16">
            <v-col :cols="3" class="pro_subtitle zh_title">常规</v-col>
            <v-col class="pra_text content">
              <div>
                <span class="pra_subtitle d-block">额定功率</span><br/>
                <span class="en_num">60W(+/-5)</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">开路电压</span><br/>
                <span><span class="en_num">21.7V</span>（带载电压18.2V）</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">短路电流</span><br/>
                <span><span class="en_num">3.5A</span>（带载电流3.3A）</span><br/>
              </div>
            </v-col>
            <v-col class="pra_text content">
              <div>
                <span class="pra_subtitle d-block">效率</span><br/>
                <span class="en_num">21%-22%</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">电池类型</span><br/>
                <span><span class="en_num">21.7V</span>单晶硅</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">防水等级</span><br/>
                <span class="en_num">IP67</span><br/>
              </div>
            </v-col>
          </v-row>

          <v-row class="line py-16">
            <v-col :cols="3" class="pro_subtitle zh_title">输出端口</v-col>
            <v-col class="pra_text content">
              <div>
                <span class="pra_subtitle d-block">MC4太阳能端口至XT60</span><br/>
                <span><span class="en_num">80V</span>（最大）,<span class="en_num">10A</span>（最大）</span><br/>
              </div>
            </v-col>
          </v-row>

          <v-row class="line py-16">
            <v-col :cols="3" class="pro_subtitle zh_title">尺寸和重量</v-col>
            <v-col class="pra_text content">
              <div>
                <span class="pra_subtitle d-block">展开尺寸</span><br/>
                <span class="en_num">81.5x53.7x2.0cm</span><br/>
              </div>
              <div class="mt-10">
                <span class="pra_subtitle d-block">折叠尺寸</span><br/>
                <span class="en_num">42x53.7x2.0cm</span><br/>
              </div>
            </v-col>
            <v-col class="pra_text content">
              <div class="mt-10">
                <span class="pra_subtitle d-block">重量</span><br/>
                <span class="en_num">2kg</span><br/>
              </div>
            </v-col>
          </v-row>

          <v-row class="py-16">
            <v-col :cols="3" class="pro_subtitle zh_title">测试和认证</v-col>
            <v-col>
              <v-img src="@/assets/img/params/other.png" contain />
            </v-col>
            <v-col></v-col>
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
        text: '60W太阳能板',
        disabled: false,
        to: {path:'/60panels'}
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