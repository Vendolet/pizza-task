<template>
    <div id="pagination" class="main__button-block">
            <button v-on:click="prevPage"
                    :class="isPrevDisable"
                    class="button_big">ПРЕДЫДУЩАЯ</button>

            <button class="button_disable button_active" 
                    id="currentPage">{{ current_page }}</button>

            <button v-on:click="nextPage" 
                    :class="isNextDisable"
                    class="button_big">СЛЕДУЮЩАЯ</button>
    </div>
</template>

<script>

    import { mapActions } from 'vuex';

    export default{
        name: 'vPaginationVue',
        props: {
            current_page: Number,
            last_page: Number,
            next_page_url: String,
            prev_page_url: String
        },
        data() {
            return{
                linkStartPage: 'http://pizza-market:81/api'
            }
        },
        computed: {
            isPrevDisable(){
                if(this.current_page < 2){
                    return 'button_disable'
                }else{
                    return 'button';
                }
            },
            isNextDisable(){
                if (this.current_page >= this.last_page){
                    return 'button_disable'
                }else{
                    return 'button';
                }
            }
        },
        methods: {
            ...mapActions([
                'GET_PRODUCTS'
            ]),
            nextPage(){
                this.linkStartPage = this.next_page_url;
                this.GET_PRODUCTS( this.linkStartPage );
            },
            prevPage(){
                this.linkStartPage = this.prev_page_url;
                this.GET_PRODUCTS( this.linkStartPage );
            }
        },
        mounted() {
            console.log('download pagination');
            this.GET_PRODUCTS( this.linkStartPage );
        }
    }

</script>

<style lang="scss">

</style>