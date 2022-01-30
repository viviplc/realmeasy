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
        <div class="d-flex justify-content-between">
          <div style="padding-right: 50px;">
            <img class="rounded-circle z-depth-2 " style="width:100px; border: 1px solid #23B1BB;" v-bind:src="review.profileUrl"
            />
          </div>
          <div>
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
    data() {
      return {
        productRating: 3.24,
        reviews : [
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
      }
    },
    computed: {
      averageProductRating: function () {
        let totalRating = 0;
        let numReviews = this.reviews.length;
        this.reviews.forEach(({rating})=> totalRating += rating);
        return totalRating / numReviews;
      }
    }
  }
</script>