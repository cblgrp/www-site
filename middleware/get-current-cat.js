export default async ({ params, store, error }) => {
    // Undefined slug param, then return error;
    if (typeof params.slug == 'undefined') {
      return error({ statusCode: 404, message: 'Can not find the page!' })
    }
    // No categories can be found, something's wrong with initialization of this app;
    if (!store.state.categories || store.state.categories.length == 0) {
      return error({ statusCode: 404, message: 'Can not find the product categories!' })
    }
    const cat = store.state.categories.find(element => {
      return element.alias === params.slug;
    });
    if (typeof cat === 'undefined') {
      store.commit('SET_CURRENT_CATEGORY', {})
      return error({ statusCode: 404, message: `Can not find the category named '${params.slug}'!` })
    }
    store.commit('SET_CURRENT_CATEGORY', cat)
}
