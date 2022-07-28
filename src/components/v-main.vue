<template>  
    <header class="header">
      <div class="wrapper header__wrapper">
          <div class="logo">
              <router-link :to="{name: 'catalog'}"><h1>ПИЦЦА-БЫСТРО</h1></router-link>
          </div>

          <div class="header__button-block" id="basket" >
              <div class="header__button basket">Корзина ({{ BASKET.length }})</div>
              <router-link class="header__button" 
                           :to="{name: 'basket'}">Оформить заказ</router-link>
          </div>
      </div>
    </header>

    <main class="main">
        <div class="wrapper main__wrapper">
            <router-view></router-view>
            <!-- <vCatalogVue></vCatalogVue>
            <vBasketVue :basketData="BASKET"></vBasketVue> -->
        </div>
    </main>

</template>

<script>

    import { mapGetters } from 'vuex';
    // import vCatalogVue from './v-catalog.vue';
    // import vBasketVue from './v-basket.vue';

    export default{
        name: 'vMainVue',
        // components: { vCatalogVue, vBasketVue },
        props: {},
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

<style lang="scss">

</style>