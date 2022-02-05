<template>
  <div id="app">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <div id="nav">
      <router-link to="/">Items List</router-link> |
      <router-link to="/shoppingCart">Cart</router-link> |
      <router-link to="/reviews">Reviews</router-link>
    </div>
    <router-view/> 
  </div>
</template>


<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');

*{
  font-family: 'Lato', sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #EFF0F4;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #23b1bb;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
