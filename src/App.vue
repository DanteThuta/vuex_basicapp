<template>
  <div id="app">
    <h2>{{$store.state.Todos.sayHello}}</h2>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  },
  mounted(){
    console.log(this.$store.state.Todos.sayHello);// getting state 
  }
}
</script>

<style>

</style>
