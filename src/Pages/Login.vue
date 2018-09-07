<template>
  <div class="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" v-model="user.username" placeholder="Enter Username" name="uname" required>
    <br>
    <br>
    <label for="psw"><b>Password</b></label>
    <input type="password" v-model="user.password" placeholder="Enter Password" name="psw" required>
    <br>
    <br>
    <button type="submit" @click="Login">Login</button> |
    <router-link to="/" style="cursor:pointer">
        <i class="user plus icon"></i>Cancel
    </router-link>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data(){
    return {
      user:{}
    }
  },
  methods:{
    ...mapActions({
        clearAlert: 'alert/clear' ,
        login: 'account/login',
        logout: 'account/logout'
    }),
    Login () {
        const { username, password } = this.user;
        if (username && password) {
            this.login({ username, password })
            if(this.message){
                this.errMsg = this.message
            }  
        }
    }
  },
  computed: {
      ...mapState('alert', ['message'])
  },
  created () {
      this.logout();
  },
  watch: {
      $route (to, from){
          this.clearAlert();
      }
  } 
}
</script>
