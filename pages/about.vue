<template>
  <div id="about">
    <div>
      <h1 class="title">
        About CBL.
      </h1>
      <nuxt-link to="/">Go to Home</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  asyncData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({})
      }, 1000)
    })
  }
}
</script>

<style>
</style>
