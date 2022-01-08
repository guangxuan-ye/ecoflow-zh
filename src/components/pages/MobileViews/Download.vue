<template>
  <div>
    <div style="margin-top:110px">
      <v-img src="@/assets/img/mobile/download.jpg" />
      <div style="width:100%;" class="my-16 pa-6">
        <v-row>
          <v-col :cols="3">
            <v-img src="@/assets/img/mobile/app.png" contain width="114" height="114" />
          </v-col>
          <v-col :cols="9">
            <div class="zh_title">正浩EcoFlow App</div>
            <div>正浩EcoFlow app是户外电源品牌正浩EcoFlow的智能管理平台，应用于新一代
            移动储能设备睿 RIVER全系产品及后期其他产品系列，方便用户查看状态、选项设置及远程管理设备。</div>
          </v-col>
        </v-row>
        <div class="mt-6">
          <v-btn class="mb-4" depressed elevation="0" block height="50" outlined href="https://apps.apple.com/cn/app/id1531850847">去App Store下载</v-btn>
          <v-btn depressed elevation="0" block height="50" outlined href="https://iot-ecoflow.oss-cn-shenzhen.aliyuncs.com/apk/app-release.apk">直接下载安卓APK</v-btn>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'm_download'

}

</script>
<style scoped>
.v-btn {
  text-transform: none;
}
</style>
