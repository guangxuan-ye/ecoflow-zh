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
  window.sr = ScrollReveal().reveal('.scro_anima, .scro_anima_2, .scro_anima_3', { easing: 'ease-in', duration: 800, distance: '20px' })
  window.sr = ScrollReveal().reveal('.scro_anima_2', { delay: 500 })
  window.sr = ScrollReveal().reveal('.scro_anima_3', { delay: 700 })
  window.sr = ScrollReveal().reveal('.scro_anima_4', { delay: 800 })
  window.sr = ScrollReveal().reveal('.scro_anima_5', { delay: 900 })
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

