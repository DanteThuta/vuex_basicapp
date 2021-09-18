<template>
  <div id="app">
    <Todos/>
  </div>
</template>

<script>


import Todos from './components/Todos'
export default {
  name: 'App',
  components: {
    Todos,
    
  },
  mounted(){
    console.log(this.$store.state.Todos.sayHello);// getting state 
  }
}
</script>

<style>

</style>
