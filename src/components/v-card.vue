<template>
    <div class="wrapper-card-img">
        <img v-bind:src="pizz.img" class="card__img"  v-bind:alt="pizz.note">
    </div>
    <p class="card__note">{{pizz.note}}</p>
    <p class="card__price">{{pizz.price}} р</p>
    <button v-on:click="addOrder(pizz.id)"
            class="card__button"
            v-bind:id="pizz.id">В корзину</button>
</template>

<script>
    export default{
        name: 'vCardVue',
        components: {},
        props: {},
        data() {
            return{
                pizz: {
                    img: 'img',
                    note: 'Pizz',
                    price: 100
                }
            }
        },
        computed: {},
        methods: {},
        watch: {},
        mounted() {
            console.log('download catalog')
        }
    }

</script>

<style>

</style>