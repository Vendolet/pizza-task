<template>

    <h2 class="h2" v-if="BASKET.length">Ваша корзина</h2>
    <h2 class="h2" v-else >Ваша корзина пуста</h2>

    <ul class="list-orders">
        <vBasketItemVue v-for="(item, index) in BASKET"
                        :key="item.id"
                        :productOfBasketData="item"
                        @removeProductOfBasket="removeProductOfBasket(index)">
        </vBasketItemVue>
    </ul>

    <div v-if="BASKET.length" class="main__button-block">
        <a href="order.html" class="button button_big button_submit">Оформить заказ</a>
    </div>
    
</template>

<script>
    import vBasketItemVue from './v-basket-item.vue';
    import { mapActions, mapGetters } from 'vuex';

    export default{
        name: 'vBasketVue',
        components: {
            vBasketItemVue
        },
        props: {
            // basketData: {
            //     type: Array,
            //     default() {
            //         return [];
            //     }
            // }
        },
        data() {
            return{}
        },
        computed: {
            ...mapGetters([
                "BASKET"
            ])
        },
        methods: {
            ...mapActions([
                "DELETE_FROM_BASKET"
            ]),
            removeProductOfBasket(index){
                this.DELETE_FROM_BASKET(index);
            }
        },
        watch: {},
        mounted() {
            console.log('download basket')
        }
    }

</script>

<style lang="scss">

</style>