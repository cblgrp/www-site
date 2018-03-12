<template>
  <header id="header">
    <nav class="uk-container uk-container-expand uk-navbar-container"
      uk-sticky="cls-active: uk-navbar-sticky; animation: uk-animation-slide-top;"
      uk-navbar
    >
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
              uk-dropdown="animation: uk-animation-slide-top-small; mode: click;"
            >
              <div class="text-xs uk-text-capitalize uk-text-muted">Product Category</div>
              <hr class="uk-divider-icon uk-margin-remove-top uk-margin-small" />
              <div class="uk-navbar-dropdown-grid uk-child-width-1-2" uk-grid>
                <div>
                  <ul class="uk-nav uk-navbar-dropdown-nav uk-list">
                    <li class="cat-item" v-for="item in categories" :key="item.id" v-if="item.id < 4">
                      <a href="#">
                        <div class="uk-flex uk-flex-middle">
                          <div class="uk-cover-container cat-thumb">
                            <img :src="item.thumb" alt="" uk-cover>
                          </div>
                          <div class="uk-margin-small-left">
                            <div class="uk-margin-small-bottom">{{item.name}}</div>
                            <div class="text-xs uk-text-muted uk-text-capitalize">Total {{item.total}}</div>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul class="uk-nav uk-navbar-dropdown-nav uk-list">
                    <li class="cat-item" v-for="item in categories" :key="item.id" v-if="item.id >= 4">
                      <a href="#">
                        <div class="uk-flex uk-flex-middle">
                          <div class="uk-cover-container cat-thumb">
                            <img :src="item.thumb" alt="" uk-cover>
                          </div>
                          <div class="uk-margin-small-left">
                            <div class="uk-margin-small-bottom">{{item.name}}</div>
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
  }

  .uk-navbar-container {
    height: @navbar-nav-item-height;
    transition: height .3s ease-out, box-shadow .3s ease-out, background-color .3s ease-out;
    transform: translate3d(0, 0, 0);
    &:not(.uk-navbar-transparent) {
      background: @navbar-dark;
    }
    .uk-navbar-logo {
      text-decoration: none;
    }
    .uk-navbar-nav>li {
      margin-left: 10px;
      user-select: none;
      >a {
        height: 50px;
        color: @navbar-light;
        transition: .1s ease-in-out;
        transition-property: color;
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
    .cat-item:hover {
      .cat-thumb img {
        opacity: 1;
      }
    }
    .cat-thumb {
      width: 50px;
      height: 50px;
      border-radius: 6px;
      img {
        transition: opacity .3s ease-in;
        opacity: .7;
      }
    }
    &.uk-navbar-sticky {
      height: 50px;
      background-color: rgba(255, 255, 255, .9);
      box-shadow: 0 0 60px 0 rgba(0, 0, 0, .07);
      .uk-navbar-nav>li>a::after,
      a::before {
        display: none;
      }
      .uk-navbar-nav>li:not(.uk-active)>a,
      .uk-navbar-toggle {
        color: @navbar-dark;
        &:hover {
          color: #333;
        }
      }
    }
  }

  .uk-divider-icon {
    background-size: 12px;
  }

  .uk-navbar-dropdown-nav {
    a {
      color: @navbar-dark;
      &:hover {
        color: #333;
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
  import Categories from '~/assets/data/categories.json'

  export default {
    data () {
      return {
        categories: Categories
      }
    },
    components: {
      Logo
    },
  }

</script>
