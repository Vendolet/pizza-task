<template>

    <h2 class="h2">Наши предложения</h2>

    <ul id="main" class="cards-field">
        <vCardVue v-for="product in PRODUCTS" 
                    :key="product.id" 
                    :productData="product"
                    @addProductToBasket="addProductToBasket"></vCardVue>
    </ul>
    
    <vPaginationVue :current_page="PAGINATION.current_page"
                    :last_page="PAGINATION.last_page"
                    :next_page_url="PAGINATION.next_page_url"
                    :prev_page_url="PAGINATION.prev_page_url"></vPaginationVue>
</template>

<script>
    import vCardVue from './v-card.vue';
    import { mapActions, mapGetters } from 'vuex';
    import vPaginationVue from './v-pagination.vue';

    export default{
        name: 'vCatalogVue',
        components: {
                vCardVue,
                vPaginationVue
            },
        props: {},
        data() {
            return{}
        },
        computed: {
            ...mapGetters([
                'PRODUCTS',
                'PAGINATION'
            ])
        },
        methods: {
            ...mapActions([
                'GET_PRODUCTS',
                'ADD_TO_BASKET'
            ]),
            addProductToBasket(data){
                this.ADD_TO_BASKET(data);
            }
        }
    }
</script>

<style lang="sass">

</style>