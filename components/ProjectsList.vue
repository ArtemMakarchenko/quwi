<template>
  <div class="projects-list">
    <ProjectCard
      v-for="project in projectList"
      :key="project.item"
      :project="project"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ProjectsList',
  props: ['showReNameProjectForm'],
  computed: {
    ...mapState(['projectList'])
  }
}
</script>

<style lang="scss" scoped>
  .projects-list{
    margin: 15px auto 50px;
    width: 760px;
    position: relative;
    padding-bottom: 30px;
  }
</style>