<template>
  <v-container fluid ma-0 pa-0 class="d-flex align-center flex-column">
    <v-carousel
      hide-delimiter-background
      hide-delimiters
      :show-arrows="false"
      height="auto"
    >
      <v-carousel-item src="@/assets/img/contact/banner.jpg"> </v-carousel-item>
    </v-carousel>
    <div style="width:100%" class="d-flex flex-column align-center">
      <div
        id="address"
        style="width: 60%;border-bottom: 1px solid #A8A8A8;"
        class="mt-16 pb-16"
      >
        <v-row class="text-left">
          <v-col :cols="5" class="pt-16">
            <p class="pro_subtitle ch_title mb-0">企业地址</p>
            <div class="brandSubTitle">OUR ADDRESS</div>
            <div
              class="d-inline-block my-5"
              style="width: 43px;border: 2px #0BB7B3 solid"
            ></div>
            <div>
              <p class="pra_subtitle">深圳市正浩创新科技股份有限公司</p>
              <p class="content en_num">
                <img src="@/assets/img/contact/ad.jpg" contain />
                <span class="pl-2">地址：深圳市南山区国际创新谷7栋B座20层</span>
              </p>
              <p class="content en_num">
                <img src="@/assets/img/contact/phone.jpg" contain />
                <span class="pl-2"
                  >电话：<span class="en_num">0755-8666 0185</span></span
                >
              </p>
              <p class="content en_num">
                <img src="@/assets/img/contact/phone.jpg" contain />
                <span class="pl-2"
                  >服务热线：<span class="en_num">400-600-5753</span></span
                >
              </p>
              <p class="content en_num">
                <img src="@/assets/img/contact/co.jpg" contain />
                <span class="pl-2"
                  >销售代理：<span class="en_num">18002553019</span></span
                >
              </p>
              <p class="content en_num">
                <img src="@/assets/img/contact/co.jpg" contain />
                <span class="pl-2"
                  >采购合作：<span class="en_num"
                    >yongchao.li@ecoflow.com
                  </span></span
                >
              </p>
              <p class="content en_num">
                <img src="@/assets/img/contact/email.jpg" contain />
                <span class="pl-2"
                  >商务合作：<span class="en_num"
                    >marketing.cn@ecoflow.com</span
                  ></span
                >
              </p>
              <p class="content en_num">
                <img src="@/assets/img/contact/email.jpg" contain />
                <span class="pl-2"
                  >行业合作：<span class="en_num"
                    >enterprise@ecoflow.com</span
                  ></span
                >
              </p>
            </div>
          </v-col>
          <v-col :cols="7">
            <v-img src="@/assets/img/contact/map.jpg" contain />
          </v-col>
        </v-row>
      </div>
      <div id="FQA" style="width: 60%;" class="my-16 pb-16">
        <div class="develop_top text-center">
          <p class="pro_subtitle ch_title mb-0">常见问题</p>
          <div class="brandSubTitle">FAQ</div>
          <div
            class="d-inline-block mt-5"
            style="width: 43px;border: 2px #0BB7B3 solid"
          ></div>
        </div>
        <div class="mt-13">
          <v-row justify="center" class="FAQ_icon">
            <v-expansion-panels
              accordion
              flat
              hover
              :multiple="true"
              :value="expandVal"
            >
              <v-expansion-panel>
                <v-expansion-panel-header class="FAQ_title ch_title"
                  ><span class="en_num" style="flex-shrink: 0;flex-grow: 0;"
                    >正浩EcoFlow</span
                  >户外电源需要充电多久？</v-expansion-panel-header
                >
                <v-expansion-panel-content class="ans content py-5">
                  我们的X-Stream闪电快充专利技术可以让电源使用市电充电1小时充至80%，不到2小时即可充满，充电速度远超同类产品。
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel class="mt-2">
                <v-expansion-panel-header class="FAQ_title ch_title"
                  ><span class="en_num" style="flex-shrink: 0;flex-grow: 0;"
                    >正浩EcoFlow</span
                  >户外移动电源有几种充电方式？</v-expansion-panel-header
                >
                <v-expansion-panel-content class="content ans py-5">
                  我们支持四种充电方式，分别为市电充电、太阳能板充电、车充充电和油动发电机充电，德
                  DELTA
                  Max支持五种充电方式，您可以结合自己的实际场景选择不同的充电方式。
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel class="mt-2">
                <v-expansion-panel-header class="FAQ_title ch_title"
                  ><span class="en_num" style="flex-shrink: 0;flex-grow: 0;"
                    >正浩EcoFlow</span
                  >户外移动储能电源可以在那些场景下使用？</v-expansion-panel-header
                >
                <v-expansion-panel-content class="content ans py-5">
                  我们支持家庭应急、户外露营、专业作业等多种应用场景。可给手机、电脑、无人机、摄影机、车载冰箱、音箱、电钻、电锯、电动汽车等不同类型、不同电源接口的设备供电。应用场景非常丰富，可以满足您的不同用电需求。
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel class="mt-2">
                <v-expansion-panel-header class="FAQ_title ch_title"
                  ><span class="en_num" style="flex-shrink: 0;flex-grow: 0;"
                    >正浩EcoFlow</span
                  >户外电源有几种输出方式？</v-expansion-panel-header
                >
                <v-expansion-panel-content class="content ans py-5">
                  我们支持AC/DC/USB/Type-C/车充五种输出方式，所有输出端口可同时使用，互不干扰，且支持边充边用。
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel class="mt-2">
                <v-expansion-panel-header class="FAQ_title ch_title"
                  ><span
                    class="en_num"
                    style="flex-shrink: 0;flex-grow: 0;"
                  ></span
                  >机器温度高有安全风险吗？</v-expansion-panel-header
                >
                <v-expansion-panel-content class="ans content py-5">
                  一般情况下，机器一直处于满负荷的状态下使用时，温度也会随之慢慢上升，这属于正常现象。我们的产品采用了安全的BMS设计，具有高温保护功能，当机器内部温度高于我们智能BMS的监控高温就会进入高温保护状态，保障机器的安全性，您完全可以放心使用。
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel class="mt-2">
                <v-expansion-panel-header class="FAQ_title ch_title"
                  ><span
                    class="en_num"
                    style="flex-shrink: 0;flex-grow: 0;"
                  ></span
                  >快充解释</v-expansion-panel-header
                >
                <v-expansion-panel-content class="ans content py-5">
                  EcoFlow使用的是支持快充的汽车动力锂电池；我们专利X-Stream快充技术，专为户外储能电源的快速充电需求而生。市电1.6小时即可充满（单机）且无需笨重的适配器，1根充电线即可实现。EcoFlow的快充技术不仅仅是快充，更是结合了智能逆变器和智能BMS技术融为一体，不仅仅不会降低使用寿命，重量更轻，体积更小，更少的部件，故障率更低。
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel class="mt-2">
                <v-expansion-panel-header class="FAQ_title ch_title"
                  ><span
                    class="en_num"
                    style="flex-shrink: 0;flex-grow: 0;"
                  ></span
                  >X-Boost解释</v-expansion-panel-header
                >
                <v-expansion-panel-content class="ans content py-5">
                  同行其他品牌功率为600w的电源，当接入超过600w的电器时，会直接提示过载而无法使用，这时您可能要因此单独购买功率适配的电器才能用，而我们X-Boost智能逆变专利技术的特点就是能让大部分超过600w甚至高达1800w的电器能够使用，且该技术是我们的专利技术，同行其他品牌是没有的。
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel class="mt-2">
                <v-expansion-panel-header class="FAQ_title ch_title"
                  ><span
                    class="en_num"
                    style="flex-shrink: 0;flex-grow: 0;"
                  ></span
                  >边充边用</v-expansion-panel-header
                >
                <v-expansion-panel-content class="ans content py-5">
                  支持一边充电一边用电，市电边充边用时是UPS模式，此时所使用的是电网中的市电，而非电源的电（市电如果断电时则切换到电源供电）车充和太阳能充电时，当机器的电量较低或即将耗尽时，最好不要一边接太阳能/车载充电一边用电
                  ；这个时候如果输入功率小于或等于输出功率
                  ,机器会持续的耗电会导致亏电 ，最终损坏电池。
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel class="mt-2">
                <v-expansion-panel-header class="FAQ_title ch_title"
                  ><span
                    class="en_num"
                    style="flex-shrink: 0;flex-grow: 0;"
                  ></span
                  >汽车应急启动</v-expansion-panel-header
                >
                <v-expansion-panel-content class="ans content py-5">
                  我们的电源如果配上一根汽车补电线的话，是可以给汽车电池进行补电的，给汽车电池补电到可以打火启动汽车一般充10-20分钟左右，但是不支持瞬间启动的哦，如果汽车电池亏电严重，电压过低会触发电源低压保护而自动关机，这个取决于汽车电池亏电程度，不严重的手动开机重复几次可以打火启动汽车，严重的话可能无法使用。
                  <br />注意：充电的过程中一定要电瓶正负极，千万不能接错，接错会烧坏电源车充输出口。
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel class="mt-2">
                <v-expansion-panel-header class="FAQ_title ch_title"
                  ><span
                    class="en_num"
                    style="flex-shrink: 0;flex-grow: 0;"
                  ></span
                  >保养</v-expansion-panel-header
                >
                <v-expansion-panel-content class="ans content py-5">
                  1.
                  推荐在20℃至30℃的环境下使用或存储，远离水源、热源，以及其他金属物件。<br />
                  2.
                  如需长期存储，请每隔3个月充放电1次（即先将电源放电至30%，然后再充电至60%）。<br />
                  3.
                  安全起见，请勿将电源长期存储在高于45℃或者低于-10℃的环境中。<br />
                  4.
                  若使用完毕后电量低于1%，请充电至60%再存放。若在电量严重不足的情况下长时间闲置，会造成电芯不可
                  逆转的损坏，减短使用寿命。<br />
                  5.
                  若电量严重不足且闲置时间过长，电源将进入深度睡眠模式，再次使用之前需先充电才能恢复使用。
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel class="mt-2">
                <v-expansion-panel-header class="FAQ_title ch_title"
                  ><span
                    class="en_num"
                    style="flex-shrink: 0;flex-grow: 0;"
                  ></span
                  >夏季车上</v-expansion-panel-header
                >
                <v-expansion-panel-content class="ans content py-5">
                  夏季的时候电源可以放在车上，我们电源的使用温度：零下20-零上60度之间，超过这个范围电源会采取高温或者低温保护机制，进入保护状态而无法使用，待电源到适宜温度时才可使用。
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel class="mt-2">
                <v-expansion-panel-header class="FAQ_title ch_title"
                  ><span
                    class="en_num"
                    style="flex-shrink: 0;flex-grow: 0;"
                  ></span
                  >充电高温</v-expansion-panel-header
                >
                <v-expansion-panel-content class="ans content py-5">
                  RECHARGING
                  TIME图标，感叹号图标，高温图标一起闪烁：电池进入充电高温保护了，尤其是重度使用后，马上充电就会出现该现象，不用担心请等等，电池降温后自动恢复。
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel class="mt-2">
                <v-expansion-panel-header class="FAQ_title ch_title"
                  ><span
                    class="en_num"
                    style="flex-shrink: 0;flex-grow: 0;"
                  ></span
                  >放电高温</v-expansion-panel-header
                >
                <v-expansion-panel-content class="ans content py-5">
                  感叹号图标，高温图标一起闪烁，电池进入高温保护，请等等电池冷却后即可恢复供电。
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel class="mt-2">
                <v-expansion-panel-header class="FAQ_title ch_title"
                  ><span
                    class="en_num"
                    style="flex-shrink: 0;flex-grow: 0;"
                  ></span
                  >APP连接模式</v-expansion-panel-header
                >
                <v-expansion-panel-content class="ans content py-5">
                  IOT模式（连网模式）：在“EcoFlow中文版”APP上给电源配网后，电源会连接到互联网。此时不管我们身在何处，只要手机能够连接互联网，打开EcoFlow
                  App，就能对电源进行实时监测与控制。<br />
                  直连模式：在“EcoFlow中文版”APP上直接连接到电源，不需要通过连接互联网即可实时查看与控制。此种方式适合在户外没有Wi-Fi网络的环境下使用（如需升级固件或解绑设备必须配网）
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-row>
        </div>
      </div>
      <!-- <div style="width: 100%;background: #F7F7F8" class="d-flex flex-column align-center">
       <div id="mess" style="width: 60%;" class="mt-16 pb-16">
          <div class="develop_top text-center">
          <p class="pro_subtitle ch_title mb-0">留言反馈</p>
          <div class="brandSubTitle">FEEDBACK</div>
          <div class="d-inline-block my-5" style="width: 43px;border: 2px #0BB7B3 solid"></div>
        </div>
        <p class="en_num content">尊敬的用户，感谢您对正浩EcoFlow的关注和支持，一直以来，我们都非常重视每一位用户对我们产品的体验反馈。此专栏是为正浩EcoFlow产品使用者专门准备的留言通道，您可以通过此通道留下对我们产品的体验感受和需求建议。我们会及时采纳您的意见并改进，正浩EcoFlow真诚期待您的分享！</p>
        <div class="pa-16 text-center">
          <v-form
            ref="feedForm"
            :class="suCSub"
            v-model="valid"
            lazy-validation
          >
            <v-row class="text-left">
              <v-col>
                <p>姓名</p>
                <v-text-field
                  v-model="name"
                  solo
                  outlined
                  flat
                  height="48"
                  color="rgba(0,0,0,.7)"
                ></v-text-field>
              </v-col>
              <v-col>
                <p>联系方式</p>
                <v-text-field
                  v-model="contact"
                  solo
                  outlined
                  flat
                  height="48"
                  color="rgba(0,0,0,.7)"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row class="text-left">
              <v-col>
                <p>描述</p>
                <v-textarea
                  label="请描述您的具体问题或建议"
                  v-model="describe"
                  :rules="describeText"
                  outlined
                  flat
                  solo
                  color="rgba(0,0,0,.7)"
                ></v-textarea>
              </v-col>
            </v-row>

            <v-btn
              :disabled="!valid"
              dark
              :ripple="false"
              depressed
              class="mr-4"
              width="100"
              @click="submit"
            >
              提交
            </v-btn>
          </v-form>
        </div>
        <div class="pa-16 mb-16 text-center" v-if="suCSub !== ''">
          <p class="content scro_anima_3">恭喜您，提交成功！</p>
          <div class="pa-16 text-center"></div>
        </div>
       </div>
      </div> -->
    </div>
    <v-snackbar v-model="snackbar" :timeout="timeout">
      {{ errText }}

      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  name: 'index',
  mounted() {
    this.scrollDom()
  },
  watch: {
    $route(to, from) {
      this.$router.go(0)
    },
  },
  data: () => ({
    valid: true,
    suCSub: '',
    name: '',
    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    describeText: [(v) => !!v || '请填写您的建议'],
    contact: '',
    describe: '',
    feedBack: {
      msgtype: 'text',
      text: {
        content: '',
      },
    },
    expandVal: [0, 1, 2, 3],
    snackbar: false,
    timeout: 2000,
    errText: '',
  }),
  methods: {
    submit() {
      if (this.$refs.feedForm.validate()) {
        this.valid = false
        // 代理url，将Access-Control-Allow-Origin标头添加到响应中
        const proxyurl = 'https://cors-anywhere.herokuapp.com/'
        // axios.post(proxyurl + 'https://oapi.dingtalk.com/robot/send?access_token=38e80031e205c9e16793053d0a2c0f5961908ccd94eb686baa1caffd0f505cd7', this.feedBack)
        const dataObj = {
          username: this.name,
          contact: this.contact,
          descriptions: this.describe,
        }
        const obj = {
          ActionName: 'CreateBizObject',
          SchemaCode: 'D00178217c29e19ecac4bc0a462d500648407c4',
          IsSubmit: true,
          BizObject: JSON.stringify(dataObj),
        }
        axios({
          method: 'post',
          url: proxyurl + 'https://www.h3yun.com/OpenApi/Invoke',
          data: obj,
          headers: {
            'Content-Type': 'application/json',
            EngineCode: 'vkzjqq0e2ce9x6c62cd2htbl4',
            EngineSecret:
              'Mj0vNS2LEsYIVkDStZeZ2rkJ8xADrGv1APEUFhNoZe5hSidmhFb6KA==',
          },
        })
          .then((res) => {
            this.suCSub = 'suCSub'
          })
          .catch((err) => {
            this.snackbar = true
            this.errText = err
          })
      }
    },
  },
}
</script>
<style scoped>
.brandSubTitle {
  font-size: 23px;
  font-family: gotham-light;
  color: #a8a8a8;
}
.FAQ_icon >>> .v-icon {
  position: absolute;
  left: 0;
  top: 12px;
  transform: rotate(-90deg);
}
.FAQ_icon >>> .v-expansion-panel--active .v-icon {
  top: 15px;
  transform: rotate(0deg) !important;
}
/* :nth-child(2n+1) */
.FAQ_icon >>> .v-expansion-panel {
  background: #f7f7f8 !important;
}
.FAQ_title {
  font-size: 18px;
  color: #292929;
  font-weight: bold;
}
.ans {
  background: #ffffff;
}
.v-expansion-panel--active > .v-expansion-panel-header {
  min-height: auto !important;
}
.suCSub {
  display: none;
}
</style>
