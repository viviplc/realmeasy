<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/itemsList">Items List</router-link> |
      <router-link to="/shoppingCart">Cart</router-link>
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
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
