<template>
  <div
    @click="closeHandler"
    class="popup-bg"
  >
    <div
      @click.stop
      class="popup-form"
    >
      <p class="popup-form__title">Change project name</p>
      <input
        v-model="projectName"
        type="text"
        placeholder="Project name"
      >
      <button
        @click="changeProjectName"
      >Change Name</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReNameProjectForm',
  props: ['showReNameProjectForm'],
  data: () => ({
    projectName: ''
  }),
  methods: {
    closeHandler () {
      this.$store.commit('setShowReNameProjectForm', false)
      this.$store.commit('setProjectIdForChangingName', null)
    },
    async changeProjectName () {
      await this.$store.dispatch('changeProjectName', this.projectName)
      this.closeHandler()
      this.$nuxt.refresh()
    }
  },
  created () {
    this.projectName = this.$store.state.projectList.find(item => item.id === this.$store.state.projectIdForChangingName).name        
  }
}
</script>
