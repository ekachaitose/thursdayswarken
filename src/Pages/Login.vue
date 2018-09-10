<template>
<div class="container">
    <div class="container">
        <div class="columns is-centered">

            <article class="card is-rounded">
                <div class="card-content">
                    <h1 class="title">
                        <img src="https://placeholdit.imgix.net/~text?txtsize=13&txt=150%C3%9750&w=150&h=50" alt="logo" width="200">
                    </h1>
                    <p class="control has-icon" style="margin-bottom:10px">
                        <input class="input" v-model="user.username" type="email" placeholder="Email">
                        <i class="fa fa-envelope"></i>
                    </p>
                    <p class="control has-icon" style="margin-bottom:10px">
                        <input class="input" v-model="user.password" type="password" placeholder="Password">
                        <i class="fa fa-lock"></i>
                    </p>
                    <div v-if="message" class="notification is-warning">
                        <button @click="clearAlert(null)" class="delete"></button>
                        {{message}}
                    </div>
                    <p class="control">
                        <button style="margin-bottom:10px" class="button is-primary is-medium is-fullwidth" type="submit" @click="Login">Login</button>
                    </p>
                </div>
            </article>
        </div>
    </div>

</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      user: {}
    }
  },
  methods: {
    ...mapActions({
      clearAlert: 'alert/clear',
      login: 'account/login',
      logout: 'account/logout'
    }),
    Login() {
      const { username, password } = this.user
      if (username && password) {
        this.login({
          username,
          password
        })
      }
    }
  },
  computed: {
    ...mapState('alert', ['message'])
  },
  created() {
    this.logout()
  }
}
</script>
