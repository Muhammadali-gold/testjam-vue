<template>
  <div class="navbar">
    <div class="project-name">{{ project }}</div>
    <div class="logout">
      <ui-button @click="logout" raised>Logout</ui-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav-bar',
  data () {
    return {
      project: "UnLimited Space"
    }
  },
  methods: {
    logout () {
      console.log('logout')
    }
  }
}
</script>

<style scoped>
  .navbar {
    display: flex;
    margin-top: 2%;
  }
  .project-name {
    width: 80%;
    margin-left: 5%;
  }
</style>