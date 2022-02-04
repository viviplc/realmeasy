<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <NavBar/>
    <HelloWorld/>
    <ProductRatings :productId="1" />
    <UserProductReviews/>
  </div>
  
</template>

<script>
// @ is an alias to /src

import NavBar from '../components/NavBar.vue'

import ProductRatings from '../components/ProductRatings.vue'

import UserProductReviews from '../components/UserProductReviews.vue'
export default {
  name: 'Home',
  components: {
    NavBar,
    ProductRatings,
 
    UserProductReviews
  }
}
</script>
