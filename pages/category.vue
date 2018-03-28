<template>
  <div class="category">
    <nuxt-child />
  </div>
</template>

<script>
  export default {
    // validate ({ store }) {
    //   if (!store.state.currentCategory.id) {
    //     return error({ statusCode: 404, message: 'Can not find the product categories!' })
    //   }
    // },
    // async asyncData ({ params, store, error }) {
    //   // Default data
    //   let cat = { title: params.slug }
    //   const categories = store.state.categories;

    //   // Check if `params.alias` is an existing category
    //   if (categories && categories.length > 0) {
    //     cat = categories.find(element => {
    //       return element.alias === params.slug;
    //     });
    //     if (typeof cat === 'undefined') {
    //       error({ statusCode: 404, message: `Can not find the category named ${params.slug}` })
    //     }
    //   } else {
    //     error({ statusCode: 404, message: `Can not find the category named ${params.slug}` })
    //   }
    //   return {
    //     cat
    //   };
    // },
    middleware: 'get-current-cat',
    head() {
      return {
        title: this.$store.state.currentCategory.title
      }
    }
  }
</script>
