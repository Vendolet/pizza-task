<template>
    <li class="order">
        <img class="order__img" 
             :src="require('../assets/img/' + productOfBasketData.img)" 
             :alt="productOfBasketData.note">
        <p class="order__note">{{productOfBasketData.note}}</p>
        <p class="order__price">{{productOfBasketData.price}} р</p>
        <button class="button"
                @click="removeProductOfBasket()">Удалить</button>
    </li>
</template>

<script>
    export default{
        name: 'vCardVue',
        props: {
            productOfBasketData: {
                type: Object,
                default () {
                    return {}
                }
            }
        },
        data() {
            return{}
        },
        methods: {
            removeProductOfBasket(){
                this.$emit('removeProductOfBasket');
            }
        },
    }
</script>

<style lang="scss">

</style>