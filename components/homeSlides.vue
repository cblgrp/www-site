<template>
  <div
    id="home-slides"
    :class="{ loader: !isLoaded }"
    class="img-container img-container-dark"
  >
    <div
      uk-slideshow="ratio: false; animation: push; pause-on-hover: true; autoplay: false; autoplay-interval: 3000"
      class="slides-container uk-visible-toggle uk-light uk-position-relative"
    >
      <ul class="uk-slideshow-items">
        <li id="slide1">
          <slide-img-container>
            <img
              src="/img/products/index4_tn72.jpg"
              data-src="/img/products/index4.jpg"
              class="lazyload blur-up"
              uk-cover
              alt=""
            />
          </slide-img-container>
          <div class="uk-position-cover uk-container uk-container-small">
            <div class="uk-position-center-left uk-position-large">
            <div uk-slideshow-parallax="scale: 1,1,0.8">
              <div
                uk-slideshow-parallax="x: 400,0,0;"
                class="uk-text-uppercase uk-text-small slide-label"
              >
                ceiling lights
              </div>
              <h1 uk-slideshow-parallax="x: 200,0,0" class="slide-title">
                Your style shining from above
              </h1>
              <button
                uk-slideshow-parallax="y: 200,0,0"
                class="uk-button btn-primary-ghost uk-text-uppercase"
              >
                check it now
              </button>
            </div>
            </div>
          </div>
        </li>
        <li id="slide2">
          <slide-img-container>
            <img
              src="/img/products/index1.jpg"
              uk-cover
              alt=""
            />
          </slide-img-container>
          <div class="uk-position-center uk-position-small uk-text-center">
            <h1 uk-slideshow-parallax="y: -50,0,0; opacity: 1,1,0">Heading1</h1>
            <div uk-slideshow-parallax="y: 50,0,0; opacity: 1,1,0">Lorem ipsum dolor sit amet.</div>
          </div>
        </li>
        <li>
          <slide-img-container>
            <img src="/img/products/index2.jpg" alt="" uk-cover />
          </slide-img-container>
        </li>
        <li class="uk-animation-toggle">
          <slide-img-container :kenburns="true">
            <img src="/img/products/index3.jpg" uk-cover />
          </slide-img-container>
          <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom uk-width-1-2@m uk-width-1-1@s uk-margin-auto">
            <h1 class="uk-margin-remove">Bottom</h1>
            <p class="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </li>
      </ul>
      <a class="uk-slidenav-large uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous" />
      <a class="uk-slidenav-large uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next" />
      <ul class="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin uk-margin-small uk-position-bottom uk-position-small" />
    </div>
  </div>
</template>

<style scoped lang="less">
  @import '../assets/style/_variants.less';

  #home-slides {
    position: relative;
    height: 70vh;
    min-height: 390px;
    .slides-container {
      height: 100%;
      ul.uk-slideshow-items {
        height: 100% !important;
      }
    }
    #slide1 {
      .slide-title {
        margin-top: 0;
      }
    }
  }
  @media (max-width: @breakpoint-small-max) {
    #home-slides {
      height: 50vh !important;
      .uk-slideshow-items {
        h1 {
          font-size: 2.2em;
        }
      }
      .uk-slidenav {
        display: none;
      }
    }
  }
</style>
<script>
  import SlideImgContainer from '~/components/slideImgContainer'

  export default {
    data () {
      return {
        isLoaded: false,
      }
    },
    components: {
      SlideImgContainer
    },
    mounted: () => {
      this.isLoaded = true;
    }
  }
</script>
