<template>
  <section id="best-practice-section" class="index-section">
    <div class="uk-container uk-container-medium best-practice-container">
      <div class="uk-flex uk-flex-middle">
        <div class="uk-flex-1 uk-margin-right uk-flex-first">
          <hr>
        </div>
        <h5 class="uk-text-muted uk-text-uppercase uk-text-bold uk-margin-remove-top">Best Practices</h5>
      </div>
      <div>
        <p class="uk-text-bold uk-text-small uk-text-primary uk-margin-remove-bottom" style="color: white; font-size: 1.1em">
          <span class="first-number">4</span> LAYERS OF LIGHT
        </p>
        <p class="uk-margin-remove-top">
          There are four layers of light typically used in residential lighting:
          general or ambient lighting, task lighting, accent lighting,
          and decorative lighting. Combining and balancing these lighting types gives
          visual interest to the space and creates a more attractive,
          exiting and inviting environment.
        </p>
      </div>
    </div>
    <div
      class="uk-container uk-container-medium best-practice-container"
      v-if="bestPractices && bestPractices.length > 0"
    >
      <div class="best-practice-list uk-grid-small" uk-grid-parallax="translate: 50">
        <div
          v-for="(item, index) in bestPractices" :key="item.id"
          class="best-practice-item uk-transition-toggle uk-width-1-2@s uk-width-1-4@m"
        >
          <div :class="`uk-card uk-card-default uk-card-body best-practice-content-${index}`">
            <div class="item-image-container">
              <div class="uk-cover-container" style="height: 300px;">
                <img
                  :src="item.title_thumb"
                  :data-src="item.title_img"
                  class="lazyload blur-up uk-transition-scale-up uk-transition-opaque"
                  alt=""
                  uk-cover
                />
              </div>
              <div class="uk-overlay-primary-gradient uk-position-cover"></div>
              <div class="uk-overlay uk-position-top" style="color: #FFFFFF">
                <div class="uk-text-bold uk-text-truncate uk-text-uppercase">{{item.title}}</div>
              </div>
            </div>
            <div class="uk-text-muted uk-text-small" style="padding: 15px 15px 20px;">
              {{ item.brief }}
              <hr class="uk-margin-small-top" />
              <div class="uk-text-right">
                <a href="" class="uk-icon-link uk-icon-arrow-right-circle" uk-icon="arrow-right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="less">
  @import '../assets/style/_variants.less';

  #best-practice-section {
    .best-practice-item {
      .uk-card-body {
        padding: 3px 0 0;
        border-top: 1px solid @line-color;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
      }
      .item-image-container {
        position: relative;
        overflow: hidden;
      }
      // a {
      //   height: 200px;
      // }
      img {
        // left: -50%;
        // top: -50%;
        width: 100%;
      }
      .uk-overlay {
        padding: 12px;
      }
      [class*='best-practice-content'] {
        border-bottom-width: 5px;
        border-bottom-style: solid;
        border-top-width: 1px;
        border-top-style: solid;
      }
      .best-practice-content-0 {
        border-bottom-color: @logo-red;
        border-top-color: @logo-red;
      }
      .best-practice-content-1 {
        border-bottom-color: @primary-color;
        border-top-color: @primary-color;
      }
      .best-practice-content-2 {
        border-bottom-color: @logo-blue;
        border-top-color: @logo-blue;
      }
      .best-practice-content-3 {
        border-bottom-color: @logo-text;
        border-top-color: @logo-text;
      }
    }
    .uk-transition-toggle {
      .uk-transition-scale-up {
        // inherited from .uk-transition-scale-up
        transform: translate(-50%, -50%) scale3d(1, 1, 1);
      }
      &:hover {
        .uk-transition-scale-up {
          transform: translate(-50%, -50%) scale3d(1.1, 1.1, 1);
        }
      }
    }
  }

  @media (max-width: @breakpoint-small-max) {
    .uk-transition-slide-bottom {
      transform: none;
      opacity: 1;
    }
  }
</style>

<script>
  import practices from '~/static/data/practices.json'

  export default {
    props: {
      products: {
        type: Array,
        default: () => { return [] },
      },
    },
    computed: {
      bestPractices() {
        if (Array.isArray(practices) && practices.length >0) {
          return practices.filter(item => {
            return item.is_best
          })
        }
        return []
      }
    }
  }
</script>
