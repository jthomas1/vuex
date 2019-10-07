<template>
  <div>
    <div class="content">
      <template v-if="product">
        <h1>{{product.name}}</h1>
        <img :src="product.image" alt="" width="250">
        <h3>stock: {{product.stock}}</h3>
        <p>{{product.description}}</p>
        <button @click="addToCart">add to cart</button>
      </template>
      <div v-if="status === 'loading'">loading....</div>
    </div>
    <ShoppingCart/>
  </div>
</template>

<script>

import ShoppingCart from '@/components/ShoppingCart'
export default {
  name: 'Product',
  components: {
    ShoppingCart
  },
  props: {
    id: {
      required: true,
      type: Number
    }
  },
  data () {
    return {
      status: null
    }
  },
  async created () {
    this.status = 'loading'
    await this.$store.dispatch('products/fetchProduct', this.id, { root: true })
    this.status = null
  },
  computed: {
    product () {
      return this.$store.getters.getProductByID(this.id)
    }
  },
  methods: {
    addToCart () {
      this.$store.dispatch('cart/addProductToCart', this.product, { root: true })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
