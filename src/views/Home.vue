<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js Test App"/>
    <div class="col d-flex justify-content-center">
      <div class="card" style="width: 75rem;">
        <div class="card-body">
          <ProductRatings />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ProductRatings from '@/components/ProductRatings.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    ProductRatings
  }
}
</script>
