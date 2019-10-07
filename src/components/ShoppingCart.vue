<template>
  <div class="cart">
    <h2>Cart</h2>
    <ul>
      <li
        v-for="product in cartProducts"
        :key="product.id"
      >
        {{product.quantity}} x {{product.name}} ${{product.price}}
        <button @click="addItem(product)" :disabled="outOfStock(product)">+</button>
        <button @click="removeItem(product)">-</button>
      </li>
    </ul>
    <h3>Total: ${{cartTotalPrice}}</h3>
    <button @click="doCheckout">Checkout</button>
    <p v-if="checkoutStatus === 'error'" style="font-size: 25px">There was an error with our order, please try again</p>
  </div>
</template>

<script>
export default {
  computed: {
    cartTotalPrice () {
      return this.$store.getters['cart/cartTotal']
    },
    cartProducts () {
      return this.$store.getters['cart/cartProducts']
    },
    checkoutStatus () {
      return this.$store.state.cart.checkoutStatus
    }
  },
  methods: {
    addItem (item) {
      this.$store.dispatch('cart/addProductToCart', item)
    },
    removeItem (item) {
      this.$store.dispatch('cart/removeProductFromCart', item)
    },
    async doCheckout () {
      await this.$store.dispatch('cart/checkout')
      if (this.checkoutStatus !== 'error') {
        await this.$store.dispatch('cart/clearCart')
        await this.$router.push('thanks')
      }
    },
    outOfStock ({id}) {
      return this.$store.getters['products/outOfStock'](id)
    }
  }
}
</script>

<style scoped>
  .cart {
    width: 30%;
    float: left;
    border-left: 2px solid grey;
    padding-left: 5px;
  }
</style>
