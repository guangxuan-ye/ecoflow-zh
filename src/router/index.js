import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 解决重复点击导航路由报错
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    // {
    //   path: '/',
    //   redirect: '/'
    // },
    {
      path: '/',
      component: () =>
        import('../components/pages/Home/index.vue')
    },
    {
      path: '/brandStory',
      component: () =>
        import('../components/pages/BrandStory/index.vue')
    },
    {
      path: '/productCenter',
      component: () =>
        import('../components/pages/ProductCenter/index.vue')
    },
    {
      path: '/downloads',
      component: () =>
        import('../components/pages/download/index.vue')
    },
    {
      path: '/contact',
      component: () =>
        import('../components/pages/contact/index.vue')
    },
    {
      path: '/deltaproduct',
      component: () =>
        import('../components/pages/deltaSeries/index.vue')
    },
    {
      path: '/deltadetail',
      component: () =>
        import('../components/pages/deltaDetail/detailIndex.vue')
    },
    {
      path: '/deltaminidetail',
      component: () =>
        import('../components/pages/deltaDetail/detailIndex.vue')
    },
    {
      path: '/deltaprodetail',
      component: () =>
        import('../components/pages/deltaDetail/detailDeltaProIndex.vue')
    },
    {
      path: '/delta1300detail',
      component: () =>
        import('../components/pages/deltaDetail/detailDelta1300Index.vue')
    },
    {
      path: '/deltamaxdetail',
      component: () =>
        import('../components/pages/deltaDetail/detailDeltaMaxIndex.vue')
    },
    {
      path: '/river', // river系列参数
      component: () =>
        import('../components/pages/river/index.vue')
    },
    {
      path: '/riverproduct',
      component: () =>
        import('../components/pages/riverSeries/index.vue')
    },
    {
      path: '/riverdetail',
      component: () =>
        import('../components/pages/deltaDetail/detailriver.vue')
    },
    {
      path: '/delta', // DELTA系列参数
      component: () =>
        import('../components/pages/Delta/index.vue')
    },
    {
      path: '/mx200', // 110太阳板参数
      component: () =>
        import('../components/pages/mx200/index.vue')
    },
    {
      path: '/110panels', // 110太阳板参数
      component: () =>
        import('../components/pages/110/index.vue')
    },
    {
      path: '/60panels', // 60太阳板参数
      component: () =>
        import('../components/pages/60/index.vue')
    },
    {
      path: '/powerpackage', // 加电包参数
      component: () =>
        import('../components/pages/PowerPackage/index.vue')
    },
    {
      path: '/pvcPolicy', // 隐私政策
      component: () =>
        import('../components/pages/PvcPolicy/index.vue')
    },
    {
      path: '/userAgreement', // 用户协议
      component: () =>
        import('../components/pages/UserAgreement/index.vue')
    },
    {
      path: '/error', // 404
      name: 'error',
      component: () =>
        import('../components/pages/Error.vue')
    },
    {
      path: '*',
      redirect: { name: 'error', params: { msg: false } }
    },
    // 移动端页面
    {
      path: '/m_about', // 关于
      name: 'm_about',
      component: () =>
        import('../components/pages/MobileViews/About.vue')
    },
    {
      path: '/m_product', // 产品
      name: 'm_product',
      component: () =>
        import('../components/pages/MobileViews/Product.vue')
    },
    {
      path: '/m_deltaproduct',
      name: 'm_deltaproduct',
      component: () =>
        import('../components/pages/MobileViews/deltaProduct.vue')
    },
    {
      path: '/m_riverproduct',
      name: 'm_riverproduct',
      component: () =>
        import('../components/pages/MobileViews/riverProduct.vue')
    },
    {
      path: '/m_deltadetail',
      component: () =>
        import('../components/pages/MobileViews/detailproductDelta.vue')
    },
    {
      path: '/m_deltaprodetail',
      component: () =>
        import('../components/pages/MobileViews/detailproductDeltaPro.vue')
    },
    {
      path: '/m_delta1300detail',
      component: () =>
        import('../components/pages/MobileViews/detailproductDelta1300.vue')
    },
    {
      path: '/m_deltamaxdetail',
      component: () =>
        import('../components/pages/MobileViews/detailproductDeltaMax.vue')
    },
    {
      path: '/m_riverdetail',
      component: () =>
        import('../components/pages/MobileViews/detailproductRiver.vue')
    },
    {
      path: '/m_contact', // 联系
      name: 'm_contact',
      component: () =>
        import('../components/pages/MobileViews/Contact.vue')
    },
    {
      path: '/m_download', // 下载
      name: 'm_download',
      component: () =>
        import('../components/pages/MobileViews/Download.vue')
    }, {
      path: '/m_privacy-policy', // 隐私政策
      name: 'm_privacy-policy',
      component: () =>
        import('../components/pages/MobileViews/Policy.vue')
    },
    {
      path: '/m_userAgreement', // 用户协议
      name: 'm_userAgreement',
      component: () =>
        import('../components/pages/MobileViews/UserAgreement.vue')
    }
  ]
})
router.afterEach((to, from, next) => {
  setTimeout(() => {
    (function () {
      const hm = document.createElement('script')
      hm.src = 'https://hm.baidu.com/hm.js?53c2437940de276f851f11fc80a5fe7c'
      const s = document.getElementsByTagName('script')[0]
      s.parentNode.insertBefore(hm, s)
    })()
  }, 0)
})
export default router
