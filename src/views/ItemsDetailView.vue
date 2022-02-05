<template>
  <div class="itemdetail-container">
    <Item
      :itemId="product.itemId"
      :image="product.image"
      :productname="product.productName"
      :productdescription="product.productDescription"
      :productprice="product.productPrice"
    >
    </Item>
     <ProductRatings :productId="product.itemId" />
  </div>
</template>

<script>
import Item from "@/components/Item.vue";
import ProductRatings from '../components/ProductRatings.vue'
export default {
  name: "ItemList",
  components: {
    Item,
    ProductRatings
  },
  computed: {
    product() {
      let productsArray = this.$store.state.products;
      for (let product of productsArray) {
        if (product.itemId == this.$route.params.id) {
          return product;
        }
      }
      return productsArray[0];
    },
  },
};
</script>

<style scoped>
.itemdetail-container{
  margin-top: 100px;
}
</style>
