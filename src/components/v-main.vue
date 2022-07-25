<template>
    <VCatalogVue></VCatalogVue>
    <vBasket></vBasket>
</template>

<script>
    import vCatalogVue from './v-catalog.vue'
    import vBasketVue from './v-basket.vue'
import VCatalog from './v-catalog.vue'

    export default{
        name: 'vMainVue',
        components: { VCatalog },
        props: {},
        data() {
            return{
                title: ''
            }
        },
        computed: {},
        methods: {},
        watch: {},
        mounted() {
            console.log('download main')
        }
    }

</script>

<style>

</style>