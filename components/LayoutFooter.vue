<template>
  <footer class="uk-dark uk-animation-slide-bottom-small">
    <div class="uk-container uk-container-medium">
      <div class="uk-text-center" uk-grid>
        <div class="uk-width-1-4@m uk-text-left@m uk-text-center@s">
          <h5 class="uk-text-uppercase">Surpport</h5>
          <ul class="uk-list uk-text-muted">
            <li>Manual & Installation</li>
            <li>Refund & Exchange</li>
            <li>Term of Use</li>
          </ul>
        </div>
        <div class="uk-width-1-4@m uk-text-left@m uk-text-center@s">
          <h5 class="uk-text-uppercase">About</h5>
          <ul class="uk-list uk-text-muted">
            <li>Company</li>
            <li>Contact us</li>
            <li>How to buy</li>
            <li>Technology</li>
            <li>News</li>
          </ul>
        </div>
        <div class="uk-width-1-2@m  uk-text-left@m uk-text-center@s">
          <h5 class="uk-text-uppercase">Newsletter</h5>
          <div class="uk-margin-top">
            <form id="subscribe-form">
              <input class="uk-input uk-width-2-3@m uk-margin-small-bottom" type="text" placeholder="Sign up your email...">
              <button class="uk-button uk-button-primary uk-width-1-3@m uk-margin-small-bottom">Subscribe</button>
            </form>
          </div>
          <h5 class="uk-text-uppercase uk-margin-medium-top">Let's be friend...</h5>
          <div class="uk-margin-top">
            ins
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped lang="less">
  @import '../assets/style/_variants.less';

  footer {
    background: @light-color;
    opacity: .9;
    padding-top: 48px;
    padding-bottom: 48px;
    #subscribe-form {
      input[type="text"] {
        border-right-width: 0;
      }
      button {
        background: @primary-color;
        color: white;
      }
    }
  }


  @media (max-width: @breakpoint-small-max) {
    #subscribe-form input[type="text"] {
      text-align: center;
      border-right-width: 1px !important;
    }
  }
</style>

<script>
  export default {
    props: {
      isHeader: {
        type: Boolean,
        default: false,
      },
    }
  }
</script>
