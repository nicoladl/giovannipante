import Vue from 'vue'
import charming from 'charming'

Vue.prototype.$charming = () => {
  console.log(charming)

  const element = document.querySelectorAll('.charming')
  element.forEach(el => {
    console.log(el)
    charming(el, {
      // prettier-ignore
      split: function (string) {
        return string.split(/(\s+)/)
      },
      // prettier-ignore
      setClassName: function (index, letter) {
        return `index-${index} letter-${letter}`
      }
    })
  })
}
