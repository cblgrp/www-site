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

<script>
  import Logo from '~/components/logo'

  export default {
    components: {
      Logo
    },
  }
</script>
