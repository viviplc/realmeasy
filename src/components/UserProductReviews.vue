<template>
  <div class="view-container">
    <div class="userReviews-container">
      <div class="userReviews-component">
        <div class="row" v-for="product of products" :key="product.itemId">
          <div class="review-container">
            <div class="col-md-3">
              <img
                id="productImage"
                :src="getImgUrl(product.image)"
                class="img-fluid"
              />
            </div>
            <div class="col-md-9">
              <div class="row" id="productNameAndRatingHolder">
                <div class="d-flex justify-content-between">
                  <div>
                    <h4>{{ product.productName }}</h4>
                  </div>
                  <div>
                    <b-form-rating
                      id="rating-sm-no-border"
                      v-model="product.currentUserReviewRating"
                      color="#23B1BB"
                      size="lg"
                      no-border
                    ></b-form-rating>
                  </div>
                </div>
              </div>

              <div class="row" id="productReviewTextBoxHolder">
                <b-form-textarea
                  id="textarea"
                  v-model="product.currentUserReviewText"
                  placeholder="Lorem ipsum dolor sit amet, consetetur sadipscing elitr. "
                  rows="4"
                  max-rows="6"
                ></b-form-textarea>
              </div>

              <div class="row" id="productReviewSubmitButtonHolder">
                <div class="col">
                  <div class="d-flex justify-content-end">
                    <button
                      type="button"
                      @click="
                        reviewButtonClicked(
                          product.itemId,
                          product.currentUserReviewText,
                          product.currentUserReviewRating
                        )
                      "
                      id="productReviewSubmitButton"
                      class="btn btn-primary float-right border-0"
                    >
                      Submit Review
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reviewText: "",
    };
  },
  computed: {
    products() {
      let productsArray = this.$store.state.productsBought;
      for (let product of productsArray) {
        product.currentUserReviewText = "";
        product.currentUserReviewRating = 0;
      }
      return productsArray;
    },
  },
  mounted() {
    this.$store.dispatch("getProductsBought");
  },
  methods: {
    reviewButtonClicked: function (id, text, rating) {
      //alert(`Creating review for product #${id} with text: '${text}' and rating: ${rating}`)
      this.$store.dispatch("addReviewToProduct", {
        productId: id,
        reviewText: text,
        reviewRating: rating,})
      // this.$store.commit("CREATE_NEW_REVIEW", {
      //   productId: id,
      //   reviewText: text,
      //   reviewRating: rating,
      // });
    },
    getImgUrl(pic) {
      return require("../assets/" + pic);
    },
  },
};
</script>

<style>
.view-container {
  display: flex;
  flex-wrap: wrap;
}

#productReviewTextBoxHolder {
  margin: 10px;
}

#productReviewSubmitButton {
  margin-right: 10px;
  font-size: 22px;
  background-color: #23b1bb;
  border-radius: 15px;
  width: 322px;
  height: 62px;
  border-color: transparent;
  color: #eff0f4;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

#productImage {
  margin: 10px;
  width: 252px;
  overflow: hidden;
  border-radius: 15px;
}

.userReviews-container {
  margin: 23px;
}

.review-container {
  width: 1480px;
  display: flex;
  background-color: #fff;
  border-radius: 15px;
  margin-bottom: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.review-container h4 {
  font-size: 40px;
  color: black;
}
</style>
