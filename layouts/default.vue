<template>
  <div class="uk-offcanvas-content uk-position-relative">
    <no-ssr>
      <layout-header/>
    </no-ssr>
    <div id="content">
      <nuxt/>
    </div>
    <div id="offcanvas" uk-offcanvas="mode: slide; overlay: true">
      <div class="uk-offcanvas-bar uk-box-shadow-large">
        <div class="uk-panel">
          <ul class="uk-nav uk-nav-default">
            <nuxt-link to="/" class="uk-text-uppercase" tag="li" active-class="uk-active" exact>
              <a class="offset-nav-item">Home</a>
            </nuxt-link>
            <li class="uk-margin uk-margin-small">
              <span class="offset-nav-item uk-text-muted text-xs">Products Categories</span>
              <div class="uk-nav-divider" />
              <ul class="uk-text-uppercase">
                <nuxt-link to="#" tag="li" active-class="uk-active">
                  <a class="offset-nav-sub-item uk-text-truncate">Smart Lighting</a>
                </nuxt-link>
                <nuxt-link to="#" tag="li" active-class="uk-active">
                  <a class="offset-nav-sub-item uk-text-truncate">Step Light</a>
                </nuxt-link>
                <nuxt-link to="#" tag="li" active-class="uk-active">
                  <a class="offset-nav-sub-item uk-text-truncate">Ceiling Light</a>
                </nuxt-link>
                <nuxt-link to="#" tag="li" active-class="uk-active">
                  <a class="offset-nav-sub-item uk-text-truncate">Bath Vanity Lighting</a>
                </nuxt-link>
                <nuxt-link to="#" tag="li" active-class="uk-active">
                  <a class="offset-nav-sub-item uk-text-truncate">Indoor Wall Sconce</a>
                </nuxt-link>
                <nuxt-link to="#" tag="li" active-class="uk-active">
                  <a class="offset-nav-sub-item uk-text-truncate">Pendant Lighting</a>
                </nuxt-link>
                <nuxt-link to="#" tag="li" active-class="uk-active">
                  <a class="offset-nav-sub-item uk-text-truncate">Track Lighting</a>
                </nuxt-link>
                <nuxt-link to="#" tag="li" active-class="uk-active">
                  <a class="offset-nav-sub-item uk-text-truncate">Outdoor Lighting</a>
                </nuxt-link>
              </ul>
            </li>
            <nuxt-link to="/technology" class="uk-text-uppercase" tag="li" active-class="uk-active">
              <a class="offset-nav-item">
                Technology
                <span uk-icon="icon: bolt"></span>
              </a>
            </nuxt-link>
            <nuxt-link to="/about" class="uk-text-uppercase" tag="li" active-class="uk-active">
              <a class="offset-nav-item">About</a>
            </nuxt-link>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .offset-nav-item {
    padding-left: 15px;
  }
  .offset-nav-sub-item {
    padding: 5px 15px;
  }
  /* .no-ssr-placeholder {
    background-color: transparent;
    height: 100px;
  } */
</style>

<script>
import LayoutHeader from '~/components/LayoutHeader'

export default {
  components: {
    LayoutHeader
  },
  // beforeCreate (ctx) {
  //   console.log('text')
  //   console.log(ctx)
  //   return {
  //     isMobile: ctx.isMobile
  //   }
  // }
  computed: {

    clientType() {
      return this.$store.state.clientType
    }
    // ...mapGetters([clientType: 'getClientType'])
  }
}
</script>
