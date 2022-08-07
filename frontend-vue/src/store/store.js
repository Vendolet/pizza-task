import { createStore } from "vuex";
import axios from "axios";

let store = createStore({
    state: { 
        products: [],
        basket: [],
        pagination: {
            first_page_url: null,
            last_page_url: null,
            next_page_url: null,
            prev_page_url: null,
            last_page: null,
            current_page: null
        },
        startPage: 'http://pizza-market:81/api'
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, response) => {
            state.products = response.data;
        },
        SET_PAGINATION_TO_STATE: (state, response) => {
            state.pagination.current_page = response.current_page,
            state.pagination.last_page = response.last_page,
            state.pagination.last_page_url = response.last_page_url,
            state.pagination.first_page_url = response.first_page_url,
            state.pagination.next_page_url = response.next_page_url,
            state.pagination.prev_page_url = response.prev_page_url
        },
        SET_BASKET: (state, product) => {
            state.basket.push(product);
        },
        REMOVE_BASKET: (state, index) => {
            state.basket.splice(index, 1);
        },
        CLEAR_BASKET: (state) => {
            state.basket = [];
        }
    },
    actions: {
        GET_PRODUCTS({commit}, link){
            return axios(link, {
                method: "GET"
                }).then((response) => {
                    commit('SET_PRODUCTS_TO_STATE', response.data);
                    commit('SET_PAGINATION_TO_STATE', response.data);
                    return response;
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
        },
        CLEAR_BASKET({commit}){
            commit('CLEAR_BASKET');
        }
    },
    getters: {
        PRODUCTS(state){
            return state.products;
        },
        BASKET(state){
            return state.basket;
        },
        PAGINATION(state){
            return state.pagination;
        },
        START_PAGE(state){
            return state.startPage;
        }
    }
});

export default store;