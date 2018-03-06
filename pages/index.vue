<template>
  <div id="home">
    <div
      uk-slideshow="ratio: 7:3; max-height: 600; min-height: 390; animation: push; pause-on-hover: true; autoplay: false; autoplay-interval: 3000"
      class="uk-animation-fade uk-position-relative"
    >
      <div class="uk-visible-toggle uk-light">
        <ul class="uk-slideshow-items">
            <li id="slide1">
              <slide-img-container>
                <img
                  src="~/assets/img/index4_tn72.jpg"
                  data-src="~/assets/img/index4.jpg"
                  class="lazyload blur-up"
                  uk-cover
                  alt=""
                />
              </slide-img-container>
              <div class="uk-overlay uk-container uk-container-expand uk-position-center-left uk-text-left uk-position-large">
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
            </li>
            <li id="slide2">
              <div class="uk-position-cover img-container img-container-dark" uk-slideshow-parallax="scale: 1.2,1.2,1">
                <img
                  src="~/assets/img/index1.jpg"
                  uk-cover
                  alt=""
                />
              </div>
              <div class="uk-position-center uk-position-small uk-text-center">
                <h1 uk-slideshow-parallax="y: -50,0,0; opacity: 1,1,0">Heading1</h1>
                <div uk-slideshow-parallax="y: 50,0,0; opacity: 1,1,0">Lorem ipsum dolor sit amet.</div>
              </div>
            </li>
            <li>
              <div class="uk-position-cover img-container img-container-dark" uk-slideshow-parallax="scale: 1.2,1.2,1">
                <img src="~/assets/img/index2.jpg" alt="" uk-cover uk-height-viewport/>
              </div>
            </li>
            <li class="uk-animation-toggle">
              <slide-img-container :kenburns="true">
                <img src="~/assets/img/index3.jpg" uk-cover />
              </slide-img-container>
              <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                <h1 class="uk-margin-remove">Bottom</h1>
                <p class="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </li>
        </ul>
        <a
          class="uk-position-center-left uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-previous
          uk-slideshow-item="previous"
        />
        <a class="uk-position-center-right uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-next
          uk-slideshow-item="next"
        />
      </div>
      <ul class="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin uk-margin-small" />
    </div>
    <div class="uk-container uk-container-small">
      <h1 class="title">
        CBL Site.
      </h1>
      <nuxt-link to="/about">About</nuxt-link>
      <div>
        <div class="uk-card uk-card-default uk-card-body uk-width-1-2@m">
          <h3 class="uk-card-title">Default</h3>
          <p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="uk-card uk-card-default uk-card-body uk-width-1-2@m">
          <h3 class="uk-card-title">Default</h3>
          <p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="uk-card uk-card-default uk-card-body uk-width-1-2@m">
          <h3 class="uk-card-title">Default</h3>
          <p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="uk-card uk-card-default uk-card-body uk-width-1-2@m">
          <h3 class="uk-card-title">Default</h3>
          <p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="uk-card uk-card-default uk-card-body uk-width-1-2@m">
          <h3 class="uk-card-title">Default</h3>
          <p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="uk-card uk-card-default uk-card-body uk-width-1-2@m">
          <h3 class="uk-card-title">Default</h3>
          <p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="uk-card uk-card-default uk-card-body uk-width-1-2@m">
          <h3 class="uk-card-title">Default</h3>
          <p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SlideImgContainer from '~/components/slideImgContainer'

export default {
  components: {
    SlideImgContainer
  },
  asyncData() {
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve({ name: 'world' })
      }, 1000)
    })
  },
  head () {
    return {
      title: 'Welcome',
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>

<style scoped lang="less">
  #slide1 {
    .slide-title {
      margin-top: 0;
    }
  }
</style>
