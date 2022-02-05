<template>
  <div class="item">
    <div class="item-image">
      <a v-bind:href="getProductUrl()"
        ><img :src="getImgUrl(image)" v-bind:alt="image"
      /></a>
    </div>
    <div class="item-info">
      <h2>{{ productname }}</h2>
      <p>{{ productdescription }}</p>
      <h3>$ {{ productprice }}</h3>
      <button v-on:click="addToCart(itemId, 1)">Add to cart</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemId: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    productname: {
      type: String,
      required: true,
    },
    productdescription: {
      type: String,
      required: true,
    },
    productprice: {
      type: Number,
      required: true,
    },
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/" + pic);
    },
    getProductUrl() {
      return "/#/item/" + this.itemId;
    },
    addToCart(productId, quantity){
      let selected = true;
      this.$store.commit("ADD_TO_CART", {productId, quantity, selected});
    }
  },
};
</script>

<style scoped>
.item {
  padding-top: 25px;
  padding-right: 50px;
}

.item-image img {
  width: 275px;
  height: 237px;
  overflow: hidden;
  border-radius: 15px;
}

.item-info h2 {
  font-size: 24px;
  color: black;
  margin-top: 14px;
}

.item-info p {
  font-size: 15px;
  width: 275px;
  color: #868485;
}

.item-info h3 {
  font-size: 24px;
  font-weight: bold;
  color: black;
  margin-top: 0%;
}

.item-info button {
  font-size: 20px;
  background-color: #23b1bb;
  border-radius: 15px;
  width: 182px;
  height: 45px;
  border-color: transparent;
  color: #eff0f4;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
