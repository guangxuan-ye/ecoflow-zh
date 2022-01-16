<template>
  <div>
    <v-footer
      dark
      color="#272727 lighten-1"
      class="d-flex justify-center px-6 pb-6 pt-3"
    >
      <p style="font-size: 12px; color:#878689">
        <span @click="$vuetify.goTo(0)">回到顶部</span>
        <v-icon color="#878689">mdi-chevron-up</v-icon>
      </p>
      <v-list
        dense
        flat
        color="#272727"
        width="100%"
      >
        <v-list-item-group
          v-model="group"
        >
          <v-list-item v-for="(item, index) in itemList" :key="index" :ripple="false" @click="listSelect(item.index)" style="border-bottom: 1px solid #454545;font-size: 16px">
            <v-list-item-title>{{item.title}}</v-list-item-title>
            <v-list-item-icon>
              <v-icon>mdi-chevron-right</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <div style="width:100%" class="mt-7">
        <div class="mb-2" style="font-size: 14px;">订阅我们</div>
        <div style="font-size: 12px; color:#878689">第一时间获得正浩EcoFlow的最新动态</div>
        <div class="d-flex justify-space-between mt-5" style="width:30%">
          <a href="javascript:void(0);" @click="dialog=true">
            <v-img
              src="@/assets/img/mobile/wechat.png"
              contain
              max-height="20"
              max-width="20"
            />
          </a>
          <a href="https://weibo.com/u/7442486327">
            <v-img
              src="@/assets/img/mobile/weibo.png"
              contain
              max-height="20"
              max-width="20"
            />
          </a>
          <a href="https://v.douyin.com/eRx95MY/">
            <v-img
              src="@/assets/img/mobile/douyin.png"
              contain
              max-height="20"
              max-width="20"
            />
          </a>
        </div>
        <div style="font-size: 12px; color:#878689;" class="mt-5">
          版权所有 © 深圳市正浩创新科技股份有限公司 <a href="https://beian.miit.gov.cn/"  target="_blank"  style="padding-left:10px;color:#989B9D;cursor:pointer"> 粤ICP备2020097871号</a>
        </div>
      </div>
       <v-dialog
          v-model="dialog"
          width="300"
        >
          <v-card>
            <v-card-title class="text-h5 grey lighten-2" >
             <span style="font-size:16px"> 关注我们</span>
            </v-card-title>

            <v-card-text>
             <v-img
              src="@/assets/img/weixin_code.jpg"
              contain
              max-height="258"
              max-width="258"
            />
            </v-card-text>

            <!-- <v-divider></v-divider> -->

            <v-card-actions>
              <v-spacer></v-spacer>
              <!-- <v-btn
                color="primary"
                text
                @click="dialog = false"
              >
                关闭
              </v-btn> -->
            </v-card-actions>
          </v-card>
        </v-dialog>
    </v-footer>
  </div>
</template>

<script>
import bus from '@/utils/bus.js'
export default {
  name: 'm_footer',
  data () {
    return {
      dialog: false,
      itemList: [
        {
          title: '关于正浩EcoFlow',
          index: 'm_about'
        },
        {
          title: '产品分类',
          index: 'm_product'
        },
        {
          title: '下载中心',
          index: 'm_download'
        },
        {
          title: '校园招聘',
          index: 'm_jobs'
        },
        {
          title: '空中宣讲会',
          index: 'm_speech'
        },
        {
          title: '天猫旗舰店',
          index: 'm_tm'
        },
        {
          title: '京东旗舰店',
          index: 'm_jd'
        },
        {
          title: '隐私政策',
          index: 'm_privacy-policy'
        },
        {
          title: '用户协议',
          index: 'm_userAgreement'
        }
        // {
        //   title: '维修中心',
        //   index: 'repairCenter'
        // }
      ]
    }
  },
  methods: {
    listSelect (routerName) {
      if (routerName === 'repairCenter') {
        window.location.href = 'https://after-sales-h5.ecoflow.com'
      } else if (routerName === 'm_jobs') {
        window.location.href = 'https://bit.ly/3m7uZdp'
      } else if (routerName === 'm_speech') {
        window.location.href = 'https://bit.ly/2Wk0poj'
      } else if (routerName === 'm_tm') {
        window.location.href = 'http://mtw.so/5v33K8'
      }  else if (routerName === 'm_jd') {
        window.location.href = 'http://mtw.so/5JptAg'
      } else {
        bus.$emit('changePage', routerName)
        this.goRouter(routerName)
      }
    }
  }

}

</script>
<style scoped>
</style>
