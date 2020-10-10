import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        num: 0,
        users: []
    },

    getters: {
        getNum(state) {
            return state.num
        },

        getUsers(state) {
            return state.users
        }
    },

    actions: {
        increment({state, commit}) {
            let num = state.num + 1
            commit("increment", num)
        },

        decrement({state, commit}) {
            let num = state.num - 1
            commit('decrement', num)
        },

        getUsers({commit}) {
           axios.get("https://jsonplaceholder.typicode.com/posts")
                .then(res => {
                    commit("getUsers", res.data)
                })
        }
    },

    mutations: {
        increment(state, payload) {
            state.num = payload
        },

        decrement(state, payload) {
            state.num = payload
        },

        getUsers(state, payload) {
            state.users = payload
        }
    }
})

export default store