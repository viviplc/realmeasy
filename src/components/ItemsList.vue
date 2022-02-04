<template>
  <div class="items-container" id="itemView">
    <div class="item-component" v-for="item in items" v-bind:key="item.itemId">
      <Item
        :image="item.image"
        :productname="item.productName"
        :productdescription="item.productDescription"
        :productprice="item.productPrice"
      >
      </Item>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Item from "@/components/Item.vue";

export default {
  name: "ItemList",
  components: {
    Item,
  },
  computed: {
    items() {
      let productsArray = this.$store.state.products;
      return productsArray;
    },
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
};
</script>

<style scoped>
.items-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  background-color: #fff;
  border-radius: 15px;
  margin: 23px;
  padding-bottom: 40px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.item-component {
  flex-basis: 340px;
  padding-left: 40px;
  padding-right: 40px;
}
</style>
