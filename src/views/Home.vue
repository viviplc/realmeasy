<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    
    <HelloWorld/>
    <ProductRatings :productId="1" />
  </div>
  
</template>

<script>
// @ is an alias to /src


import ProductRatings from '../components/ProductRatings.vue'
export default {
  name: 'Home',
  components: {
   
    ProductRatings,
  }
}
</script>
