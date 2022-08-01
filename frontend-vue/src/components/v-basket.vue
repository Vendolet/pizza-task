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

    <p class="total-price"> Добавлено товаров на сумму: {{calcTotalPriceOrders}} р</p>

    <div v-if="BASKET.length" class="main__button-block">
        <router-link :to="{name: 'formOrder'}" class="button button_big button_submit">Оформить заказ</router-link>
    </div>
    
</template>

<script>
    import vBasketItemVue from './v-basket-item.vue';
    import { mapActions, mapGetters } from 'vuex';

    export default{
        name: 'vBasketVue',
        data() {
            return{}
        },
        components: {
            vBasketItemVue
        },
        computed: {
            ...mapGetters([
                "BASKET"
            ]),
            calcTotalPriceOrders () {
                let result = 0;
                for (let item of this.BASKET){
                    result += item.price;
                }

                return result;
            }
        },
        methods: {
            ...mapActions([
                "DELETE_FROM_BASKET"
            ]),
            removeProductOfBasket(index){
                this.DELETE_FROM_BASKET(index);
            }
        },
        mounted() {
            console.log('download basket')
        }
    }

</script>

<style lang="scss">

</style>