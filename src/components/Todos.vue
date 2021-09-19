<template>
  <div>
      <h4 class="text-primary text-center my-4">Todos</h4>
      <div class="container">
          <div class="row">
              <div class="col-md-4 my-4" v-for="todo in myTodos" :key="todo.id">
                  <b-card bg-variant="primary" text-variant="white" class="text-center">
                     <b-card-text>{{todo.title}}</b-card-text>
                    </b-card>
              </div>
          </div>
      </div>
  </div>
  
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    computed:mapGetters(["myTodos"]),
    methods: mapActions(["getTodos"]),
    mounted(){
        this.getTodos()
    }
}
</script>

<style>

</style>