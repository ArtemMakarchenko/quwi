<template>
  <div
    class="project-card"
    @click="cardClickHandler"
  >
    <div class="project-card__logo">
      <img
        :src="project.logo_url"
        alt="Project logo"
      >
    </div>
    <p class="project-card__name bold">{{ project.name }}</p>
    <p
      :class="[project.is_active ? 'active' : 'no-active', 'project-card__status bold']"
    >{{ project.is_active ? 'Active' : 'No Active'}}</p>
    <div class="project-card__spent-time">
      <p class="project-card__spent-time_item">time this week: <span class="bold">00:00:00</span></p>
      <p class="project-card__spent-time_item">this month: <span class="bold">00:00:00</span></p>
      <p class="project-card__spent-time_item">total: <span class="bold">00:00:00</span></p>
    </div> 
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: ['project'],
  methods: {
    cardClickHandler () {
      this.$store.commit('setShowReNameProjectForm', true)
      this.$store.commit('setProjectIdForChangingName', this.project.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.project-card{
  width: 100%;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #dedede;
  padding: 25px;
  cursor: pointer;
  font-size: .9em;
  transition: all 0.3s;
  &:hover{
    background-color: #ececec;
  }
  &__logo{
    flex: 1;
    max-width: 65px;
    margin-right: 25px;
    img{
      width: 100%;
      border-radius: 50%;
    }
  }
  &__name{
    flex: 2;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: clip;
  }
  &__status{
    flex: 0 0 200px;
    padding-left: 20px;
    &.active{
      color: #28881e;
    }
    &.no-active{
      color: red;
    }
  }
  &__spent-time{
    flex: 0 0 200px;
    &_item{
      display: flex;
      justify-content: space-between;
      margin-bottom: 5px;
      span{
        display: inline;
      }
    }
  }
}
</style>