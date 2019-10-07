import { fetchAllProducts, fetchProduct } from '../../api/shop'

export default {
  namespaced: true,
  state: {
    products: []
  },
  getters: {
    getProductByID (state) {
      return function (id) {
        return state.products.find(prod => prod.id === id)
      }
    },
    outOfStock (state, getters) {
      return function (id) {
        return getters.getProductByID(id).stock <= 0
      }
    },
    getProductsOrderedBy(state) {
      return function (field, order = 'asc') {
        if (!field) {
          return state.products
        }
      }
    }
  },
  mutations: {
    incrementStock (state, {id}) {
      const product = state.products.find(prod => prod.id === id)
      product.stock++
    },
    decrementStock (state, {id}) {
      const product = state.products.find(prod => prod.id === id)
      product.stock--
    },
    addProduct (state, itemToAdd) {
      if (!state.products.find(prod => prod.id === itemToAdd.id)) {
        state.products.push(itemToAdd)
      }
    }
  },
  actions: {
    async fetchAllProducts (context) {
      const products = await fetchAllProducts()
      products.forEach(product => {
        context.commit('addProduct', product)
      })

      return Promise.resolve(products)
    },
    async fetchProduct (context, id) {
      const product = await fetchProduct(id)
      context.commit('addProduct', product)

      return Promise.resolve(context.getters.getProductByID(id))
    }
  }
}
