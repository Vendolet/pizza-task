<template>
    <li class="card">
        <div class="wrapper-card-img">
            <img v-bind:src="require('../assets/img/' + productData.img)" class="card__img"  v-bind:alt="productData.note">
        </div>
        <p class="card__note">{{productData.note}}</p>
        <p class="card__price">{{productData.price}} р</p>
        <button v-on:click="addProduct(productData.id)"
                class="card__button"
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
            addProduct(){
                return this.$emit('addProduct', this.productData.id);
            }
        },
    }

</script>

<style lang="scss">

</style>