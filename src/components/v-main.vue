<template>
    <vCatalogVue></vCatalogVue>
    <vBasketVue v-if="BASKET.length"
                :basketData="BASKET"></vBasketVue>
</template>

<script>
    import vCatalogVue from './v-catalog.vue';
    import vBasketVue from './v-basket.vue';
    import { mapGetters } from 'vuex';

    export default{
        name: 'vMainVue',
        components: { 
            vCatalogVue,
            vBasketVue 
        },
        props: {

        },
        data() {
            return{ }
        },
        computed: {
            ...mapGetters([
                'BASKET'
            ])
        },
        methods: {},
        watch: {},
        mounted() {
            console.log('download main')
        }
    }

</script>

<style lang="scsss">

</style>