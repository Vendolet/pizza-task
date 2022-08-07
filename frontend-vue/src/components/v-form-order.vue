<template>

    <h2 class="h2">Оформление заказа</h2>

    <form class="form-order" @submit.prevent="validateForm">
        <label class="label" for="name">Введите ваше имя:</label>
        <input class="input"
               :class="{ input_invalid: v$.dataCustomer.name.$error }"
               type="text"
               id="name"
               v-model.trim="dataCustomer.name">
        <p class="input-invalid_text"
           v-if="v$.dataCustomer.name.$error">Поле должно быть заполнено и не короче двух символов</p>

        <label class="label"
               for="phone">Ваш номер мобильного телефона:</label>
        <div>
            <span class="prefix-tel">+7</span>
            <input class="input"
                   :class="{ input_invalid: v$.dataCustomer.phone.$error }"
                   id="phone" 
                   type="tel" 
                   pattern="[0-9]{10}"
                   placeholder="9124567890"
                   maxlength="10"
                   v-model="dataCustomer.phone">
        <p class="input-invalid_text" 
           v-if="v$.dataCustomer.phone.$error">Введите корректный ваш номер телефона</p>
        </div>

        <label class="label"
               for="address">Ваш адрес:</label>
        <textarea class="input address"
                  :class="{ input_invalid: v$.dataCustomer.address.$error }"
                  id="address"
                  v-model.trim="dataCustomer.address"></textarea>
        <p class="input-invalid_text"
           v-if="v$.dataCustomer.address.$error">Поле должно быть заполнено и не короче 10 символов</p>

        <div class="main__button-block">
            <input class="button button_big button_submit"
                   type="submit">
        </div>
    </form>
    
</template>

<script>
    import useVuelidate from '@vuelidate/core';
    import { mapGetters } from 'vuex';
    import axios from 'axios';
    import { required, numeric, minLength, maxLength } from '@vuelidate/validators';

    export default{
        name: 'vFormOrderVue',
        setup () {
            return { v$: useVuelidate() }
        },
        data() {
            return{
                dataCustomer: {
                    name: '',
                    phone: '',
                    address: ''
                }
            }
        },
        validations () {
            return {
                dataCustomer: {
                    name: { 
                        required, 
                        minLength: minLength(2)
                    },
                    phone: { 
                        required, 
                        numeric, 
                        maxLength: maxLength(10) 
                    },
                    address: { 
                        required, 
                        minLength: minLength(10) 
                    }
                }
            }
        },
        methods: {
            validateForm() {
                this.v$.dataCustomer.$touch();
                if(!this.v$.dataCustomer.$error){
                    console.log('Валидация прошла успешно.');  
                    this.sendOrder();
                }else{
                    console.log('Ошибка в форме');
                }
            },
            async sendOrder() {
                axios.post('http://pizza-market:81/api/basket', {
                    basket: this.BASKET,
                    dataCustomer: this.dataCustomer
                }).then((response) => {
                    console.log(response);
                }).catch((error) => {
                    console.log(error);
                })
            }
        },
        computed: {
            ...mapGetters([
                'BASKET'
            ])
        }
    }

</script>

<style lang="scss">

</style>