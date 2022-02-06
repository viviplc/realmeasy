<template>
  <div class="modal-backdrop-con">
    <div class="modal-con">
      <header class="modal-header-con">
        <button type="button" class="btn-close" @click="close"></button>
      </header>

      <div class="modal-body-con">
        <div class="modal-logo">
          <img src="../assets/logo.png" class="modal-logo-img" />
          <h1>Realm Easy</h1>
        </div>
        <div class="modal-form-login">
          <form class="login-form" @submit.prevent="onSubmit">
            <p>
              <label for="email">Email</label>
              <input type="text" v-model="email">
            </p>
            <p>
              <label for="password">Password</label>            
              <input type="text" v-model="password">
            </p>
            <input class="btn-submit-login" type="submit" name="submit-login" id="submit-login" value="Log In">
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Modal",
  methods: {
    close() {
      this.$emit("close");
    },
    onSubmit(){
      //logic to login user
    this.$store.commit("LOGIN_USER");
    this.$emit("close");
    }
  },
  data() {
    return {
      email: null,
      password: null,
    }
  }
};
</script>

<style>
.modal-backdrop-con {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(198, 194, 194, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.modal-con {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  border-radius: 15px;
  flex-direction: column;
}

.modal-logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 70px;
}

.modal-con .modal-logo-img {
  width: 294px;
}

.modal-con h1 {
  font-family: "Javanese Text";
  font-size: 52px !important;
  margin-top: 50px;
  color: #23b1bb;
  align-self: center;
}

.modal-header-con {
  padding: 15px;
  display: flex;
}

.modal-header-con {
  position: relative;
  border-bottom: 1px solid #eeeeee;
}

.modal-body-con {
  position: relative;
  padding: 20px 10px;
  display: flex;
  margin-bottom: 50px;
}

.modal-form-login{
  display: flex;
  flex-direction: column;
  padding: 70px;
  padding-bottom: 0px;
  padding-top: 0px;
  margin-top: 30px;
  border-left: 1px solid black;
}

.modal-form-login p{
  display: flex;
  flex-direction: column;
}

.modal-form-login label{
  font-size: 25px;
  margin-bottom: 24px;
}

.modal-form-login input{
  background-color: rgba(35, 177, 187, 0.24);
  width: 375px;
  height: 75px;
  margin-bottom: 40px;
  border-radius: 15px;
  font-size: 22px;
}

.btn-submit-login{
  font-size: 30px !important;
  background-color: #23b1bb !important;
  border-color: transparent;
  color: #eff0f4 !important;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-top: 110px;
}

.btn-close {
  position: absolute;
  top: 0px;
  right: 10px;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  background: transparent;
}
</style>

