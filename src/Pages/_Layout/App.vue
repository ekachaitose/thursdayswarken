<template>
  <div id="app">
    <nav class="navbar is-primary is-fixed-top">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item" style="cursor:pointer">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
        </router-link>
      </div>

      <div id="navbarExampleTransparentExample" class="navbar-menu">

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <button v-if="status.loggedIn" @click="Logout" class="button is-default">
                  <span>Logout</span>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div style="margin-top:100px">
      <router-view/>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import router from './../../router'
export default {
  name: 'App',
  data() {
      return {
          user: {},
          errMsg: ''
      }
  },
  methods: {
      ...mapActions({
          logout: 'account/logout'
      }),
      Logout() {
        this.logout()
        router.push('/')
      }
  },
  computed: {
      ...mapState('account', ['status'])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
