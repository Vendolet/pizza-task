<template>

    <h2 class="h2">Оформление заказа</h2>

    <form class="form-order">
        <label class="label" for="customer">Введите ваше имя:</label>
        <input class="input" type="text" name="customer" id="customer">
        <label class="label" for="phone">Ваш номер телефона:</label>
        <input class="input" type="tel" name="phone" id="phone" placeholder="8 123 45 678 90" maxlength="11">
        <label class="label" for="address">Ваш адрес:</label>
        <textarea class="input address" name="address" id="address"></textarea>

        <div class="main__button-block">
            <input class="button button_big button_submit" type="submit">
        </div>
    </form>
    
</template>

<script>

    export default{
        name: 'vFormOrderVue',
        data() {
            return{}
        },
        components: {},
        computed: {},
        methods: {},
        mounted() {
            console.log('download form')
        }
    }

</script>

<style lang="scss">

</style>