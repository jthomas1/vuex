import { submitOrder } from '../../api/shop'

export default {
  namespaced: true,
  state: {
    cartItems: [],
    checkoutInProgress: false,
    checkoutStatus: null
  },
  getters: {
    cartProducts (state, getters, rootState, rootGetters) {
      return state.cartItems.map(cartItem => {
        const product = rootState.products.products.find(product => product.id === cartItem.id)
        return {
          id: cartItem.id,
          name: product.name,
          price: product.price,
          quantity: cartItem.quantity
        }
      })
    },
    cartTotal (state, getters) {
      return getters.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0)
    }
  },
  mutations: {
    pushProductToCart (state, product) {
      state.cartItems.push({
        id: product.id,
        quantity: 1
      })
    },
    removeProductFromCart (state, {id}) {
      const cartItem = state.cartItems.find(item => item.id === id)
      state.cartItems.splice(state.cartItems.indexOf(cartItem), 1)
    },
    incrementCartItemQuantity (state, {id}) {
      const cartItem = state.cartItems.find(item => item.id === id)
      cartItem.quantity++
    },
    decrementCartItemQuantity (state, {id}) {
      const cartItem = state.cartItems.find(item => item.id === id)
      cartItem.quantity--
    },
    checkoutInProgress (state, inProgress) {
      state.checkoutInProgress = inProgress
    },
    clearCart (state) {
      state.cartItems = []
    },
    checkoutStatus (state, status) {
      state.checkoutStatus = status
    }
  },
  actions: {
    addProductToCart (context, {id}) {
      const product = context.rootState.products.products.find(p => p.id === id)
      if (product.stock > 0) {
        const cartItem = context.state.cartItems.find(item => item.id === product.id)
        if (!cartItem) {
          context.commit('pushProductToCart', product)
        } else {
          context.commit('incrementCartItemQuantity', cartItem)
        }
        context.commit('products/decrementStock', {id: product.id}, { root: true })
      }
    },
    removeProductFromCart (context, product) {
      const cartItem = context.state.cartItems.find(item => item.id === product.id)
      if (cartItem.quantity === 1) {
        context.commit('removeProductFromCart', product)
      } else {
        context.commit('decrementCartItemQuantity', cartItem)
      }
      context.commit('products/incrementStock', {id: product.id}, { root: true })
    },
    async checkout (context) {
      try {
        context.commit('checkoutStatus', null)
        context.commit('checkoutInProgress', true)
        await submitOrder()
      } catch (err) {
        context.commit('checkoutStatus', 'error')
      } finally {
        context.commit('checkoutInProgress', false)
      }
    },
    clearCart (context) {
      context.commit('clearCart')
    }
  }
}
