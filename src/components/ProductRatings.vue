<template>
  <div>
    <div class="d-flex justify-content-between" style="padding-bottom: 15px;">
      <div>
         <h2>Customer Reviews</h2>
      </div>
      <div>
         <b-form-rating id="rating-sm-no-border" color="#23B1BB" v-model="averageProductRating" size="lg" readonly no-border></b-form-rating>
      </div>
    </div>
    <div class="row" v-for="review of reviews" :key="review.userId">
      <div class="col">
        <div class="row">
          <div class="col-md-2 col-lg-1" style="padding-right: 50px;">
            <img class="rounded-circle z-depth-2 " style="width:100px; border: 1px solid #23B1BB;" v-bind:src="review.profileUrl"
            />
          </div>
          <div class="col-md-10 col-lg-11">
            <div class="row">
              <div class="col">
                <div class="d-flex justify-content-between">
                  <div>
                    <h4>{{review.name}}</h4>
                  </div>
                  <div>
                    <b-form-rating id="rating-sm-no-border" color="#23B1BB" v-model="review.rating" size="sm" readonly no-border></b-form-rating>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-end">
              <div class="col" style="text-align: left;">
                <p>{{review.text}}</p>
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
    'productId' : Number
  },
    data() {
      return {
      }
    },
    computed: {
      reviews() {
      let productsArray =  this.$store.state.products;
      for(let product of productsArray){
        if (product.id == this.productId){
          return product.reviews;
        }
      }
      return []
    },
      averageProductRating: function () {
        let totalRating = 0;
        let numReviews = this.reviews.length;
        this.reviews.forEach(({rating})=> totalRating += rating);
        return totalRating / numReviews;
      }
    }
  }
</script>