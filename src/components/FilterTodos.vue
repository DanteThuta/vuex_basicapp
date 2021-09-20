<template>
    <div>
        <select name="" id="" v-model="limit" @change="FilterTodos(limit)">
            
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="50">50</option>
            <option value="100">100</option>
        </select>
    </div>
  
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data(){
        return{
            limit: null
        }
    },
    methods:mapActions(["FilterTodos"])
}   
</script>

<style>

</style>