<template>
  <header class="header">
    <nuxt-link to="/">
      <img
        src="../assets/img/logo.png"
        alt="logo"
        class="header__logo"
      >
    </nuxt-link>
    <nav class="app-nav">
      <ul>
        <li>
          <nuxt-link to="/">Projects</nuxt-link>
        </li>
        <li
          @click="logClickHandler"
        >{{ $auth.loggedIn ? 'Logout' : 'LogIn' }}</li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    async logClickHandler () {
      if (!this.$auth.loggedIn) {
        this.$store.commit('setShowSignInForm', true)
        return
      }
      this.$store.commit('setProjectList', [])
      this.$auth.logout()
    }
  }
}
</script>

<style lang="scss" scoped>
.header{
  background: #fafafa;
  border: none;
  box-shadow: 0 0 10px #00000045;
  padding-right: 20px;
  padding: 10px;
  height: 46px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  position: fixed;
  z-index: 2;
  &__logo{
    height: 90%;
  }
  .app-nav{
    display: flex;
    align-items: center;
    ul{
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      li, a{
        font-size: 14px;
        text-decoration: none;
        text-transform: uppercase;
        margin-right: 20px;
        color: #b1b4b4;
        cursor: pointer;
        &:hover{
          color: #a4a4a4;
        };
      }
    }
  }
}
</style>