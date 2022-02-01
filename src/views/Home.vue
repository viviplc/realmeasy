<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ProductRatings/>
    <HelloWorld/>

  </div>
  
</template>

<script>
// @ is an alias to /src

import ProductRatings from '../components/ProductRatings.vue'
import HelloWorld from '../components/HelloWorld.vue'
export default {
  name: 'Home',
  components: {
    ProductRatings,
    HelloWorld
  }
}
</script>
