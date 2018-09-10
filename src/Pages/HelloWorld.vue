<template>
  <div class="hello">
    <div v-if="!status.loggedIn">
      <h1>{{ msg }}</h1>
      <h2>Essential Links</h2> <br>
      <ul>
        <li>
          <router-link to="/login" style="cursor:pointer" class="button is-success">
              <i class="user plus icon"></i>Login
          </router-link> 
          <router-link to="/register" style="cursor:pointer" class="button is-primary">
              <i class="user plus icon"></i>Register
          </router-link>
        </li>
      </ul>
    </div>
    <div v-if="status.loggedIn">
      <div class="buttons is-centered">
        <span class="button is-large is-success">Menu01</span>
        <span class="button is-large is-info">Menu02</span>
        <span class="button is-large is-danger">Menu03</span>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */ 
import { mapState, mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
      ...mapState('account', ['status'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
