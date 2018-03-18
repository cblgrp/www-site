<template>
  <div class="container">
    <h1>{{ cat.name }}</h1>
    <pre>{{ cat.thumb }}</pre>
    <p><nuxt-link to="/posts">Back to the list</nuxt-link></p>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    layout: 'cbl',
    async asyncData ({ params, error }) {
      const ax = axios.create({
        baseURL: process.env.baseURL
      })

      const { data } = await ax.get('/data/categories.json')
      let currentCategory
      // Check if `params.alias` is an existing category
      if (data && data.length > 0) {
        currentCategory = data.find(element => {
          return element.alias === params.alias;
        });
        if (typeof currentCategory === 'undefined') {
          error({ statusCode: 404, message: `Can not find the category named ${params.alias}` })
        }
        return {
          cat: currentCategory
        }
      } else {
        error({ statusCode: 404, message: `Can not find the category named ${params.alias}` })
      }
    },
    head() {
      return {
        title: this.cat.name
      }
    }
  }
</script>
