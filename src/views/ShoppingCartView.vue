<template>
  <div class="view-container">
    <div class="items-list-cart">
      <div v-for="item in cartItems" v-bind:key="item.itemId">
        <ItemCart
          :itemId="item.itemId"
          :image="item.image"
          :productname="item.productName"
          :productdescription="item.productDescription"
          :productprice="item.productPrice"
          :productquantity="item.productQuantity"
          :selected="item.selected"
        >
        </ItemCart>
      </div>
    </div>
    <CheckoutResume :itemsprice="itemsprice" :shippingprice="shippingprice" />
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
import ItemCart from "@/components/ItemShoppingCart.vue";
import CheckoutResume from "@/components/CheckoutResume.vue";
import Item from "@/components/Item.vue";

export default {
  name: "ShoppingCart",
  components: {
    ItemCart,
    CheckoutResume,
    Item,
  },
  computed: {
    cartItems() {
      let productIds = []
      let productQuantities = []
      let productSelectedBools = []
      this.$store.state.cart.forEach(item => {
        productIds.push(item.productId);
        productQuantities.push(item.quantity);
        productSelectedBools.push(item.selected)
      });
      let finalResult = []
      let productsArray = this.$store.state.products;
      for(let product of productsArray){
        const needle = productIds.indexOf(product.itemId);
        if(needle >= 0){
          finalResult.push({productQuantity : productQuantities[needle], selected: productSelectedBools[needle], ...product})
        }
      }
      return finalResult;
    },
  },
  data() {
    return {
      itemsprice: 32.54,
      shippingprice: 5.23,
      itemscart: [
        {
          itemId: 1,
          image: "Picture7.jpg",
          productName: "Product Name",
          productDescription:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
          productPrice: "$29,19",
          productQuantity: 2,
        },
        {
          itemId: 2,
          image: "Picture8.jpg",
          productName: "Product Name",
          productDescription:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
          productPrice: "$29,19",
          productQuantity: 4,
        },
      ],
      items: [
        {
          itemId: 1,
          image: "Picture1.jpg",
          productName: "Product Name",
          productDescription:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
          productPrice: "$29,19",
        },
        {
          itemId: 2,
          image: "Picture2.jpg",
          productName: "Product Name",
          productDescription:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
          productPrice: "$29,19",
        },
      ],
    };
  },
};
</script>

<style scoped>
.view-container {
  display: flex;
}

.promos-container {
  justify-content: center;
  background-color: #fff;
  border-radius: 15px;
  margin: 23px;
  padding-bottom: 40px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.item-component {
  padding-left: 40px;
}
</style>