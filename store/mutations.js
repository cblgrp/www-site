const mutations = {
  SET_CATEGORIES: (state, categories) => {
    state.categories = categories
  },
  SET_CURRENT_CATEGORY: (state, cat) => {
    state.currentCategory = cat
  },
}

export default mutations
