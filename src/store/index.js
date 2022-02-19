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
    products: [
      {
        itemId: 1,
        image: "Picture1.jpg",
        productName: "Product Name",
        productDescription:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
        productPrice: 29.19,
        reviews: [
          {
            userId: 123,
            name: "Bill Gates",
            profileUrl:
              "https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet",
            rating: 1.23,
          },
          {
            userId: 193,
            name: "Romeno Wenogk",
            profileUrl:
              "https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet",
            rating: 4.67,
          },
        ],
      },
      {
        itemId: 2,
        image: "Picture2.jpg",
        productName: "Product Name 2",
        productDescription:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
        productPrice: 29.19,
        reviews: [
          {
            userId: 123,
            name: "Bill Gates",
            profileUrl:
              "https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet",
            rating: 1.23,
          },
          {
            userId: 193,
            name: "Romeno Wenogk",
            profileUrl:
              "https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet",
            rating: 4.67,
          },
        ],
      },
      {
        itemId: 3,
        image: "Picture3.jpg",
        productName: "Product Name 3",
        productDescription:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
        productPrice: 29.19,
        reviews: [
          {
            userId: 123,
            name: "Bill Gates",
            profileUrl:
              "https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet",
            rating: 1.23,
          },
          {
            userId: 193,
            name: "Romeno Wenogk",
            profileUrl:
              "https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet",
            rating: 4.67,
          },
        ],
      },
      {
        itemId: 4,
        image: "Picture4.jpg",
        productName: "Product Name",
        productDescription:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
        productPrice: 29.19,
        reviews: [
          {
            userId: 123,
            name: "Bill Gates",
            profileUrl:
              "https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet",
            rating: 1.23,
          },
          {
            userId: 193,
            name: "Romeno Wenogk",
            profileUrl:
              "https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet",
            rating: 4.67,
          },
        ],
      },
      {
        itemId: 5,
        image: "Picture5.jpg",
        productName: "Product Name",
        productDescription:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
        productPrice: 29.19,
        reviews: [
          {
            userId: 123,
            name: "Bill Gates",
            profileUrl:
              "https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet",
            rating: 1.23,
          },
          {
            userId: 193,
            name: "Romeno Wenogk",
            profileUrl:
              "https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet",
            rating: 4.67,
          },
        ],
      },
      {
        itemId: 6,
        image: "Picture6.jpg",
        productName: "Product Name",
        productDescription:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
        productPrice: 29.19,
        reviews: [
          {
            userId: 123,
            name: "Bill Gates",
            profileUrl:
              "https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet",
            rating: 1.23,
          },
          {
            userId: 193,
            name: "Romeno Wenogk",
            profileUrl:
              "https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet",
            rating: 4.67,
          },
        ],
      },
      {
        itemId: 7,
        image: "Picture7.jpg",
        productName: "Product Name",
        productDescription:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
        productPrice: 29.19,
        reviews: [
          {
            userId: 123,
            name: "Bill Gates",
            profileUrl:
              "https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet",
            rating: 1.23,
          },
          {
            userId: 193,
            name: "Romeno Wenogk",
            profileUrl:
              "https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet",
            rating: 4.67,
          },
        ],
      },
      {
        itemId: 8,
        image: "Picture8.jpg",
        productName: "Product Name",
        productDescription:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
        productPrice: 29.19,
        reviews: [
          {
            userId: 123,
            name: "Bill Gates",
            profileUrl:
              "https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet",
            rating: 1.23,
          },
          {
            userId: 193,
            name: "Romeno Wenogk",
            profileUrl:
              "https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet",
            rating: 4.67,
          },
        ],
      },
      {
        itemId: 9,
        image: "Picture9.jpg",
        productName: "Product Name",
        productDescription:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
        productPrice: 29.19,
        reviews: [
          {
            userId: 123,
            name: "Bill Gates",
            profileUrl:
              "https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet",
            rating: 1.23,
          },
          {
            userId: 193,
            name: "Romeno Wenogk",
            profileUrl:
              "https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet",
            rating: 4.67,
          },
        ],
      },
      {
        itemId: 10,
        image: "Picture10.jpg",
        productName: "Product Name",
        productDescription:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
        productPrice: 29.19,
        reviews: [
          {
            userId: 123,
            name: "Bill Gates",
            profileUrl:
              "https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet",
            rating: 1.23,
          },
          {
            userId: 193,
            name: "Romeno Wenogk",
            profileUrl:
              "https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet",
            rating: 4.67,
          },
        ],
      },
    ],
    isModalVisible: false,
    loginSucessStatus: "none",
    isLoggedIn: false,
    loggedInUser: {
      userId: 123,
      name: "Julia Guo",
      profileImage: "https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg",
    },
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
    },
    SET_PRODUCTS(state, products) {
      state.products = products;
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
    DELETE_PRODUCT_CART(state, productId) {
      state.cart = state.cart.filter((item) => item.productId !== productId);
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
    loginUser({ commit }, { email, password }) {
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
          } else {
            commit("LOGIN_FAIL");
          }
        })
        .catch(() => {
          commit("LOGIN_FAIL");
        });
    },
    deleteProductFromCart({ commit }, { productId }) {
      commit("DELETE_PRODUCT_CART", {productId});
      // delete from cartIds in state and send api call to db to delete record
    },
    addProductToCart({ commit }, { productId, quantity }) {
      let selected = true;
      commit("ADD_TO_CART", { productId, quantity, selected });

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
            }
          })
          .catch(() => {
            console.log("Error adding to cart");
          });
      }
    },
  },
  modules: {},
  plugins: [vuexLocal.plugin],
});
