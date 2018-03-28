<template>
  <div class="container">
    <h1>{{ $store.state.currentCategory.title }}</h1>
    <pre>{{ $store.state.currentCategory.thumb }}</pre>
    <p><nuxt-link to="/posts">Back to the list</nuxt-link></p>
  </div>
</template>

<script>
  export default {
    // props: {
    //   cat: {
    //     type: Object,
    //     default: () => { return {} },
    //     required: true,
    //   },
    // },
    async asyncData ({ params, store, error, app }) {
      // console.log(this.catId)
      // Default data
      // let cat = { title: params.slug }
      let list = []
      // const categories = store.state.categories;

      // // Check if `params.alias` is an existing category
      // if (categories && categories.length > 0) {
      //   cat = categories.find(element => {
      //     return element.alias === params.slug;
      //   });
      //   if (typeof cat === 'undefined') {
      //     error({ statusCode: 404, message: `Can not find the category named ${params.slug}` })
      //   }
      // } else {
      //   error({ statusCode: 404, message: `Can not find the category named ${params.slug}` })
      // }

      // const ax = axios.create({
      //   baseURL: process.env.baseURL
      // })

      const { data } = await app.$axios.$get('/data/products.json')

      if (!data || data.length == 0) {
        list = []
      } else {
        list = data.map(item => {
          if (item.catId = '1') {
            return item;
          }
        })
      }
      return {
        list
      };
    }
  }
</script>
