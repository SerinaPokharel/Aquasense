// store/index.js
import { createStore } from 'vuex';

const store = createStore({
    state: {
        isAuthenticated: false,
        token: null,
        // other state properties...
    },
    mutations: {
        setAuth(state, payload) {
            state.isAuthenticated = payload.isAuthenticated;
            state.token = payload.token;
        },
        // other mutations...
    },
    actions: {
        // actions for handling asynchronous operations...
    },
    getters: {
        // getters for computed state properties...
    },
});

export default store;
