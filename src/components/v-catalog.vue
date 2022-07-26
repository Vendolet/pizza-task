<template>
    <div class="wrapper main__wrapper"  >
        <h2 class="h2">Наши предложения</h2>

        <ul id="main" class="cards-field">
            <vCardVue v-for="product in PRODUCTS" 
                      :key="product.id" 
                      :productData="product"
                      @addProductToBasket="addProductToBasket"></vCardVue>
        </ul>
        <vPaginationVue></vPaginationVue>
    </div>
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
                'PRODUCTS'
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
        },
        watch: {},
        mounted() {
            this.GET_PRODUCTS()
                .then((response) => {
                    if(response.data){
                        console.log("Data arrived!");
                    }

            })
        }
    }

</script>

<style lang="sass">

</style>