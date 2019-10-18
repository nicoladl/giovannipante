<template>
  <img class="image nomobile" src alt />
</template>

<script>
export default {
  mounted() {
    const imagePlaceholder = document.querySelector('.image')
    const images = document.querySelectorAll('.js-image')
    images.forEach(image => {
      image.addEventListener('mouseenter', () => {
        // clean everything
        imagePlaceholder.src = ''
        imagePlaceholder.alt = ''
        imagePlaceholder.src = image.dataset.src
        imagePlaceholder.alt = image.dataset.alt
        imagePlaceholder.classList.add('show')

        if (image.classList.contains('js-upper')) {
          imagePlaceholder.classList.add('upper')
        }

        if (image.classList.contains('js-upper')) {
          image.classList.remove('outline')
        } else {
          image.querySelector('span.outline').classList.remove('outline')
        }
      })

      image.addEventListener('mouseleave', () => {
        imagePlaceholder.classList.remove('show')
        imagePlaceholder.classList.remove('upper')

        if (image.classList.contains('js-upper')) {
          image.classList.add('outline')
        } else {
          image.querySelector('span').classList.add('outline')
        }
      })
    })
  }
}
</script>
