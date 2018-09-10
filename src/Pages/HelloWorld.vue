<template>
  <div class="container">
    <div class="box" v-if="!status.loggedIn">
    <h1>Welcom to SA-System </h1>
         <img src="../assets/images/home.jpg" alt="home">
      <ul>
        <li>
          <router-link to="/login" style="cursor:pointer" class="button is-success">
              <i class="fa-fas plus icon"></i>Login
          </router-link> 
          <router-link to="/register" style="cursor:pointer" class="button is-primary">
              <i class="user plus icon"></i>Register
          </router-link>
        </li>
      </ul>
    </div>
    <div  class="box" v-if="status.loggedIn">
      <div class="buttons ">
        <span class="button is-large is-success" @click="creProject = !creProject">Create Project</span>
        <span class="button is-large is-info" @click="creProject = !creProject">Soon..</span>
        <span class="button is-large is-danger" @click="creProject = !creProject">Soon..</span>
      </div>
    </div>
    <div v-if="creProject">
      <create-project></create-project>
    </div>
   
  </div>
</template>

<script>
/* eslint-disable */

import { mapState, mapActions } from 'vuex'
import CreateProject from '../components/CreateProject'
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      creProject: false
    }
  },
  computed: {
    ...mapState('account', ['status'])
  },
  components: {
    'create-project': CreateProject
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: bold;
  font-size: larger;
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
