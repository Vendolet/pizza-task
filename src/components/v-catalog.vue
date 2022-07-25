<template>
    <div class="wrapper main__wrapper"  >
        <h2 class="h2">Наши предложения</h2>

        <ul id="main" class="cards-field">
            <vCardVue v-for="product in products" 
                      v-bind:key="product.id" 
                      v-bind:productData="product"
                      @addProduct="showDataToConsole"></vCardVue>
        </ul>
        <vPaginationVue></vPaginationVue>
    </div>
</template>

<script>
    import vCardVue from './v-card.vue';
    import vPaginationVue from './v-pagination.vue';

    export default{
        name: 'vCatalogVue',
        components: {
                vCardVue,
                vPaginationVue
            },
        props: {},
        data() {
            return{
                products: [
                    {
                        id: 1,
                        note: "Пицца АМЕРИКАНО",
                        price: 500,
                        img: "americano.jpg"
                    },
                    {
                        id: 2,
                        note: "Пицца БРОККОЛИ",
                        price: 520,
                        img: "broccole.jpg"
                    },
                    {
                        id: 3,
                        note: "Пицца с цыплёнком",
                        price: 480,
                        img: "checkee.jpg"
                    },
                    {
                        id: 4,
                        note: "Пицца классическая",
                        price: 450,
                        img: "classic.jpg"
                    },
                    {
                        id: 5,
                        note: "Пицца СЫР",
                        price: 560,
                        img: "don-cheeze.jpeg"
                    },
                    {
                        id: 6,
                        note: "Пицца МЯСНАЯ",
                        price: 620,
                        img: "meet.jpg"
                    },
                    {
                        id: 7,
                        note: "Пицца ПАПРИКА",
                        price: 650,
                        img: "paprika.jpg"
                    },
                    {
                        id: 8,
                        note: "Пицца ПЕППЕРОНИ",
                        price: 540,
                        img: "pepperoni-lajt.jpg"
                    }
                ]
            }
        },
        computed: {},
        methods: {
            showDataToConsole(data){
                console.log(data);
            }
        },
        watch: {},
        mounted() {
            console.log('download catalog')
        }
    }

</script>

<style lang="sass">

</style>