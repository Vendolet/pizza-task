<template>
    <div id="pagination" class="main__button-block">
            <button v-on:click="prevPage" 
                    class="button button_big">ПРЕДЫДУЩАЯ</button>

            <button class="button button_active" 
                    id="currentPage">1</button>

            <button v-on:click="nextPage" 
                    class="button button_big">СЛЕДУЮЩАЯ</button>
    </div>
</template>

<script>
    export default{
        name: 'vPaginationVue',
        components: {},
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
            console.log('download catalog')
        }
    }

</script>

<style lang="scss">

</style>