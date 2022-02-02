<template>
  <div>
    <div class="row" v-for="product of products" :key="product.id">
      <div class="col-md-3">

        <img id="productImage" v-bind:src="product.image" class="img-fluid" />

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
       <button type="button" @click="reviewButtonClicked(product.id, product.currentUserReviewText, product.currentUserReviewRating)" id="productReviewSubmitButton" class="btn btn-primary float-right border-0">Submit Review</button>

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
      reviewText: ""
    };
  },
  computed: {
    products() {
      let productsArray =  this.$store.state.products;
      for(let product of productsArray){
        product.currentUserReviewText = "";
        product.currentUserReviewRating = 0;
      }
      return productsArray
    },
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
  methods: {
    reviewButtonClicked: function (id, text, rating) {
      alert(`Creating review for product #${id} with text: '${text}' and rating: ${rating}`)
      this.$store.commit("CREATE_NEW_REVIEW", {productId : id, reviewText : text, reviewRating : rating});
    }
  }
};
</script>

<style>
  #productReviewTextBoxHolder {
    margin: 10px;
  }

  #productReviewSubmitButton {
    margin-right: 10px;
    background: #23B1BB;
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  #productImage {
    margin: 10px;
    width: 80%;
    border-radius: 10px;
  }
</style>
