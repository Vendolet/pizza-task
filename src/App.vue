<template>
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
          return{}
        }
    }
</script>

<style>

</style>
