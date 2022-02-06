<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />

    <div class="header_navigation" id="nav">
      <div class="container-nav">
        <router-link class="navbar-brand" to="/">
          <div class="logo-image">
            <img src="./assets/logo.png" class="img-fluid" />
            <h1>Realm Easy</h1>
          </div>
        </router-link>
        <nav>
          <div class="nav-links">
            <button v-if="isLoggedIn" class="login-button" @click="logoutUser">
              {{loggedInProfile.name}}<i class="fa fa-fw fa-user"></i>
            </button>
            <button v-else class="login-button" @click="showModal">
              Login Account<i class="fa fa-fw fa-user"></i>
            </button>
            
            <Modal v-show="isModalVisible" @close="closeModal" />

            <div class="dropdown-content">
              <router-link class="nav-link" to="/reviews">Reviews</router-link>
            </div>
            <div class="nav_link">
              <router-link class="btn-white" to="/shoppingCart">
                <i class="fa fa-fw fa-shopping-cart"></i>
              </router-link>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: {
    Modal,
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
    loggedInProfile() {
      return this.$store.state.loggedInUser;
      /*This is what the profile structure is (you can edit it in the index.js of the store folder):
      loggedInUser: {
      userId: 123,
      name: "Julia Guo",
      profileImage: "https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg",
    }
      */
    }
  },
  methods: {
    logoutUser() {
      this.$store.commit("LOGOUT_USER");
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap");

* {
  font-family: "Lato", sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #eff0f4;
}

.header_navigation {
  width: 100%;
  height: 100px;
  top: 0;
  left: 0;
  background: #fff;
  position: fixed;
  overflow: hidden;
  z-index: 100;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.navbar-brand h1 {
  font-family: "Javanese Text";
  font-size: 52px !important;
  margin-top: 22px;
  color: #23b1bb;
}

.container-nav {
  width: 95% !important;
  max-width: 3000px !important;
  margin-left: 10px;
}

.header_navigation .container-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;
}

.header_navigation .nav-links {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 20px;
}

.header_navigation .nav_link {
  position: relative;
  padding-left: 30px;
}

.btn-white {
  background-color: #fff;
  border: none;
  color: #23b1bb;
  height: 35px;
  width: 35px;
  font-size: 35px;
  cursor: pointer;
}

.login-button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border: 3px solid #23b1bb;
  color: #23b1bb;
  height: 65px;
  width: 323px;
  font-size: 25px;
  cursor: pointer;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.09);
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}

.logo-image {
  display: flex;
  align-items: center;
}

.img-fluid {
  width: 85px;
  height: 85px;
  margin-right: 20px;
}
</style>
