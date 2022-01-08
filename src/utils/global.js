import Vue from 'vue'

Vue.prototype.scrollDom = function () {
  const hash = window.location.hash
  const index = hash.lastIndexOf('#')
  if (index !== -1) {
    const id = hash.substring(index + 1, hash.length + 1)
    const dom = document.getElementById(id)
    if (dom) {
      setTimeout(() => {
        dom.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        })
      }, 1000)
    }
  }
}

Vue.prototype.animation = function () {
  window.sr = window.ScrollReveal().reveal('.scro_anima, .scro_anima_2, .scro_anima_3', { easing: 'ease-in', duration: 800, distance: '20px' })
  window.sr = window.ScrollReveal().reveal('.scro_anima_2', { delay: 500 })
  window.sr = window.ScrollReveal().reveal('.scro_anima_3', { delay: 700 })
  window.sr = window.ScrollReveal().reveal('.scro_anima_4', { delay: 800 })
  window.sr = window.ScrollReveal().reveal('.scro_anima_5', { delay: 900 })
}

Vue.prototype.animationDelta = function () {
  window.sr = window.ScrollReveal().reveal('.scro_anima_delta, .scro_anima_delta_2, .scro_anima_delta_3', { easing: 'ease-in', duration: 500, distance: '20px' })
  window.sr = window.ScrollReveal().reveal('.scro_anima_delta_2', { delay: 100 })
  window.sr = window.ScrollReveal().reveal('.scro_anima_delta_3', { delay: 200 })
}
Vue.prototype.animationRiver = function () {
  window.sr = window.ScrollReveal().reveal('.scro_anima_river, .scro_anima_river_2, .scro_anima_river_3', { easing: 'ease-in', duration: 500, distance: '20px' })
  window.sr = window.ScrollReveal().reveal('.scro_anima_river_2', { delay: 100 })
  window.sr = window.ScrollReveal().reveal('.scro_anima_river_3', { delay: 200 })
}
Vue.prototype.goRouter = function (routerName) {
  if (routerName.indexOf('#') !== -1) {
    const flag = routerName.split('#')
    this.$router.push({ path: '/' + flag[0] + '#' + flag[1] })
    setTimeout(() => {
      this.scrollDom()
    }, 200)
  } else {
    this.$router.push({ name: routerName })
  }
}
