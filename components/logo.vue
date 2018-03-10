<template>
  <div class="logo uk-logo" :class="{ 'header-logo' : isHeader}">
    <img src="/logo.png" alt="Cloudybay Lighting Logo" />
    <div class="logo-text uk-visible@s">
      <svg viewBox="0 0 380 226" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <title></title>
          <desc></desc>
          <defs></defs>
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" font-weight="bold">
              <g id="svg-logo-text" fill="#000000">
                  <text id="Cloudy" stroke="#000000" font-family="ChaparralPro-Bold, Chaparral Pro" font-size="120">
                      <tspan x="0" y="90">Cloudy</tspan>
                  </text>
                  <text id="Bay" stroke="#000000" font-family="ChaparralPro-Bold, Chaparral Pro" font-size="120">
                      <tspan x="0" y="189">Bay</tspan>
                  </text>
                  <text id="TM" font-family="LucidaGrande-Bold, Lucida Grande" font-size="30">
                      <tspan x="203" y="135">TM</tspan>
                  </text>
              </g>
          </g>
      </svg>
    </div>
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
    img, svg {
      height: 50px;
      transition: .3s ease-in-out;
      transition-property: color, height, fill;
    }
    #svg-logo-text {
      fill: #777777;
    }
  }
  .header-logo {
    img, svg {
      height: 40px;
    }
    #svg-logo-text {
      fill: rgba(255, 255, 255, .7);
    }
  }
  &.uk-navbar-sticky {
    .header-logo {
      img, svg {
        height: 30px;
      }
      #svg-logo-text {
        fill: rgba(27,31,35,0.7);
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
