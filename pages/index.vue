<template>
  <div id="home">
    <home-slides />
    <section id="feature-section" class="index-section">
      <no-ssr>
      <div class="uk-container uk-container-medium feature-container">
        <div class="uk-grid-medium uk-child-width-expand@s uk-text-center" uk-grid>
          <div class="feature-block" uk-scrollspy="cls: uk-animation-slide-left-small; repeat: true">
            <div class="feature-img uk-margin-bottom">
              <img :src="features.energy.img" width="100" />
            </div>
            <div class="uk-text-bold uk-margin-small-bottom">
              {{features.energy.title}}
            </div>
            <div class="uk-text-muted">
              {{features.energy.desc}}
            </div>
          </div>
          <div class="feature-block feature-block-middle" uk-scrollspy="cls: uk-animation-slide-bottom-small; repeat: true">
            <div class="feature-img uk-margin-bottom">
              <img :src="features.design.img" width="100" />
            </div>
            <div class="uk-text-bold uk-margin-small-bottom">
              {{features.design.title}}
            </div>
            <div class="uk-text-muted">
              {{features.design.desc}}
            </div>
          </div>
          <div class="feature-block" uk-scrollspy="cls: uk-animation-slide-right-small; repeat: true">
            <div class="feature-img uk-margin-bottom">
              <img :src="features.quality.img" width="100" />
            </div>
            <div class="uk-text-bold uk-margin-small-bottom">
              {{features.quality.title}}
            </div>
            <div class="uk-text-muted">
              {{features.quality.desc}}
            </div>
          </div>
        </div>
      </div>
      </no-ssr>
    </section>

    <section id="best-seller-section" class="index-section" uk-parallax="bgy: -200">
      <div class="uk-container uk-container-medium best-seller-container">
        <h5 class="uk-text-muted uk-text-right uk-text-uppercase uk-text-bold">Best seller</h5>
        <no-ssr>
        <div class="uk-grid-medium uk-child-width-expand@s" uk-grid>
          <div
            v-for="item in bestSellers" :key="item.id"
            class="best-seller-block"
            uk-scrollspy="cls: uk-animation-slide-bottom-medium; repeat: true">
            <a class="uk-inline-clip uk-transition-toggle best-seller-item uk-border-rounded uk-box-shadow-small uk-box-shadow-hover-large">
              <img
                :src="item.thumb"
                :data-src="item.img"
                class="lazyload blur-up uk-transition-scale-up uk-transition-opaque"
                alt=""
              />
              <div class="uk-overlay uk-overlay-primary uk-position-bottom">
                <div class="uk-text-small uk-text-truncate">{{item.title}}</div>
                <div class="text-xs uk-text-muted">{{item.desc}}</div>
              </div>
            </a>
          </div>
        </div>
        </no-ssr>
      </div>
    </section>
    <section
      id="practices-section"
      class="index-section"
    >
    </section>
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

  #best-seller-section {
    min-height: 150px;
    background-image: url('/img/background/best-seller-circle.png');
    background-size: 25%, 25%, 25%;
    background-color: #F1F1F1;
    background-repeat: no-repeat;
    .best-seller-item {
      height: 150px;
      width: 100%;
      .uk-overlay {
        padding: 12px;
        .best-seller-title {
          font-size: 12px;
        }
      }
    }
  }

  @media (max-width: @breakpoint-small-max) {
    .feature-container {
      padding-left: 24px;
      padding-right: 24px;
    }
  }
</style>

<script>
  import axios from 'axios'

  import HomeSlides from '~/components/homeSlides'
  import SlideImgContainer from '~/components/slideImgContainer'

  export default {
    layout: 'cbl',
    async asyncData ({ params, error }) {
      const ax = axios.create({
        baseURL: process.env.baseURL
      })

      const cblFeatures = await ax.get('/data/features.json')
      const cblBestSellers = await ax.get('/data/best-sellers.json')
      return {
        features: cblFeatures.data,
        bestSellers: cblBestSellers.data,
      }
    },
    components: {
      HomeSlides,
      SlideImgContainer
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
