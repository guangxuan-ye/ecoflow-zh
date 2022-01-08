<template>
  <div style="width: 70%" class="white--text">
    <div class="d-flex justify-space-around pa-8" style="border-bottom: 1px #989B9D solid">
      <div class="footer_logo">
        <router-link :to="{path: '/'}">
          <v-img
            alt="Ecoflow Logo"
            contain
            width="100"
            height="100"
            min-width="100"
            src="@/assets/img/footerLogo.png"
          />
        </router-link>
      </div>
      <div>
        <p class="footer_title font-weight-bold">深圳市正浩创新科技股份有限公司</p>
        <p class="footer_text">地址：深圳市南山区国际创新谷<span class="en_num">7</span>栋<span class="en_num">B</span>座<span class="en_num">20</span>层</p>
        <p class="footer_text">电话：<span class="en_num">0755-8666 0185</span></p>
        <p class="footer_text">邮箱： <span class="en_num">marketing.cn@ecoflow.com</span></p>
      </div>
      <div>
        <p class="footer_title font-weight-bold">关于正浩EcoFlow</p>
        <p class="footer_text">
          <router-link :to="{path: '/brandStory#about'}"><span class="hov">企业介绍</span></router-link>
        </p>
        <p class="footer_text">
          <router-link :to="{path: '/brandStory#devlop'}"><span class="hov">发展历程</span></router-link>
        </p>
        <p class="footer_text">
          <router-link :to="{path: '/brandStory#hope'}"><span class="hov">企业愿景</span></router-link>
        </p>
      </div>
      <div>
        <p class="footer_title font-weight-bold">帮助与支持<v-icon color="grey lighten-1">mid-plus</v-icon></p>
        <p class="footer_text"><router-link :to="{path: '/downloads'}"><span class="hov">下载中心</span></router-link></p>
        <p class="footer_text"><router-link :to="{path: '/pvcPolicy'}"><span class="hov">隐私政策</span></router-link></p>
        <p class="footer_text"><router-link :to="{path: '/userAgreement'}"><span class="hov">用户使用协议</span></router-link></p>
      </div>
    </div>
    <div class="d-flex justify-space-between mt-9 pb-12">
      <span class="copy" style="font-size:14px;color:#989B9D">版权所有 © 深圳市正浩创新科技股份有限公司<a href="https://beian.miit.gov.cn/"  target="_blank"  style="padding-left:10px;color:#989B9D;cursor:pointer"> 粤ICP备2020097871号</a></span>
      <div class="right">
      <v-tooltip top min-width="180" style="position: relative">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on" class="mr-10">
            <v-img
              src="@/assets/img/weixin.png"
              max-height="25"
              max-width="28"
            />
          </v-btn>
        </template>
        <div class="shape">
          <div style="background:#EBEBEB;height: 28px;line-height: 28px;">
            <span class="ml-9">官方微信公众号</span>
            <span class="inline-block float-right"><v-icon color="grey lighten-1" style="transform: rotate(45deg)">mdi-plus</v-icon></span>
          </div>
          <div class="px-4 py-1">
            <v-img
              src="@/assets/img/weixin_code.jpg"
              max-height="142"
              max-width="142"
            />
          </div>
        </div>
      </v-tooltip>
      <v-btn icon class="mr-10">
        <a href="https://weibo.com/u/7442486327">
          <v-img
            src="@/assets/img/weibo.png"
            max-height="25"
            max-width="29"
          />
        </a>
      </v-btn>
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on" class="mr-10">
            <v-img
              src="@/assets/img/douyin.png"
              max-height="25"
              max-width="22"
            />
          </v-btn>
        </template>
        <div class="shape">
          <div style="background:#EBEBEB;height: 28px;line-height: 28px;">
            <span class="ml-12">官方抖音号</span>
            <span class="inline-block float-right"><v-icon color="grey lighten-1" style="transform: rotate(45deg)">mdi-plus</v-icon></span>
          </div>
          <div class="px-4 py-1">
            <v-img
              src="@/assets/img/douyin_code.png"
              max-height="142"
              max-width="142"
            />
          </div>
        </div>
      </v-tooltip>
       <div class="countrys-wrap">
        <v-menu
          top
          :offset-y="offset"
        >
          <template v-slot:activator="{ on, attrs }">
            <span
              v-bind="attrs"
              v-on="on"
              class="country-btn"
            >
             <img src="../../assets/img/Location.svg"/> 中国
            </span>
          </template>

          <v-list class="countrys">
            <v-list-item
              class="list-item"
              v-for="(item, index) in countryList"
              :key="index"
            >
               <v-list-item-title><a :href="item.href" :alt="item.href" class="link"> {{item.title }} </a></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
       </div>
      </div>
    </div>
    <div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'aFooter',
  data: () => ({
    offset: true,
    countryList: [
      { title: '加拿大', href: 'https://ca.ecoflow.com/' },
      { title: '欧洲', href: 'https://eu.ecoflow.com/' },
      { title: '日本', href: 'https://jp.ecoflow.com/' },
      { title: '美国', href: 'https://ecoflow.com/' },
      { title: '英国', href: 'https://uk.ecoflow.com/' },
      { title: '澳大利亚', href: 'https://au.ecoflow.com/' }
    ]
  })
}
</script>

<style lang="scss" scoped>
.countrys-wrap{
   display: inline-block;
   padding-top: 6px;
  .country-btn{
    img{vertical-align:top}
  }

}
.countrys{
    background-color:#3f3b3b;
    padding: 0px 16px;
    border-radius: 5px;
    .list-item{
      border-bottom: 1px solid #605f5f;
      min-height: 45px;
      &:nth-last-child(1){border-bottom: none;}
    }
    .link{
      font-size: 14px;
      color:#e0e0e0;
      &:hover{
        color:rgb(11, 183, 179) !important;
      }
    }
} 
.footer_logo{margin-top: -6px;}
.footer_title {
  font-size: 20px;
  line-height: 77px;
  color: #D2D2D2;
}
.footer_text, .footer_text a{
  font-size: 16px;
  font-family: Gotham;
  font-weight: normal;
  line-height: 35px;
  color: #989B9D;
}
p {
  margin-bottom: 0 !important;
}
.footer_text:hover .hov {
  cursor: pointer;
  color: #fff;
}
.shape::after {
  content: '';
  width: 20px;
  height: 20px;
  background: #ffffff;
  position: absolute;
  bottom: -9px;
  left:50%;
  margin-left: -10px;
  transform: rotate(45deg);
}

</style>
