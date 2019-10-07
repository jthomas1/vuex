<template>
  <div>
    <div class="content">
      <h1>Shop now!</h1>
      <select v-model="sort.field" name="sort_field">
        <option :value="null" disabled hidden>Order products by</option>
        <option>price</option>
        <option>name</option>
        <option>id</option>
      </select>
      <div v-if="sort.field">
        <button @click="updateSortOrder('asc')"><i class="fa fa-arrow-up"></i> {{sort.field}}</button>
        <button @click="updateSortOrder('desc')"><i class="fa fa-arrow-down"></i> {{sort.field}}</button>
      </div>

      <div v-if="status === 'loading'">loading....</div>
      <ProductList v-else :products="products"/>
    </div>

    <ShoppingCart/>
  </div>
</template>

<script>
import ShoppingCart from '@/components/ShoppingCart'
import ProductList from '@/components/ProductList'
export default {
  name: 'home',
  components: {
    ProductList,
    ShoppingCart
  },
  data () {
    return {
      status: null,
      sort: {
        order: null,
        field: null
      }
    }
  },
  async created () {
    this.status = 'loading'
    await this.$store.dispatch('products/fetchAllProducts')
    this.status = null
  },
  computed: {
    products () {
      return this.$store.state.products.products
    }
  },
  methods: {
    updateSortOrder (order) {
      this.sort.order = order
    }
  }
}
</script>
