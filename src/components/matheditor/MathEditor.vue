<template>
  <div class="math-editor">
    <h1>Editor</h1>
    <math-field
        @focus="ping"
        :on-keystroke="displayKeystroke"
        v-model="formula"
    >
      f(x)=
    </math-field>
  </div>
</template>

<script>
export default {
  name: 'Math-editor',
  data () {
    return {
      formula:""
    }
  },
  methods: {
    ping (){
      console.log('pong')
    },
    displayKeystroke($event){
      console.log($event)
    }
  },
  watch: {

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