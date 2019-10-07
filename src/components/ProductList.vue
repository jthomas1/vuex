<template>
  <div class="products">
    <ul>
      <li
        v-for="product in products"
        :key="product.id"
      >
        <router-link :to="{name: 'product', params: {id: product.id}}">
          <img :src="product.image" width="70">
        </router-link>
        <strong>{{ product.name }}</strong>
        <i>${{ product.price }}</i>
        <span>stock: {{ product.stock }}</span>
        <button @click="addToCart(product)" :disabled="outOfStock(product)">add to cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  computed: {
  },
  methods: {
    addToCart (product) {
      this.$store.dispatch('cart/addProductToCart', product)
    },
    outOfStock ({id}) {
      return this.$store.getters['products/outOfStock'](id)
    }
  }
}
</script>

<style scoped>
  .products ul {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

  }
  .products li{
    width: 22%;
    margin:5px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-content: center;

  }
  .products li button{
    margin-left: 10px;
  }
</style>
