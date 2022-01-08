<template>
  <v-container fluid ma-0 pa-0 class="d-flex align-center flex-column" style="padding-bottom: 120px">
    <v-carousel
      hide-delimiter-background
      hide-delimiters
      :show-arrows= false
      height="auto">
      <v-carousel-item
        src="@/assets/img/brandStory/banner.jpg"
      >
        <v-sheet
          color="transparent"
          height="100%"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="display-3 text-center">
              <span class="scro_anima_2 banTitle ch_title"><span class="en_num">正浩EcoFlow</span></span><br>
              <span class="scro_anima_3 subtitle ch_title">注力未来</span>
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <div  class="d-flex flex-column align-center">
      <div style="width: 70%" class="mt-16">
        <v-row id="about" class="text-left">
          <v-col :cols="4" class="scro_anima">
            <p class="brandTitle en_title ma-0"><span style="font-family: Source Han Sans CN">关于</span>正浩EcoFlow</p>
            <div class="brandSubTitle">ABOUT ECOFLOW Inc.</div>
            <div class="d-inline-block mt-5" style="width: 43px;border: 2px #0BB7B3 solid"></div>
          </v-col>
          <v-col :cols="8" class="content" style="font-family: 'Roboto';">
            <div class="scro_anima">正浩EcoFlow，创立于2017年，是一家专注于移动储能和清洁能源领域的国家高新技术企业。</div>
            <div class="scro_anima_2 mt-12">我们以“注力未来”为愿景，在储能技术领域不断创新和突破，致力于打造全球移动储能第一品牌，为世界提供清洁普惠的用电方式。 </div>
            <div class="scro_anima mt-12">正浩EcoFlow作为移动储能与清洁能源技术的全球行业领跑者，围绕各种典型用电需求推出两大产品系列：睿 RIVER和德 DELTA，全面覆盖家庭应急、户外旅行、专业作业等多个应用场景。业内独创的X-Stream闪电快充专利技术，可在1小时内安全快充至80%，为全球用户提供值得信赖的便携能源解决方案。2021年，正浩EcoFlow自主研发推出全球首款可扩展容量的全能移动电站——德 DELTA  Pro，一经发布便荣登Kickstarter全球科技类第一名，成为全球用户的信赖之选。</div>
          </v-col>
        </v-row>
        <v-row class="scro_anima_2 mt-16">
          <v-col :cols="12">
            <img
              src="@/assets/img/brandStory/devSpre.jpg"
              contain
              width="100%"
              height="auto" />
          </v-col>
        </v-row>
      </div>
      <div id="devlop" class="develop pt-16 d-flex align-center flex-column">
        <div class="develop_top text-center">
          <p class="scro_anima brandTitle">我们的发展历程</p>
          <div class="scro_anima_2 brandSubTitle">OUR CORPORATE HISTORY</div>
          <div class="scro_anima_3 d-inline-block mt-5" style="width: 43px;border: 2px #0BB7B3 solid"></div>
        </div>
        <div style="width: 60%;position: relative" class="scro_anima_3 mt-14">
          <v-tabs vertical color='#38B6C4' background-color="transparent" class="dev_time" height="400">
            <v-tab
              active-class="activeTab en_title"
              :ripple="false"
              v-for="(item, idx) in years"
              :key="idx"
              >
              {{item.year}}
            </v-tab>
            <v-tab-item class="">
              <p class="dev_title en_title">
                2021
              </p>
              <p class="dev_subtitle">
                • <span class="en_num">2021年3月，正浩EcoFlow携手中国绿化基金会“百万森林”计划，为中国沙漠化治理贡献力量。</span>
              </p>
              <p class="dev_subtitle">
                • <span class="en_num">2021年5月，正浩EcoFlow成为国内公正客观的盖得排行榜，新增的户外电源类目中，品牌推荐榜第一位。</span>
              </p>
              <p class="dev_subtitle">
                • <span class="en_num">2021年6月，正浩EcoFlowB轮融资金额超1亿美金，本轮融资由红杉资本中国基金领投，高瓴创投、中金公司联合跟投，融资后，正浩EcoFlow估值10亿美元。</span>
              </p>
              <p class="dev_subtitle">
                • <span class="en_num">2021年6月，正浩EcoFlow在618大促活动中，获得天猫户外电源品类，销量和销售额双冠军。</span>
              </p>
              <p class="dev_subtitle">
                • <span class="en_num">2021年6月，正浩EcoFlow发布发布德 DELTA Max户外电源，实现更大容量、更快充电效率、更好的安全性和更爽的用电过程等多方面重要升级。</span>
              </p>
              <p class="dev_subtitle">
                • <span class="en_num">2021年7月，正浩EcoFlow在郑州水灾期间火速驰援郑州，向当地多家医院捐赠便携储能电源，帮助解决电力紧缺。</span>
              </p>
              <p class="dev_subtitle">
                • <span class="en_num">2021年8月，正浩EcoFlow登上央视财经频道，和天猫一起通过央视，为大众解读了新兴品类移动户外电源。</span>
              </p>
              <p class="dev_subtitle">
                • <span class="en_num">2021年9月，正浩EcoFlow新品德 DELTA Pro & Max众筹超1200万美元，成为Kickstarter亚洲首个破千万美金的众筹项目，跻身全球科技类项目Top1，全品类最热门产品Top6。</span>
              </p>
              <p class="dev_subtitle">
                • <span class="en_num">2021年9月，正浩EcoFlow发布发布德 DELTA mini户外电源，集便携与专业于一身的产品设计，突破“小身材”局限。</span>
              </p>
               <p class="dev_subtitle">
                • <span class="en_num">2021年11月，正浩EcoFlow储能电源德 DELTA Pro入选《时代》杂志评选的Time Best Inventions 2021。该奖项旨在表彰以创新方式解决用户痛点的产品、软件、服务和让世界变得更美好、更智能甚至更有趣的发明。</span>
              </p>
            </v-tab-item>
            <v-tab-item class="">
              <p class="dev_title en_title">
                2020
              </p>
              <p class="dev_subtitle">
                • <span class="en_num">2020.Q1<span v-html="blank" />正浩EcoFlow在疫情期驰援武汉，向武昌方舱医院捐赠价值140万的户外移动电源。</span>
              </p>
              <p class="dev_subtitle">
                • <span class="en_num">2020.Q2<span v-html="blank" />2020年5月12日，正浩EcoFlow R600户外移动电源全球众筹首发，45天超过3000位用户支持，售出200万美元。</span>
              </p>
              <p class="dev_subtitle">
                • <span class="en_num">2020.Q4<span v-html="blank" />在日本知名众筹网站Makuake销售超过5亿日元，刷新了Makuake历史销量榜首。</span>
              </p>
              <p class="dev_subtitle">
                • <span class="en_num">2020年5月，正浩EcoFlow初登国内市场，就获得了高度关注和广泛赞誉，仅半年时间，就跻身天猫“户外电源”类目TOP商家。</span>
              </p>
            </v-tab-item>
            <v-tab-item>
              <p class="dev_title en_title">
                2019
              </p>
              <p class="dev_subtitle">
                • <span class="en_num">2019.Q1 <span v-html="blank" /> 睿 RIVER 、睿 RIVER Bank、Solar panel 均获得IF设计大奖、红点设计大奖。</span>
              </p>
              <p class="dev_subtitle">
                • <span class="en_num">2019.Q2 <span v-html="blank" /> 正浩EcoFlow在环球资源展会亮相，并再获数千万A轮融资。</span>
              </p>
              <p class="dev_subtitle">
                • <span class="en_num">2019.Q3 <span v-html="blank" /> 正浩EcoFlow DELTA在Kickstarter48天售出280万美金，在全球项目中排名第85位，亚洲前五。</span>
              </p>
              <p class="dev_subtitle">
                • <span class="en_num">2019.Q4 <span v-html="blank" /> 正浩EcoFlow在日本知众筹网站Makuake销售2.8亿日元，位居Makuake历史销量榜首。</span>
              </p>
            </v-tab-item>
            <v-tab-item>
              <p class="dev_title en_title">
              2018
              </p>
              <p class="dev_subtitle">
                • <span class="en_num">2018.Q1 <span v-html="blank" /> 正浩EcoFlow获得3000万元 Pre-A轮融资,德联资本春珈资产联合投资。</span>
              </p>
              <p class="dev_subtitle">
                • <span class="en_num">2018.Q2 <span v-html="blank" /> 正浩EcoFlow获得创新中国Demo China 全国总冠军。</span>
              </p>
              <p class="dev_subtitle">
                • <span class="en_num">2018.Q3 <span v-html="blank" /> 正浩EcoFlow获得第5届宝安创新创业大赛行业赛冠军。</span>
              </p>
              <p class="dev_subtitle">
                • <span class="en_num">2018.Q4 <span v-html="blank" /> 正浩EcoFlow获得前海粤港澳大湾区创新创业大赛总决赛冠军。</span>
              </p>
            </v-tab-item>
            <v-tab-item>
              <p class="dev_title en_title">
              2017
              </p>
              <p class="dev_subtitle">
                • <span class="en_num">2017.Q1 <span v-html="blank" /> 睿 RIVER亮相CES国际消费电子展。</span>
              </p>
              <p class="dev_subtitle">
                • <span class="en_num">2017.Q2 <span v-html="blank" /> 睿 RIVER在 Indiegogo发布并获108万美元预购金。</span>
              </p>
              <p class="dev_subtitle">
                • <span class="en_num">2017.Q3 <span v-html="blank" /> 睿 RIVER首次出货，在The Home Depot Camping World 线下门店和线上商场发售。</span>
              </p>
            </v-tab-item>
          </v-tabs>
        </div>
      </div>
      <div class="honor mt-12 pt-16 text-center d-flex align-center flex-column">
        <div class="develop_top">
          <p class="scro_anima brandTitle">我们的荣誉与资质</p>
          <div class="scro_anima_2 brandSubTitle">OUR HONOR & PATENT</div>
          <div class="scro_anima_3 d-inline-block mt-5" style="width: 43px;border: 2px #0BB7B3 solid"></div>
        </div>
        <div class="mt-16">
          <img class="scro_anima_2" src="@/assets/img/brandStory/certificate.png"/><br />
          <img class="scro_anima_3" src="@/assets/img/brandStory/tooltip.png" />
        </div>
        <div style="width: 70%;" class="pt-7 pb-16">
          <v-row>
            <v-col :cols="7" cla ss="honor_cer ch_title d-flex flex-column justify-center">
              <div class="scro_anima">
                <span class="honor_num en_title">268</span><span style="font-size: 28px; font-weight: bold">项</span><br/>
                <span>总专利数</span>
              </div>
            </v-col>
            <v-col :cols="4" class="text-left honor_cer ch_title">
              <div class="scro_anima_2">
                <span  class="honor_num en_title">100</span><span style="font-size: 28px; font-weight: bold">项</span><br/>
                <span>已授权专利</span>
              </div>
              <!-- <div v-for="(item, idx) in items" :key="idx" class="mt-4 scro_anima_2">
                {{item.pro}}<span class="honor_num en_title" style="font-size: 24px">X{{item.num}}</span>
                <v-progress-linear
                  class="pro"
                  width="90%"
                  height="24"
                  rounded
                  stream
                  background-color="rgba(83,235,231,.25)"
                  color="#2BC7C3"
                  :value="item.num"
                ></v-progress-linear>
              </div> -->
            </v-col>
          </v-row>
          <!-- <div class="scro_anima_3 pt-16">总计逾<span class="honor_num en_title" style="font-size: 40px">50</span>项专利，构建涵盖移动储能产品全方位的专利池。</div> -->
        </div>
      </div>
      <div id="hope" style="width: 70%" class="mt-16">
        <!-- <v-row class="text-left">
          <v-col :cols="6" class="content">
            <p class="scro_anima brandTitle">我们的发展愿景</p>
            <div class="scro_anima_2 brandSubTitle">OUR MISSION</div>
            <div class="scro_anima_3 d-inline-block mt-5 mb-16" style="width: 43px;border: 2px #0BB7B3 solid"></div>
            <div class="scro_anima_3"><span class="en_num">正浩EcoFlow</span>致力于为全球用户提供清洁普惠的用电方式。</div>
            <div class="mt-8 scro_anima_3"><span class="en_num">正浩EcoFlow</span>通过持续的技术研发和产品创新，打造清洁储能电站，为用户带去更友好 的用电体验，加速清洁能源在全球范围的普及。</div>
            <div class="scro_anima_3 mt-8">目前，公司已布局针对娱乐、家庭和工作储能的<span class="en_num">EF Life,EF Home,EF Work</span>三条产品线，并成功推出
            <span class="en_num">睿 RIVER370、睿 RIVER BANK、睿 RIVER</span>系列、<span class="en_num">DELTA</span>系列，深受媒体和用户好评。</div>
          </v-col>
          <v-col :cols="6" class="scro_anima_3 pl-12">
            <img
              src="@/assets/img/brandStory/vision.png"
              contain
              width="100%"
              height="auto" />
          </v-col>
        </v-row> -->
      </div>
        <div id="hope" style="width: 70%" class="mt-16">
        <v-row class="text-left">
          <v-col :cols="4" class="content">
            <p class="scro_anima brandTitle">英文名称变更通知</p>
            <div class="scro_anima_2 brandSubTitle">CHANGE OF ENGLISH NAME<br> OF THE COMPANY </div>
          </v-col>
          <v-col :cols="7" class="scro_anima_3 pl-12">
           <div  style="line-height: 32px;color: #464646;font-size:18px">
             为开展涉外业务，统一公司英文名称，深圳市正浩创新科技股份有限公司现将公司直译英文名称“Shenzhen EcoFlow Technology Limited”变更为“EcoFlow Inc.”。变更时间为2021年12月8日。 </div>
           <div class="mt-5  mb-16" style="line-height: 32px;color: #464646;font-size:18px">The management of the company is pleased to announce that the English name of the Company has been changed from “Shenzhen EcoFlow Technology Limited” to “EcoFlow Inc.” with effect from 8 December 2021 and the Chinese name “深圳市正浩创新科技股份有限公司” is remained unchanged.
           </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'index',
  data: () => ({
    blank: '&emsp;',
    items: [
      {
        pro: '充放电管理',
        num: '21'
      },
      {
        pro: '外观设计',
        num: '50'
      },
      {
        pro: '逆变器管理',
        num: '18'
      },
      {
        pro: '储能系统管理',
        num: '12'
      },
      {
        pro: '供电设备结构',
        num: '67'
      },
      {
        pro: '电池热管理',
        num: '9'
      }
    ],
    years: [
      {
        year: '2021'
      },
      {
        year: '2020'
      },
      {
        year: '2019'
      },
      {
        year: '2018'
      },
      {
        year: '2017'
      }
    ]
  }),
  mounted () {
    this.scrollDom()
    this.animation()
  },
  watch: {
    '$route' (to, from) {
      this.$router.go(0)
    }
  }
}

