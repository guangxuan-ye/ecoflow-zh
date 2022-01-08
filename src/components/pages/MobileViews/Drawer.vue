<template>
  <div>
    <v-navigation-drawer
      v-model="visible"
      bottom
      temporary
      app
      disable-route-watcher
      style="z-index: 20"
    >
    <v-list
      nav
      dense
      flat
    >
      <v-list-item-group
        v-model="group"
        active-class="text--accent-4"
      >
        <v-list-item v-for="(item, index) in itemList" :key="index" :ripple="false" @click="listSelect(item.index)">
          <v-list-item-title>{{item.title}}</v-list-item-title>
          <v-list-item-icon>
            <v-icon>mdi-chevron-right</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'Drawer',
  props: {
    drawer: {
      type: Boolean
    }
  },
  computed: {
    visible () {
      return this.drawer
    }
  },
  data () {
    return {
      itemList: [
        {
          title: '关于正浩EcoFlow',
          index: 'm_about'
        },
        {
          title: '德 DELTA系列',
          index: 'm_product#delta'
        },
        {
          title: '睿 RIVER系列',
          index: 'm_product#river'
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
          title: '联系我们',
          index: 'm_contact'
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
        window.location.href = 'http://campus.51job.com/ecoflow/'
      } else if (routerName === 'm_speech') {
        window.location.href = 'https://video.51job.com/watch/2567818'
      } else if (routerName === 'm_tm') {
        window.location.href = 'http://mtw.so/5v33K8'
      }  else if (routerName === 'm_jd') {
        window.location.href = 'http://mtw.so/5JptAg'
      }  else {
        this.$emit('changePage', routerName)
        this.goRouter(routerName)
      }
    }
  }

}

</script>
<style>
</style>
