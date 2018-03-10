<template>
  <header id="header">
    <nav
      class="uk-container uk-container-expand uk-navbar-container"
      uk-sticky="cls-active: uk-navbar-sticky; animation: uk-animation-slide-top;"
      uk-navbar
    >
        <div class="uk-navbar-left">
          <nuxt-link class="uk-navbar-logo" to="/">
            <logo/>
          </nuxt-link>
        </div>
        <div class="uk-navbar-right">
          <ul class="uk-navbar-nav uk-visible@m">
            <nuxt-link to="/" class="uk-text-uppercase" tag="li" active-class="uk-active" exact>
              <a>Home</a>
            </nuxt-link>
            <nuxt-link to="/products" class="uk-text-uppercase" tag="li" active-class="uk-active">
              <a>Products</a>
              <div class="uk-navbar-dropdown uk-navbar-dropdown-width-2">
                <div class="uk-text-small uk-text-capitalize uk-text-muted">Product Category</div>
                <hr class="uk-divider-icon" />
                <div class="uk-navbar-dropdown-grid uk-child-width-1-2" uk-grid>
                    <div>
                        <ul class="uk-nav uk-navbar-dropdown-nav">
                            <li class="uk-active"><a href="#">Active</a></li>
                            <li><a href="#">Item</a></li>
                            <li class="uk-nav-header">Header</li>
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Item</a></li>
                            <li class="uk-nav-divider"></li>
                            <li><a href="#">Item</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul class="uk-nav uk-navbar-dropdown-nav">
                            <li class="uk-active"><a href="#">Active</a></li>
                            <li><a href="#">Item</a></li>
                            <li class="uk-nav-header">Header</li>
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Item</a></li>
                            <li class="uk-nav-divider"></li>
                            <li><a href="#">Item</a></li>
                        </ul>
                    </div>
                </div>
              </div>
            </nuxt-link>
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

  @navbar-dark: rgba(27,31,35,0.7);
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
    .uk-navbar-nav > li {
      margin-left: 10px;
      > a {
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
    .uk-navbar-toggle {
      color: @navbar-light;
    }
    &.uk-navbar-sticky {
      height: 50px;
      background-color: rgba(255, 255, 255, .9);
      box-shadow: 0 0 60px 0 rgba(0, 0, 0, .07);
      .uk-navbar-nav > li > a::after, a::before {
        display: none;
      }
      .uk-navbar-nav > li:not(.uk-active) > a,
      .uk-navbar-toggle {
        color: @navbar-dark;
      }
    }
  }

  .uk-divider-icon {
    background-size: 12px;
  }

  @media (max-width: @breakpoint-small-max) {
    #header {
      .uk-navbar-container {
        height: 50px;
      }
      .uk-navbar-toggle {
        height: 46px;
      }
      .uk-logo > img, svg {
        height: 30px;
      }
    }
  }
</style>

<script>
  import Logo from '~/components/logo'

  export default {
    components: {
      Logo
    },
  }
</script>
