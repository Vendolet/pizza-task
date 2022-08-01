const basket = Vue.createApp({
    data() {
            return{
                countOrders: 0,
                orders: []
            }
    },
    methods: {
        removeOrder(){
            
        }
    }
}).mount('#basket');

const cards = Vue.createApp({
    data() {
        return{
            currentPage: 1,
            numPage: 3,
            allPizz: [
                {
                    id: 1,
                    note: 'Пицца АМЕРИКАНО',
                    price: 500,
                    img: './access/img/americano.jpg'
                },
                {
                    id: 2,
                    note: 'Пицца БРОККОЛИ',
                    price: 520,
                    img: './access/img/broccole.jpg'
                },
                {
                    id: 3,
                    note: 'Пицца с цыплёнком',
                    price: 480,
                    img: './access/img/checkee.jpg'
                },
                {
                    id: 4,
                    note: 'Пицца классическая',
                    price: 450,
                    img: './access/img/classic.jpg'
                },
                {
                    id: 5,
                    note: 'Пицца СЫР',
                    price: 560,
                    img: './access/img/don-cheeze.jpeg'
                },
                {
                    id: 6,
                    note: 'Пицца МЯСНАЯ',
                    price: 620,
                    img: './access/img/meet.jpg'
                },
                {
                    id: 7,
                    note: 'Пицца ПАПРИКА',
                    price: 650,
                    img: './access/img/paprika.jpg'
                },
                {
                    id: 8,
                    note: 'Пицца ПЕППЕРОНИ',
                    price: 540,
                    img: './access/img/pepperoni-lajt.jpg'
                }
            ]
        }
    },
    methods: {
        addOrder(idOrder){
            basket.countOrders += 1;

            let PizzInBasket = this.allPizz.find( (pizz) => {
                if (pizz.id === idOrder){
                    return true;
                }
            })

            basket.orders.push(PizzInBasket);
        }
    }
}).mount('#main');

const pagination = Vue.createApp({
    data() {
        return {
            currentPage: 1,
            allPage: 3,
            disablePrev: true,
            disableNext: this.allPage > this.currentPage
        };
    },
    methods: {
        prevPage(){
            if(this.currentPage > 1){
                this.currentPage -= 1;
                this.disableNext = false;
                if ( this.currentPage === 1 ){
                    this.disablePrev = true;
                }
            }
        },
        nextPage(){
            if(this.currentPage < this.allPage){
                this.currentPage += 1;
                this.disablePrev = false;

                if( this.currentPage === this.allPage ){
                    this.disableNext = true;
                }

                this.newPage(this.currentPage);
            }
        },
        newPage(numPage){
            cards.allPizz = [
                    {
                        id: 6,
                        note: 'Пицца МЯСНАЯ',
                        price: 620,
                        img: './access/img/meet.jpg'
                    },
                    {
                        id: 7,
                        note: 'Пицца ПАПРИКА',
                        price: 650,
                        img: './access/img/paprika.jpg'
                    },
                    {
                        id: 8,
                        note: 'Пицца ПЕППЕРОНИ',
                        price: 540,
                        img: './access/img/pepperoni-lajt.jpg'
                    }
                ]
        }
    }
}).mount('#pagination');