<template>
  <div style="width: 100%; height: 100%">
    <v-tabs
      fixed-tabs
      height="84"
      slider-size="0"
      color="#38B6C4"
      v-model="activeTab"
      class="tab_menu"
    >
      <v-tab :ripple="false" :to="{ path: '/' }" style='margin-right:40px'>
        <v-img
          alt="Vuetify Name"
          contain
          width="230"
          min-width="230"
          key="0"
          src="@/assets/img/logo.png"
        />
        <v-flex transparent-body />
      </v-tab>
      <v-menu
        open-on-hover
        auto
        bottom
        offset-y
        :rounded="false"
        v-for="(item, idx) in model"
        :key="idx + 1"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-tab
            v-bind="attrs"
            v-on="on"
            class="content font-weight-bold"
            :ripple="false"
            :to="{
              path: `/${
                item.name !== 'support' ? item.name : '#'
              }`,
            }"
            @click="jumpPage(idx)"
          >
            {{ item.cont }}</v-tab
          >
        </template>

        <v-list
          v-if="item.name === 'brandStory'"
          class="text-center content en_num"
        >
          <v-list-item
            v-for="(brand, index) in brandStoryItems"
            :key="index"
            @click="childTabJump(item.name, brand.hash)"
          >
            <v-list-item-title center>{{ brand.title }}</v-list-item-title>
          </v-list-item>
        </v-list>

        <v-list
          v-if="item.name === 'productCenter'"
          class="text-center content en_num"
        >
          <v-list-item
            v-for="(pro, index) in productItems"
            :key="index"
            @click="childTabJump(item.name, pro.hash)"
          >
            <v-list-item-title>{{ pro.title }}</v-list-item-title>
          </v-list-item>
        </v-list>

        <v-list
          v-if="item.name === 'contact'"
          class="text-center content en_num"
        >
          <v-list-item
            v-for="(contact, index) in contactItems"
            :key="index"
            @click="childTabJump(item.name, contact.hash)"
          >
            <v-list-item-title>{{ contact.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-list
          v-if="item.name === 'jobs'"
          class="text-center content en_num"
        >
          <v-list-item
            v-for="(item, index) in jobslItems"
            :key="index"
            @click="childTabJump(item.name, item.hash)"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
        <!-- <v-list
          v-if="item.name === 'support'"
          class="text-center content en_num"
        >
          <v-list-item
            v-for="(support, index) in supportItems"
            :key="index"
            @click="childTabJump(item.name, support.hash)"
          >
            <v-list-item-title>{{ support.title }}</v-list-item-title>
          </v-list-item>
        </v-list> -->
      </v-menu>
      <div class="shops">
        <v-menu
          open-on-hover
          bottom
          offset-y
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              v-bind="attrs"
              v-on="on"
              style="background:rgb(11, 183, 179)!important;border-color:rgb(11, 183, 179)!important;"
            >
              商城
            </v-btn>
          </template>

          <v-list >
            <v-list-item >
             <a href="http://mtw.so/6lGwv6" target="_blank" class="links">
               <span class="shops-logo shops-jd"></span>
               <v-list-item-title>京东</v-list-item-title>
            </a>
            </v-list-item>
            <v-list-item >
             <a href="http://mtw.so/5YrSSA" target="_blank" class="links">
               <span class="shops-logo shops-tm"></span>
               <v-list-item-title>天猫</v-list-item-title>
            </a>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-tabs>
  </div>
</template>

<script>
export default {
  name: 'bar',
  data: () => ({
    model: [
      { cont: '首页', name: '' },
      { cont: '品牌故事', name: 'brandStory' },
      { cont: '产品中心', name: 'productCenter' },
      { cont: '下载中心', name: 'downloads' },
      { cont: '校园招聘', name: 'jobs' },
      { cont: '联系我们', name: 'contact' }
      // { cont: '技术支持', name: 'support' }
    ],
    items: [
      { title: '京东', link: 'http://mtw.so/6lGwv6', imgs: 'imagesw-off' },
      { title: '天猫', link: 'http://mtw.so/5YrSSA', imgs: 'images-off' }
    ],
    activeTab: 1,
    brandStoryItems: [
      { title: '关于我们', name: 'brandStory', hash: 'about' },
      { title: '发展历程', name: 'brandStory', hash: 'devlop' },
      { title: '企业愿景', name: 'brandStory', hash: 'hope' }
    ],
    productItems: [
      { title: '德 DELTA系列', name: 'productCenter', hash: 'delta' },
      { title: '睿 RIVER系列', name: 'productCenter', hash: 'river' },
      { title: '配件系列', name: 'productCenter', hash: 'fit' }
    ],
    contactItems: [
      { title: '公司地址', name: 'contact', hash: 'address' },
      { title: '常见问题', name: 'contact', hash: 'FQA' }
      // { title: '留言反馈', name: 'contact', hash: 'mess' }
    ],
    jobslItems: [
      { title: '网申通道', name: 'jobs', hash: 'school' },
      { title: '空中宣讲会', name: 'jobs', hash: 'report' }
    ]
    // supportItems: [{ title: '维修中心', name: 'support', hash: 'support' }]
  }),
  mounted () {
    const val = sessionStorage.getItem('actTab')
    if (val) {
      this.activeTab = Number(val)
    }
  },
  methods: {
    jumpPage (idx) {
      sessionStorage.setItem('actTab', idx + 1)
    },
    childTabJump (page, hash) {
      console.log(page, hash)
      if (page === 'support') {
        window.location.href = 'https://after-sales-h5.ecoflow.com'
      } else if (page === 'jobs') {
        if (hash === 'school') {
          window.open('http://campus.51job.com/ecoflow/', '_blank')
        } else {
          window.open('https://video.51job.com/watch/2567818', '_blank')
        }
      } else if (page === 'productCenter') {
        if (hash === 'fit') {
          this.$router.push({ path: '/' + page + '#' + hash })
        } else {
          this.$router.replace({ path: hash, replace: true })
        }
      } else {
        this.$router.push({ path: '/' + page + '#' + hash })
      }
    }
  }
}
</script>
<style lang="scss">
.tab_menu{
  .v-slide-group{
    min-width: 1200px;
  }
  .v-tab{width: auto!important;}
}
.shops{
  margin-left: 60px;
  line-height: 80px;
}
.v-tab:before {
  opacity: 0 !important;
}
.v-menu__content {
  /* margin-left: 8px !important; */
}
.v-application .links{ color:#666}
.v-application .links .v-list-item__title{font-size: 14px; text-align:center}
.v-application .links:hover{
 color: rgb(11, 183, 179)
}
.shops-logo{
  width: 32px;
  height: 32px;
  display: block;

}
.shops-jd{
  background: url('../../assets/img/home/imagesw-off.png');
  background-size:100% 100%
  }
.shops-tm{
  margin-top: 10px;
  background: url('../../assets/img/home/images-off.png');
  background-size:100% 100%
}
.v-application .links:hover .shops-jd{
   background: url('../../assets/img/home/imagesw.png');
    background-size:100% 100%
}
.v-application .links:hover .shops-tm{
   background: url('../../assets/img/home/images.png');
    background-size:100% 100%
}
</style>
