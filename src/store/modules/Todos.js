import axios from 'axios'

export default {
    state: {
        todos:[]
    },
    getters: {
        myTodos(state){
            return state.todos;
        }
    },
    mutations:{
        setTodos(state,todos){
            state.todos = todos;
        },
        setTodo(state,newTodo){
            state.todos.unshift(newTodo);
        }
    },
    actions: {
        // commit required to run actions 
        async getTodos({commit}){
            let res = await axios.get("https://jsonplaceholder.typicode.com/todos");
            // console.log(res.data);
            let todos = res.data;

            commit('setTodos',todos);
        },
        async addTodo({commit},newTodo){
            let res = await axios.post("https://jsonplaceholder.typicode.com/todos",newTodo);
            console.log(res.data);
            commit("setTodo",res.data);
        }
    }
}