<template>
  <section id="best-seller-section" class="index-section" uk-parallax="bgy: -200" v-if="bestSellers && bestSellers.length > 0">
    <div class="uk-container uk-container-medium best-seller-container">
      <div class="uk-flex uk-flex-middle">
        <div class="uk-flex-1 uk-margin-right uk-flex-first">
          <hr>
        </div>
        <h5 class="uk-text-muted uk-text-uppercase uk-text-bold uk-margin-remove-top">Best sellers</h5>
      </div>
      <no-ssr>
      <div class="uk-grid-medium uk-child-width-expand@s" uk-grid>
        <div
          v-for="item in bestSellers" :key="item.id"
          class="best-seller-item"
          uk-scrollspy="cls: uk-animation-slide-bottom-medium; repeat: true; delay: 100; offset-top: 70;"
        >
          <a class="uk-cover-container uk-inline-clip uk-transition-toggle uk-border-rounded uk-box-shadow-small uk-box-shadow-hover-large">
            <img
              :src="item.thumb"
              :data-src="item.img"
              class="lazyload blur-up uk-transition-scale-up uk-transition-opaque"
              alt=""
              uk-cover
            />
            <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-transition-slide-bottom">
              <div class="uk-text-small uk-text-truncate">{{item.title}}</div>
              <div class="text-xs uk-text-muted uk-text-truncate">{{item.feature}}</div>
            </div>
          </a>
        </div>
      </div>
      </no-ssr>
    </div>
  </section>
</template>

<style scoped lang="less">
  @import '../assets/style/_variants.less';

  #best-seller-section {
    min-height: 200px;
    background-image: url('/img/background/best-seller-circle.png');
    background-size: 25%, 25%, 25%;
    background-color: #F1F1F1;
    background-repeat: no-repeat;
    .best-seller-item {
      a {
        height: 200px;
        width: 100%;
      }
      img {
        min-height: 200px;
      }
      .uk-overlay {
        padding: 12px;
        .best-seller-title {
          font-size: 12px;
        }
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
  export default {
    props: {
      products: {
        type: Array,
        default: () => { return [] },
      },
    },
    computed: {
      bestSellers() {
        if (Array.isArray(this.$store.state.bestSellers) && this.products.length > 0) {
          return this.products.map(item => {
            if (this.$store.state.bestSellers.includes(item.id)) {
              return item
            }
          })
        }
      }
    }
  }
</script>
