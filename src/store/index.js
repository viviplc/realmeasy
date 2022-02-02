import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    loggedInUser: {
      userId: 123,
      name: "Julia Guo",
      profileImage: "https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
    }
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products
    },
    CREATE_NEW_REVIEW(state, {productId, reviewText, reviewRating}) {
      alert("rText: " + reviewText)
      for(let product of state.products){
        if(product.id === productId){
          product.reviews.push({
            userId: state.loggedInUser.userId,
            name: state.loggedInUser.name,
            profileUrl: "https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg",
            text: reviewText,
            rating: reviewRating,
          })
        }
      }
    }
  },
  actions: {
    getProducts({ commit }) {
      // axios.get('https://url.com/products')
      //     .then(response => {
      //         commit('SET_PRODUCTS', response.data)
      // })
      commit('SET_PRODUCTS', [{
          id: 1,
          image: "https://cdn.shopify.com/s/files/1/0490/4219/4589/products/Untitleddesign_12_800x.jpg?v=1629606580",
          productName: "Product name",
          productDescription: "Lorem ipsum",
          reviews: [
            {
              userId: 123,
              name: "Bill Gates",
              profileUrl: "https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg",
              text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet",
              rating: 1.23,
            },
            {
              userId: 193,
              name: "Romeno Wenogk",
              profileUrl: "https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg",
              text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet",
              rating: 4.67
            }
            ]
        },
        {
          id: 2,
          image: "https://www.thespruce.com/thmb/_g5lLqBEoaLx_FkbL8xW-mS2kps=/941x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/tips-to-make-clothes-last-longer-2146476-hero-baa47cec8e714b0e80f181da2f7d8dd0.jpg",
          productName: "Product Two",
          productDescription: "Lorem ipsum",
          reviews: [
            {
              userId: 123,
              name: "Bill Gates",
              profileUrl: "https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg",
              text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet",
              rating: 1.23,
            },
            {
              userId: 193,
              name: "Romeno Wenogk",
              profileUrl: "https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg",
              text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet",
              rating: 4.67
            }
            ]
        }])
    }
  },
  modules: {
  }
})
