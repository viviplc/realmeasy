<template>
  <div class="itemdetail-container">
    <div class="itemdetail-image">
      <img :src="getImgUrl(product.image)" v-bind:alt="image" />
    </div>
    <div class="itemdetail-infocontainer">
      <div class="item-info">
        <h1>{{ product.productName }}</h1>
        <p>{{ product.productDescription }}</p>
        <div class="details-container">
          <h2>Unit Price</h2>
          <h3>$ {{ product.productPrice }}</h3>
        </div>
        <div class="details-container">
          <h2>Quantity</h2>
          <div class="quatity-container">
            <button class="btn-rounded" v-on:click="decreaseQuantity()">
              <i class="fa fa-minus"></i>
            </button>
            <h3>{{ quantity }}</h3>
            <button class="btn-rounded" v-on:click="increaseQuantity()">
              <i class="fa fa-plus"></i>
            </button>
          </div>
           
        </div>
        <button v-on:click="addToCart(product.itemId, quantity)" class="addToCartButton">{{addToCartText}}</button>
      </div>
      <ProductRatings :productId="product.itemId" />
    </div>
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
import ProductRatings from "../components/ProductRatings.vue";
import Item from "@/components/Item.vue";
export default {
  name: "ItemList",
  components: {
    Item,
    ProductRatings,
  },
  data() {
        return {
        quantity: 1,
        addToCartText: "Add to cart",
        };
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
  },
  methods: {
    decreaseQuantity() {
        if(this.quantity > 1) {
this.quantity -= 1;
        }
        
    },
    increaseQuantity() {
this.quantity += 1;
        
    },

    getImgUrl(pic) {
      return require("../assets/" + pic);
    },
    addToCart(productId, quantity) {
      let selected = true;
      this.$store.commit("ADD_TO_CART", { productId, quantity, selected });
      this.addToCartText = "Added";
      setTimeout(function () {
        this.addToCartText = "Add to cart";
      }.bind(this), 700);
    },
  },
};
</script>

<style scoped>
.itemdetail-container {
  margin: 20px;
  margin-top: 100px;
  display: flex;
  flex-direction: row;
}

.itemdetail-image {
  margin-top: 20px;
  width: 620px;
  height: 463px;
  margin-left: 24px;
}

.itemdetail-image img{
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.item-info {
  margin: 5px;
  margin-left: 42px;
  justify-content: center;
  background-color: #fff;
  border-radius: 15px;
  margin: 23px;
  padding: 24px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.addToCartButton {
  font-size: 20px;
  background-color: #23b1bb;
  border-radius: 15px;
  width: 182px;
  height: 45px;
  border-color: transparent;
  color: #eff0f4;
  margin-top: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.details-container {
  display: flex;
  padding-top: 15px;
}

.quatity-container {
  display: flex;
}

.btn-rounded {
  background-color: #23b1bb;
  border: none;
  border-radius: 50%;
  color: #fff;
  height: 35px;
  width: 35px;
  font-size: 18px;
  cursor: pointer;
  margin-left: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.btn-white {
  background-color: #fff;
  border: none;
  color: #23b1bb;
  height: 35px;
  width: 35px;
  font-size: 35px;
  cursor: pointer;
  align-self: flex-start;
}

.item-info h1 {
  font-size: 40px;
  color: black;
}

.item-info p {
  font-size: 22px;
  width: 660px;
  color: #868485;
}

.item-info h2 {
  font-size: 27px;
  color: black;
  margin-right: 45px;
}

.item-info h3 {
  font-size: 24px;
  font-weight: bold;
  color: black;
  margin-left: 10px;
}

.promos-container {
  justify-content: center;
  background-color: #fff;
  border-radius: 15px;
  margin: 23px;
  margin-left: 10px;
  padding-bottom: 40px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.item-component {
  padding-left: 40px;
}
</style>
