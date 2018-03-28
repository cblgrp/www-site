<template>
  <header
    id="header"
    uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; animation: uk-animation-slide-top-small; bottom: #transparent-sticky-navbar"
  >
    <nav class="uk-container uk-navbar-container uk-navbar-transparent" uk-navbar>
      <div class="uk-navbar-left">
        <nuxt-link class="uk-navbar-logo" to="/">
          <logo :isHeader="true" />
        </nuxt-link>
      </div>
      <div class="uk-navbar-right">
        <ul class="uk-navbar-nav uk-visible@m">
          <nuxt-link to="/" class="uk-text-uppercase" tag="li" active-class="uk-active" exact>
            <a>Home</a>
          </nuxt-link>
          <li class="uk-text-uppercase">
            <a>Products</a>
            <div
              class="uk-navbar-dropdown uk-navbar-dropdown-width-3"
              uk-dropdown="animation: uk-animation-slide-top-small; delay-hide: 200"
            >
              <div class="text-xs uk-text-capitalize uk-text-muted">Product Category</div>
              <hr class="uk-divider-icon uk-margin-remove-top uk-margin-small" />
              <div class="uk-navbar-dropdown-grid uk-child-width-1-2" uk-grid>
                <div>
                  <ul class="uk-nav uk-navbar-dropdown-nav uk-list">
                    <li v-for="item in categories" :key="item.id" v-if="item.id < 5">
                      <nuxt-link class="cat-item" :to="`/category/${item.alias}`">
                        <div class="uk-flex uk-flex-middle">
                          <div class="uk-cover-container cat-thumb uk-border-rounded">
                            <img :src="item.thumb" alt="" uk-cover />
                            <div :class="`uk-overlay-default uk-position-cover img-cover`" />
                          </div>
                          <div class="uk-margin-small-left cat-title">
                            <div class="uk-margin-small-bottom">{{item.title}}</div>
                            <div class="text-xs uk-text-muted uk-text-capitalize">Total {{item.total}}</div>
                          </div>
                        </div>
                      </nuxt-link>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul class="uk-nav uk-navbar-dropdown-nav uk-list">
                    <li v-for="item in categories" :key="item.id" v-if="item.id >= 5">
                      <a class="cat-item" href="#">
                        <div class="uk-flex uk-flex-middle">
                          <div class="uk-cover-container cat-thumb uk-border-rounded">
                            <img :src="item.thumb" alt="" uk-cover>
                            <div :class="`uk-overlay-default uk-position-cover img-cover`" />
                          </div>
                          <div class="uk-margin-small-left cat-title">
                            <div class="uk-margin-small-bottom">{{item.title}}</div>
                            <div class="text-xs uk-text-muted uk-text-capitalize">Total {{item.total}}</div>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <nuxt-link to="/technology" class="uk-text-uppercase" tag="li" active-class="uk-active">
            <a>
              Technology
              <span uk-icon="icon: bolt"></span>
            </a>
          </nuxt-link>
          <nuxt-link to="/about" class="uk-text-uppercase" tag="li" active-class="uk-active">
            <a>About</a>
          </nuxt-link>
        </ul>
        <a class="uk-navbar-toggle uk-hidden@m" uk-navbar-toggle-icon href="#offcanvas" uk-toggle></a>
      </div>
    </nav>
  </header>
</template>

<style scoped lang="less">
  @import '../assets/style/_variants.less';

  @navbar-dark: rgba(27, 31, 35, 0.7);
  @navbar-light: rgba(255, 255, 255, .7); // Only For the text color of @navbar-dark background.
  #header {
    z-index: 1000;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: @navbar-dark;
  }

  .uk-navbar-container {
    height: @navbar-nav-item-height;
    transform: translate3d(0, 0, 0);
    transition: height .3s ease-out, box-shadow .3s ease-out;
    .uk-navbar-logo {
      text-decoration: none;
    }
    .uk-navbar-nav>li {
      margin-left: 10px;
      user-select: none;
      >a {
        font-weight: 500;
        height: 50px;
        color: @navbar-light;
        transition: color .1s ease-in-out;
        position: relative;
        text-decoration: none;
        &::after {
          content: '';
          display: block;
          position: absolute;
          left: calc((102% - 0px) / 2);
          right: calc((102% - 0px) / 2);
          bottom: 0;
          height: 1px;
          background-color: currentColor;
          transition: .3s ease-in-out;
          transition-property: left, right, color;
        }
        &:hover::after {
          right: 15px;
          left: 15px;
        }
      }
      &.uk-active > a {
        color: @primary-color;
      }
    }
    .uk-navbar-nav>li:not(.uk-active)>a,
    .uk-navbar-toggle {
      color: @navbar-light;
      &:hover {
        color: #FFF;
      }
    }
    &.uk-navbar-sticky {
      height: 50px;
      box-shadow: 0 0 60px 0 rgba(0, 0, 0, .07);
      .uk-navbar-nav>li>a::after,
      a::before {
        display: none;
      }
    }
  }

  .uk-navbar-dropdown {
    .cat-thumb {
      width: 50px;
      height: 50px;
      .img-cover {
        transition: opacity .3s ease-in;
        opacity: .5;
      }
    }
    a.cat-item:hover {
      .img-cover {
        opacity: 0;
      }
    }
    .uk-divider-icon {
      background-size: 12px;
    }

    .uk-navbar-dropdown-nav {
      a {
        .cat-title {
          color: @navbar-dark;
        }
        &:hover {
          .cat-title {
            color: #333;
          }
        }
      }
    }
  }

  @media (max-width: @breakpoint-small-max) {
    #header {
      .uk-navbar-container {
        height: 50px;
      }
      .uk-navbar-toggle {
        height: 46px;
      }
    }
  }

</style>

<script>
  import Logo from '~/components/logo'

  export default {
    computed: {
      categories() {
        return this.$store.state.categories
      }
    },

    components: {
      Logo
    },
  }

</script>
