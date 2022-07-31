<template>
    <li class="card">
        <div class="wrapper-card-img">
            <img class="card__img" 
                 :src="require('../assets/img/' + productData.img)" 
                 :alt="productData.note">
        </div>
        <p class="card__note">{{productData.note}}</p>
        <p class="card__price">{{productData.price}} р</p>
        <button class="card__button"
                v-on:click="addProductToBasket"
                v-bind:id="productData.id">В корзину</button>
    </li>
</template>

<script>
    export default{
        name: 'vCardVue',
        props: {
            productData: {
                type: Object,
                default () {
                    return {}
                }
            }
        },
        data() {
            return{}
        },
        computed: {},
        methods: {
            addProductToBasket(){
                this.$emit('addProductToBasket', this.productData)
            }
        },
    }
</script>

<style lang="scss">

</style>