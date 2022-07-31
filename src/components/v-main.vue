<template>  
    <header class="header">
      <div class="wrapper header__wrapper">
          <div class="logo">
              <router-link :to="{name: 'catalog'}"><h1>ПИЦЦА-БЫСТРО</h1></router-link>
          </div>

          <div class="header__button-block" id="basket" >
              <div class="header__button">Корзина ({{ BASKET.length }})</div>
              <router-link class="header__button order_btn" 
                           :to="{name: 'basket'}">Оформить заказ</router-link>
          </div>
      </div>
    </header>

    <main class="main">
        <div class="wrapper main__wrapper">
            <router-view></router-view>
        </div>
    </main>

</template>

<script>

    import { mapGetters } from 'vuex';

    export default{
        name: 'vMainVue',
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