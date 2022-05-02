<template>
  <div>
    <Header />
    <main class="main">
      <h2 class="no-login-info" v-if="!$auth.loggedIn">
        You aren't authorized. Please click "Login" to authorize on the site
      </h2>
      <ProjectsList
        v-if="$auth.loggedIn"
      />
    </main>
    <SignInForm
      v-if="$store.state.showSignInForm"
    />
    <ReNameProjectForm
      v-if="$store.state.showReNameProjectForm"
    />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  middleware: 'sign-in-check',
  created() {
    if (this.$auth.strategy.token.get()){
      this.$store.dispatch('getProjects')
    }
  }
}
</script>

<style lang="scss" scoped>
.main{
  display: flex;
  justify-content: center;
  background-color: #f4f4f4;
  padding-top: 46px;
  min-height: 100vh;
  .no-login-info{
    margin-top: 200px;
    text-align: center;
    max-width: 450px;
  }
}
</style>
