<template>
    <vCatalogVue></vCatalogVue>
    <vBasketVue></vBasketVue>
</template>

<script>
    import vCatalogVue from './v-catalog.vue'
    import vBasketVue from './v-basket.vue'

    export default{
        name: 'vMainVue',
        components: { vCatalogVue, vBasketVue },
        props: {},
        data() {
            return{ }
        },
        computed: {},
        methods: {},
        watch: {},
        mounted() {
            console.log('download main')
        }
    }

</script>

<style lang="scsss">

</style>