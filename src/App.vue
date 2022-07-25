<template>
  <header class="header">
      <div class="wrapper header__wrapper">
          <div class="logo">
              <a><h1>ПИЦЦА-БЫСТРО</h1></a>
          </div>

          <div class="header__button-block" id="basket" >
              <a class="header__button basket" href="basket.html">Корзина ({{ countOrders }})</a>
              <a class="header__button" href="basket.html">Оформить заказ</a>
          </div>
      </div>
  </header>
  <vMainVue></vMainVue>

  <footer class="footer">
      <div class="wrapper">
          <div class="footer__license"> 2022 Компания "ПИЦЦА-БЫСТРО"<br>Все права защищены</div>
          <div class="footer__callback">
              <div class="footer__email">
                  Обратная связь:<br>
                  <span class="important-text">kolobov.m.s@yandex.ru</span>
              </div>
              <div class="footer__develop">
                  Разработано - <br>
                  <span class="important-text">Для ПРОГРАММНЫЙ ЦЕНТР</span>
              </div>
          </div>
      </div>
  </footer>
</template>

<script>

    import vMainVue from './components/v-main.vue';

    export default {
        name: 'App',
        components: { vMainVue },
        data () {
          return{
            countOrders: 4
          }
        }
    }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
