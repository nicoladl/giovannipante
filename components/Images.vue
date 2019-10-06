<template>
  <img class="image" src alt />
</template>

<script>
export default {
  mounted() {
    const imagePlaceholder = document.querySelector('.image')
    const images = document.querySelectorAll('.js-image')
    images.forEach(image => {
      image.addEventListener('mouseenter', () => {
        imagePlaceholder.src = image.dataset.src
        imagePlaceholder.alt = image.dataset.alt
        imagePlaceholder.classList.add('show')

        if (image.classList.contains('js-upper')) {
          imagePlaceholder.classList.add('upper')
        }
      })

      image.addEventListener('mouseleave', () => {
        imagePlaceholder.classList.remove('show')
        imagePlaceholder.classList.remove('upper')
        imagePlaceholder.src = ''
        imagePlaceholder.alt = ''
      })
    })
  }
}
</script>
