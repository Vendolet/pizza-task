<template>
    <p>Basket</p>
    <vBasketItemVue v-for="(item, index) in basketData"
                    :key="item.id"
                    :productOfBasketData="item"
                    @removeProductOfBasket="removeProductOfBasket(index)">
    </vBasketItemVue>
</template>

<script>
    import vBasketItemVue from './v-basket-item.vue';
    import { mapActions } from 'vuex';

    export default{
        name: 'vBasketVue',
        components: {
            vBasketItemVue
        },
        props: {
            basketData: {
                type: Array,
                default() {
                    return [];
                }
            }
        },
        data() {
            return{}
        },
        computed: {},
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