import { createRouter, createWebHashHistory } from "vue-router";
import vCatalogVue from "../components/v-catalog";
import vBasketVue from "../components/v-basket";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', name: 'catalog', component: vCatalogVue },
        { path: '/basket', name: 'basket', component: vBasketVue }
    ]
});

export default router;