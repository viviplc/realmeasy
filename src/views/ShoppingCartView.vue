<template>
  <div class="view-container">
    <CheckoutResume :itemsprice="itemsprice" :shippingprice="shippingprice" />
    <div class="promos-container">
      <div class="item-component"
        v-for="item in items"
        v-bind:key="item.itemId">
        <Item
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
import CheckoutResume from "@/components/CheckoutResume.vue";
import Item from "@/components/Item.vue";

export default {
  name: "ShoppingCart",
  components: {
    CheckoutResume,
    Item,
  },
  data() {
    return {
      itemsprice: 32.54,
      shippingprice: 5.23,
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
.view-container{
    display: flex;
}

.promos-container{
    justify-content: center;
    background-color: #fff; 
    border-radius: 15px;
    margin: 23px;
    padding-bottom: 40px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.item-component{
    padding-left: 40px;
}
</style>