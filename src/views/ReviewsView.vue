<template>
  <div class="view-container">
    <UserProductReviews/>
    <div class="promos-container">
      <div
        class="item-component"
        v-for="item in items"
        v-bind:key="item.itemId"
      >
        <Item
          :itemId="item.itemId"
          :image="item.image"
          :productname="item.productName"
          :productdescription="item.productDescription"
          :productprice="item.productPrice"
        >
        </Item>
      </div>
    </div>
  </div>
</template>

<script>
import Item from "@/components/Item.vue";
import UserProductReviews from '../components/UserProductReviews.vue'
export default {
  name: "Reviews",
  components: {
    Item,
    UserProductReviews
  },
  data() {
    return {
        
    };
  },
  computed: {
    items() {
      let productsArray = this.$store.state.products;
      let productIds = []
      this.$store.state.cart.forEach(item => {
        productIds.push(item.productId);
      });
      let finalResult = [];
      for(let product of productsArray){
        const needle = productIds.indexOf(product.itemId);
        if(needle == -1){
          finalResult.push(product)
        }
      }
      return finalResult.slice(0, 3);
    }
  }
};
</script>

<style scoped>
.view-container {
  display: flex;
  margin-top: 50px !important;
}

.promos-container {
  justify-content: center;
  background-color: #fff;
  border-radius: 15px;
  margin: 23px;
  margin-top: 70px;
  padding-bottom: 40px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.item-component {
  padding-left: 40px;
}
</style>