</script>
<style scoped>
.banTitle {
  font-size: 45px;
  font-weight: bold;
  color: #FFFFFF;
}
.subtitle {
  font-size: 24px;
  font-weight: 500;
  color: #FFFFFF;
}
.brandSubTitle {
  font-size: 23px;
  font-family: gotham-light;
  color: #A8A8A8;
}
.develop {
  width: 100%;
  min-height: 753px;
  max-height: auto;
  background: url('../../../assets/img/brandStory/develop.jpg') no-repeat;
  background-size: 100% 100%;
}
.honor {
  width: 100%;
  background: url('../../../assets/img/brandStory/background.jpg') no-repeat;
  background-size: 100% 100%;
}
.honor_cer {
  color: #2B2B2B;
  font-size: 20px;
}
.honor_num {
  font-weight: bold;
  color: #2BC7C3;
  font-size: 55px;
}
.pro >>> .v-progress-linear__background {
  left: 0 !important;
  width: 100% !important;
}
.pro >>> .v-progress-linear__determinate {
  border-radius: 12px !important;
}
.v-tab:before {
  opacity: 0 !important;
}
.dev_time >>> .theme--light.v-tabs-items {
  background-color: transparent !important;
}
.dev_time >>> .v-slide-group {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 100;
}
.dev_time >>> .v-tabs-slider-wrapper{
  left: unset !important;
  right: 0;
}
.dev_title {
  font-size: 80px;
  font-weight: bold;
  color: #5A5858;
}
.dev_subtitle {
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
  color: #464646;
  white-space: normal;
  max-width: 86%;
}
.activeTab {
  font-weight: bold;
  color: #0BB7B3;
  font-size: 24px;
  line-height: 80px;
}
</style>
