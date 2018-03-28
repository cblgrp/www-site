import categories from '~/static/data/categories.json'

const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  async nuxtServerInit({ commit }, { req }) {
    commit('SET_CATEGORIES', categories)
  },
  // refreshCategories: async ({ error }) => {
  //   const ax = axios.create({
  //     baseURL: process.env.baseURL
  //   })
  //   try {
  //     const { data } = await ax.get('/data/categories.json')
  //     commit('SET_CATEGORIES', data)
  //   } catch(e) {
  //     return error({ message: 'Internal Error!', statusCode: 500 })
  //   }
  // }
}

export default actions
