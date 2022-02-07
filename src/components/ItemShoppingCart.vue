<template>
  <div class="item">
    <label class="checkbox-container">
      <input type="checkbox" id="itemId" :checked="selected" v-on:click="toggleSelect()"/>
      <span class="check-mark"></span>
    </label>
    <div class="item-image">
      <img :src="getImgUrl(image)" v-bind:alt="image" />
    </div>
    <div class="item-info">
      <h1>{{ productname }}</h1>
      <p>{{ productdescription }}</p>
      <div class="details-container">
        <h2>Unit Price</h2>
        <h3>$ {{ productprice }}</h3>
      </div>
      <div class="details-container">
        <h2>Quantity</h2>
        <div class="quatity-container">
          <button class="btn-rounded" v-on:click="decreaseQuantity()">
            <i class="fa fa-minus"></i>
          </button>
          <h3>{{ productquantity }}</h3>
          <button class="btn-rounded" v-on:click="increaseQuantity()">
            <i class="fa fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
    <button class="btn-white" v-on:click="deleteCartItem(itemId)">
      <i class="fa fa-trash"></i>
    </button>
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
    productquantity: {
      type: Number,
      required: true,
    },
    selected: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/" + pic);
    },
    toggleSelect(){
      let quantity = this.productquantity;
      let selected = !this.selected;
      let productId = this.itemId;
        this.$store.commit("UPDATE_PRODUCT_CART", {
          productId,
          quantity,
          selected,
        });
    },
    decreaseQuantity() {
      if (this.productquantity > 1) {
        let quantity = this.productquantity - 1;
        let selected = this.selected;
        let productId = this.itemId;
        this.$store.commit("UPDATE_PRODUCT_CART", {
          productId,
          quantity,
          selected,
        });
        //this.productquantity -= 1;
      }
    },
    increaseQuantity() {
      let quantity = this.productquantity + 1;
      let selected = this.selected;
      let productId = this.itemId;
        this.$store.commit("UPDATE_PRODUCT_CART", {
          productId,
          quantity,
          selected,
        });
    },
    deleteCartItem(productId) {
      this.$store.commit("DELETE_PRODUCT_CART", productId);
    },
  },
};
</script>

<style scoped>
.item {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 15px;
  margin: 23px;
  padding: 24px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.checkbox-container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.check-mark {
  position: absolute;
  top: 0;
  left: 0;
  height: 27px;
  width: 27px;
  border: 4px solid #23b1bb;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.checkbox-container:hover input ~ .check-mark {
  background-color: #beeff2;
}

.checkbox-container input:checked ~ .check-mark {
  background-color: #23b1bb;
}

.check-mark:after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox-container input:checked ~ .check-mark:after {
  display: block;
}

.checkbox-container .check-mark:after {
  left: 6px;
  top: 0px;
  width: 7px;
  height: 15px;
  border: solid white;
  border-width: 0 4px 4px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.item-image img {
  width: 252px;
  height: 217px;
  overflow: hidden;
  border-radius: 15px;
  margin-left: 24px;
}

.item-info {
  margin: 5px;
  margin-left: 42px;
}

.details-container {
  display: flex;
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
</style>


