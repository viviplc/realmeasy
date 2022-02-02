<template>
  <div class="items-container" id="itemView">
    <div class="item-component" v-for="item in items" v-bind:key="item.itemId">
      <Item 
        :image="item.image"
        :productname="item.productName"
        :productdescription="item.productDescription"
        :productprice="item.productPrice"
      >
      </Item>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Item from "@/components/Item.vue";

export default {
  name: "ItemList",
  components: {
    Item,
  },
  data() {
    return {
      items: [
        {
          itemId: 1,
          image: "Picture1.jpg",
          productName: "Product Name",
          productDescription:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
          productPrice: "$29,19",
        },
        {
          itemId: 2,
          image: "Picture2.jpg",
          productName: "Product Name",
          productDescription:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
          productPrice: "$29,19",
        },
        {
          itemId: 3,
          image: "Picture3.jpg",
          productName: "Product Name",
          productDescription:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
          productPrice: "$29,19",
        },
        {
          itemId: 4,
          image: "Picture4.jpg",
          productName: "Product Name",
          productDescription:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
          productPrice: "$29,19",
        },
        {
          itemId: 5,
          image: "Picture5.jpg",
          productName: "Product Name",
          productDescription:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
          productPrice: "$29,19",
        },
        {
          itemId: 6,
          image: "Picture6.jpg",
          productName: "Product Name",
          productDescription:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
          productPrice: "$29,19",
        },
        {
          itemId: 7,
          image: "Picture7.jpg",
          productName: "Product Name",
          productDescription:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
          productPrice: "$29,19",
        },
        {
          itemId: 8,
          image: "Picture8.jpg",
          productName: "Product Name",
          productDescription:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
          productPrice: "$29,19",
        },
        {
          itemId: 9,
          image: "Picture9.jpg",
          productName: "Product Name",
          productDescription:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
          productPrice: "$29,19",
        },
        {
          itemId: 10,
          image: "Picture10.jpg",
          productName: "Product Name",
          productDescription:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
          productPrice: "$29,19",
        },
      ],
    };
  },
};
</script>

<style scoped>

.items-container{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    background-color: #fff; 
    border-radius: 15px;
    margin: 23px;
    padding-bottom: 40px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.item-component{
    flex-basis: 340px;
    padding-left: 40px;
    padding-right: 40px;
}

</style>