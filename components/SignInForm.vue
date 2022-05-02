<template>
  <div
    @click="close"
    class="popup-bg"
  >
    <div
      @click.stop
      class="popup-form"
    >
      <h3 class="popup-form__title">Sign In</h3>
      <input
        v-model="email"
        type="text"
        placeholder="Login"
      >
      <input
        v-model="password"
        type="text"
        placeholder="Password"
      >
      <button
        @click="signInButtonClickHandler"
      >Sign In</button>
      <div
        v-if="authorizationErrorList.length"
        class="errors-list"
      >
        <p
          v-for="(errorMessage, index) in authorizationErrorList"
          :key="index"
          class="errors-list__item"
        >{{ errorMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SignInForm',
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    close () {
      this.$store.commit('setShowSignInForm', false)
    },
    async signInButtonClickHandler () {
      this.$store.dispatch('signIn', {
        email: this.email,
        password: this.password
      })
    }
  },
  computed: {
    ...mapState(['authorizationErrorList'])
  }
}
</script>
