<template>
  <div id="app">
    <div v-if="checkoutInProgress" class="overlay"></div>
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  computed: {
    checkoutInProgress () {
      return this.$store.state.cart.checkoutInProgress.checkoutInProgress
    }
  }
}
</script>

<style>
li {
  list-style-type: none;
  padding: 10px;
}
.content {
  width: 68%;
  float: left;
}
body {
  max-width: 1020px;
  margin: 0 auto;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/* The Overlay (background) */
.overlay {
  /* Height & width depends on how you want to reveal the overlay (see JS below) */
  height: 100%;
  width: 0;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  background-color: rgb(0,0,0); /* Black fallback color */
  background-color: rgba(0,0,0, 0.9); /* Black w/opacity */
  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
}

.overlay {
  background-color:#060101;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1000;
  top: 0px;
  left: 0px;
  opacity: .5; /* in FireFox */
  filter: alpha(opacity=50); /* in IE */
}
</style>
