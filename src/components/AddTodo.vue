<template>
  <div class="input-group mb-3">
      <!-- {{newTodo.title}} -->
  <input type="text" class="form-control" v-model="newTodo.title" placeholder="Add a Task" aria-label="Recipient's username" aria-describedby="basic-addon2">
  <div class="input-group-append">
    <button class="btn btn-primary" @click="addTodo(newTodo)">Add Task</button>
  </div>
</div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    data(){
        return {
            newTodo:{
                title:""
            }
        }
    },
    methods: mapActions(["addTodo"])
}
</script>

<style>

</style>