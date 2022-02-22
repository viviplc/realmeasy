<template>
  <div class="reviews-container">
    <div class="reviews-component">
      <div class="d-flex justify-content-between" style="padding-bottom: 15px">
        <div>
          <h2>Customer Reviews</h2>
        </div>
        <div>
          <b-form-rating
            id="rating-sm-no-border"
            color="#23B1BB"
            v-model="averageProductRating"
            size="lg"
            readonly
            no-border
          ></b-form-rating>
        </div>
      </div>
      <div class="row" v-for="review of reviews" :key="review.reviewId" style="margin-bottom:15px;">
        <div class="col">
          <div class="row">
            <div class="col-md-2 col-lg-2" style="padding-right: 50px">
              <img
                class="rounded-circle z-depth-2"
                style="width: 100px; border: 1px solid #23b1bb"
                v-bind:src="review.profileUrl"
              />
            </div>
            <div class="col-md-10 col-lg-10">
              <div class="row">
                <div class="col">
                  <div class="d-flex justify-content-between">
                    <div>
                      <h4>{{ review.name }}</h4>
                    </div>
                    <div>
                      <b-form-rating
                        id="rating-sm-no-border"
                        color="#23B1BB"
                        v-model="review.rating"
                        size="sm"
                        readonly
                        no-border
                      ></b-form-rating>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row justify-content-end">
                <div class="col" style="text-align: left">
                  <p>{{ review.text }}</p>
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
  props: {
    productId: Number,
  },
  data() {
    return {};
  },
  computed: {
    reviews() {
      const productReviews = this.$store.state.productReviews;
      return productReviews[this.productId];
    },
    averageProductRating: function () {
      let totalRating = 0;
      let numReviews = this.reviews.length;
      this.reviews.forEach(({ rating }) => (totalRating += rating));
      return totalRating / numReviews;
    },
  },
  mounted() {
    this.$store.dispatch("getProductReviews", {productId : this.productId});
  },
};
</script>

<style scoped>
.reviews-container {
  background-color: #fff;
  border-radius: 15px;
  margin: 23px;
  padding-bottom: 40px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.reviews-component {
  padding: 25px;
}

.col-md-10{
  padding-left: 50px;
}
</style>
