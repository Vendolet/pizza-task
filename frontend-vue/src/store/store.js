import { createStore } from "vuex";
import axios from "axios";

let store = createStore({
    state: { 
        products: [],
        basket: []
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        },
        SET_BASKET: (state, product) => {
            state.basket.push(product);
        },
        REMOVE_BASKET: (state, index) => {
            state.basket.splice(index, 1);
        }
    },
    actions: {
        GET_PRODUCTS({commit}){
            return axios('http://pizza-market:81/api', {
                method: "GET"
            }).then((products) => {
                commit('SET_PRODUCTS_TO_STATE', products.data);
                return products;
            }).catch((error) => {
                console.log(error);
                return error;
            })
        },
        ADD_TO_BASKET({commit}, product){
            commit('SET_BASKET', product);
        },
        DELETE_FROM_BASKET({commit}, index){
            commit('REMOVE_BASKET', index);
        }
    },
    getters: {
        PRODUCTS(state){
            return state.products;
        },
        BASKET(state){
            return state.basket;
        }
    }
});

export default store;