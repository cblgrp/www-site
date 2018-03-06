<template>
  <div
    :class="className"
    :uk-slideshow-parallax="parallax"
  >
    <slot/>
  </div>
</template>

<script>
  const defaultClass = "uk-position-cover img-container img-container-dark uk-animation-reverse"
  export default {
    props: {
      parallax: {
        type: String,
        default: 'scale: 1.2,1.2,1',
      },
      kenburns: {
        type: Boolean,
        default: false
      },
      initClass: {
        type: String,
        default: defaultClass
      }
    },
    data() {
      return {
        className: this.kenburns ?
              `${this.initClass} ${defaultClass} uk-animation-kenburns`
              : `${this.initClass} ${defaultClass}`
      }
    }
    // computed: {
    //   className: () => {
    //     return this.kenburns ?
    //           "uk-position-cover img-container img-container-dark uk-animation-kenburns uk-animation-reverse"
    //           : "uk-position-cover img-container img-container-dark uk-animation-reverse"
    //   }
    // }
  }
</script>
