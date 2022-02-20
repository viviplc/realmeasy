import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import Constants from "../constants";
import axios from "axios";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default new Vuex.Store({
  state: {
    cart: [],
    cartIds: {},
    products: [],
    isModalVisible: false,
    loginSucessStatus: "none",
    isLoggedIn: false,
    loggedInUser: {},
  },
  mutations: {
    SHOW_MODAL(state) {
      state.isModalVisible = true;
    },
    HIDE_MODAL(state) {
      state.isModalVisible = false;
    },
    LOGIN_USER(state) {
      state.isLoggedIn = true;
    },
    LOGOUT_USER(state) {
      state.isLoggedIn = false;
      state.loggedInUser = {};
      state.cart = [];
      state.cartIds = {};
    },
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_CART(state, cart) {
      state.cart = cart;
    },
    ADD_TO_CART(state, { productId, quantity, selected }) {
      let inCart = false;
      for (let cartItem of state.cart) {
        if (cartItem.productId == productId) {
          inCart = true;
        }
      }
      if (!inCart) {
        state.cart.push({ productId, quantity, selected });
      } else {
        this.commit("UPDATE_PRODUCT_CART", { productId, quantity, selected });
      }
    },
    UPDATE_PRODUCT_CART(state, { productId, quantity, selected }) {
      for (let cartItem of state.cart) {
        if (cartItem.productId == productId) {
          cartItem.quantity = quantity;
          cartItem.selected = selected;
        }
      }
    },
    DELETE_PRODUCT_CART(state, {productId}) {
      console.log("DELETING " + productId)
      state.cart = state.cart.filter((item) => item.productId !== productId);
      delete state.cartIds[productId];
    },
    CREATE_NEW_REVIEW(state, { productId, reviewText, reviewRating }) {
      for (let product of state.products) {
        if (product.itemId === productId) {
          product.reviews.push({
            userId: state.loggedInUser.userId,
            name: state.loggedInUser.name,
            profileUrl:
              "https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg",
            text: reviewText,
            rating: reviewRating,
          });
        }
      }
    },
    LOGIN_NONE(state) {
      state.loginSucessStatus = "none";
    },
    LOGIN_FAIL(state) {
      state.loginSucessStatus = "failed";
    },
    LOGIN_SUCCESS(state, { user }) {
      state.isLoggedIn = true;
      state.loginSucessStatus = "success";
      state.loggedInUser = user;
    },
  },
  actions: {
    async getProducts({ commit }) {
      try {
        const response = await axios.get(
          `${Constants.API_BASE_URL}/getProduct.php`
        );
        const productArray = response.data.map((item) => {
          return {
            itemId: Number(item["item_id"]),
            image: item["image"],
            productName: item["product_name"],
            productDescription: item["product_description"],
            productPrice: parseFloat(item["product_price"]),
          };
        });
        commit("SET_PRODUCTS", productArray);
      } catch {
        commit("SET_PRODUCTS", []);
      }
    },
    loginUser({ commit, dispatch }, { email, password }) {
      const data = {
        email,
        password,
      };
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });

      axios
        .post(`${Constants.API_BASE_URL}/getUser.php`, formData)
        .then((response) => {
          if (response.data["user_id"] !== undefined) {
            const user = {
              ...response.data,
              userId: response.data["user_id"],
              profileImage: response.data["profile_image"],
            };
            commit("LOGIN_SUCCESS", { user: user });
            commit("HIDE_MODAL");
            dispatch("getUserCart");
          } else {
            commit("LOGIN_FAIL");
          }
        })
        .catch(() => {
          commit("LOGIN_FAIL");
        });
    },
    async getUserCart({ commit }) {
      if (this.state.isLoggedIn) {
        if(Object.keys(this.state.cartIds).length == 0) {
        try {
          const response = await axios.get(
            `${Constants.API_BASE_URL}/getProductsInCart.php?user_id=${this.state.loggedInUser.userId}`
          );
          let newCartIdsObj = {}
          for (let cartItem of response.data){
            newCartIdsObj[Number(cartItem["product_id"])] = Number(cartItem["cart_id"]);
          }

          this.state.cartIds = newCartIdsObj;
          const cartItemArray = response.data.map((item) => {
            const selected = item["selected"] == "0" ? false : true;
            return {
              productId: Number(item["product_id"]),
              quantity: Number(item["product_quantity"]),
              selected: selected,
            };
          });
          commit("SET_CART", cartItemArray);
          
        } catch {
          console.log("Error getting user cart");
        }
      }
      }
    },
    deleteProductFromCart({ commit }, { productId }) {
      // delete from cartIds in state and send api call to db to delete record
      const cart_id = this.state.cartIds[productId];
      const data = {cart_id};
      const formData = new FormData();
        Object.keys(data).forEach((key) => {
          formData.append(key, data[key]);
        });
        axios
          .post(`${Constants.API_BASE_URL}/deleteProductFromCart.php`, formData)
          .then(() => {
            console.log("Deleted from cart")
            commit("DELETE_PRODUCT_CART", { productId });
          })
          .catch(() => {
            console.log("Error deleting from cart");
          });
    },
    addProductToCart({ commit }, { productId, quantity }) {
      let selected = true;
      if (
        !Object.prototype.hasOwnProperty.call(this.state.cartIds, productId)
      ) {
        const data = {
          product_id: productId,
          product_quantity: quantity,
        };

        if (this.state.isLoggedIn) {
          data["user_id"] = this.state.loggedInUser.userId;
        }

        const formData = new FormData();
        Object.keys(data).forEach((key) => {
          formData.append(key, data[key]);
        });

        axios
          .post(`${Constants.API_BASE_URL}/addProductToCart.php`, formData)
          .then((response) => {
            if (response.data["cart_id"] !== undefined) {
              this.state.cartIds[productId] = response.data["cart_id"];
              commit("ADD_TO_CART", { productId, quantity, selected });
            }
          })
          .catch(() => {
            console.log("Error adding to cart");
          });
      }
    },
    updateProductInCart({ commit }, { productId, quantity, selected }) {
      const selectedVal = selected == true ? "1" : "0";
      const cartId = this.state.cartIds[productId];

        const data = {
          cart_id: cartId,
          product_quantity: quantity,
          selected: selectedVal
        };

        const formData = new FormData();
        Object.keys(data).forEach((key) => {
          formData.append(key, data[key]);
        });

        axios
          .post(`${Constants.API_BASE_URL}/updateProductInCart.php`, formData)
          .then(() => {
            commit("UPDATE_PRODUCT_CART",{ productId, quantity, selected });
          })
          .catch(() => {
            console.log("Error adding to cart");
          });
      
    },
  },
  modules: {},
  plugins: [vuexLocal.plugin],
});
