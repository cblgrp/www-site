<template>
  <div id="home">
    <home-slides />
    <section id="feature-section" class="index-section">
      <no-ssr>
      <div class="uk-container uk-container-medium feature-container" v-if="features">
        <div class="uk-grid-medium uk-child-width-expand@s uk-text-center" uk-grid>
          <div class="feature-block" >
            <div class="feature-img uk-margin-bottom" uk-scrollspy="cls: uk-animation-slide-top-small; repeat: true; delay: 300">
              <img :src="features.energy.img" width="100" />
            </div>
            <div uk-scrollspy="cls: uk-animation-slide-bottom-small; repeat: true;">
              <div class="uk-text-bold uk-margin-small-bottom">
                {{features.energy.title}}
              </div>
              <div class="uk-text-muted">
                {{features.energy.desc}}
              </div>
            </div>
          </div>
          <div class="feature-block feature-block-middle">
            <div class="feature-img uk-margin-bottom" uk-scrollspy="cls: uk-animation-slide-top-small; repeat: true; delay: 300">
              <img :src="features.design.img" width="100" />
            </div>
            <div uk-scrollspy="cls: uk-animation-slide-bottom-small; repeat: true;">
              <div class="uk-text-bold uk-margin-small-bottom">
                {{features.design.title}}
              </div>
              <div class="uk-text-muted">
                {{features.design.desc}}
              </div>
            </div>
          </div>
          <div class="feature-block" uk-scrollspy="cls: uk-animation-slide-right-small; repeat: true">
            <div class="feature-img uk-margin-bottom" uk-scrollspy="cls: uk-animation-slide-top-small; repeat: true; delay: 300">
              <img :src="features.quality.img" width="100" />
            </div>
            <div uk-scrollspy="cls: uk-animation-slide-bottom-small; repeat: true;">
              <div class="uk-text-bold uk-margin-small-bottom">
                {{features.quality.title}}
              </div>
              <div class="uk-text-muted">
                {{features.quality.desc}}
              </div>
            </div>
          </div>
        </div>
      </div>
      </no-ssr>
    </section>

    <best-sellers :products="products" />

    <best-practices :products="products" />
    <!-- <section
      id="practices-section"
      class="index-section"
    >
      <no-ssr>
      <div class="uk-container uk-container-medium practices-container" v-if="bestSellers && bestSellers.length > 0">
        <div class="uk-flex uk-flex-middle">
          <div class="uk-flex-1 uk-margin-right uk-flex-first">
            <hr>
          </div>
          <h5 class="uk-text-muted uk-text-uppercase uk-text-bold uk-margin-remove-top">Best Practices</h5>
        </div>

        <div
          class="uk-grid-collapse uk-child-width-expand@s uk-text-center"
          uk-grid
          uk-height-match="target: > div > .uk-cover-container"
        >
          <div class="uk-width-2-5@m">
            <div class="uk-cover-container">
                <canvas width="" height="200"></canvas>
                <img :src="bestSellers[1].thumb" alt="" uk-cover>
            </div>
          </div>
          <div class="uk-width-1-5@m">
            <div class="uk-cover-container">Item</div>
          </div>
          <div class="uk-width-2-5@m">
            <div class="uk-cover-container">Item</div>
          </div>
        </div>
      </div>
      </no-ssr>
    </section> -->
  </div>
</template>

<style scoped lang="less">
  @import '../assets/style/_variants.less';

  .index-section {
    min-height: 70px;
    padding: 32px 0;
    min-height: 230px;
  }
  .feature-block {
    padding-top: 24px;
    padding-bottom: 24px;
  }
  .feature-img {
    min-height: 100px;
  }

  @media (max-width: @breakpoint-small-max) {
    .feature-container {
      padding-left: 24px;
      padding-right: 24px;
    }
  }
</style>

<script>
  import products from '~/static/data/products.json'
  import features from '~/static/data/features.json'

  import HomeSlides from '~/components/homeSlides'
  import SlideImgContainer from '~/components/slideImgContainer'
  import BestSellers from '~/components/bestSellers'
  import BestPractices from '~/components/bestPractices'

  export default {
    layout: 'cbl',
    data () {
      return {
        features,
        products,
      }
    },
    components: {
      HomeSlides,
      SlideImgContainer,
      BestSellers,
      BestPractices
    },
    head () {
      return {
        title: 'Welcome',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'My custom description'
          }
        ]
      }
    }
  }
</script>
