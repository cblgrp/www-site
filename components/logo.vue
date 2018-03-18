<template>
  <div class="logo uk-logo" :class="{ 'header-logo' : isHeader}">
    <svg viewBox="0 0 490 238" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <title></title>
      <desc></desc>
      <defs></defs>
      <g id="svg-logo" transform="translate(0.000000, 9.000000)">
          <rect id="Rectangle" fill="#CB161D" transform="translate(51.000000, 50.862974) rotate(-45.000000) translate(-51.000000, -50.862974) " x="-8.79697837" y="39.862974" width="119.593957" height="22" rx="11"></rect>
          <rect id="Rectangle" fill="#54B244" transform="translate(51.000000, 112.324512) rotate(-45.000000) translate(-51.000000, -112.324512) " x="-8.79697837" y="101.324512" width="119.593957" height="22" rx="11"></rect>
          <rect id="Rectangle" fill="#0085CA" transform="translate(51.000000, 176.401436) rotate(-45.000000) translate(-51.000000, -176.401436) " x="-8.79697837" y="165.401436" width="119.593957" height="22" rx="11"></rect>
          <text class="svg-logo-text uk-visible@s" font-family="ChaparralPro-BoldIt, Chaparral Pro" font-size="120" font-style="italic" font-weight="bold" fill="#000000">
              <tspan x="128" y="93">Cloudy</tspan>
          </text>
          <text class="svg-logo-text uk-visible@s" font-family="ChaparralPro-BoldIt, Chaparral Pro" font-size="120" font-style="italic" font-weight="bold" fill="#000000">
              <tspan x="128" y="192">Bay</tspan>
          </text>
          <text class="svg-logo-text uk-visible@s" font-family="LucidaGrande-Bold, Lucida Grande" font-size="30" font-weight="bold" fill="#000000">
              <tspan x="330" y="138">TM</tspan>
          </text>
      </g>
  </svg>
  </div>
</template>
<style scoped lang="less">
  @import '../assets/style/_variants.less';

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    .logo-text {
      margin-left: -5px;
      display: flex;
      > svg {
        align-items: center;
      }
    }
    svg {
      height: 50px;
      transition: height .3s ease-in-out;
    }
    .svg-logo-text {
      fill: #777777;
      transition: fill .3s ease-in-out;
    }
  }
  .logo.header-logo {
    svg {
      height: 40px;
    }
    .svg-logo-text {
      fill: rgba(255, 255, 255, .7);
    }
    &:hover {
      .svg-logo-text {
        fill: #FFF;
      }
    }
  }
  &.uk-navbar-sticky {
    .header-logo {
      svg {
        height: 30px;
      }
    }
  }
  @media (max-width: @breakpoint-small-max) {
    #header {
      .header-logo > img, svg {
        height: 30px;
      }
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
