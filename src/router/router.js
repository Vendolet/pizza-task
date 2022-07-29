import { createRouter, createWebHashHistory } from "vue-router";
import vCatalogVue from "../components/v-catalog";
import vBasketVue from "../components/v-basket";
import vFormOrderVue from "../components/v-form-order";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', name: 'catalog', component: vCatalogVue },
        { path: '/basket', name: 'basket', component: vBasketVue },
        { path: '/formOrder', name: 'formOrder', component: vFormOrderVue }
    ]
});

export default router;