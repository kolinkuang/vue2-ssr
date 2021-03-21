import Vue from 'vue';
import App from './App.vue';
import createRouter from './router';
import {createStore} from './store';

Vue.config.productionTip = false;

// add a global mixin, to handle client side asyncData calling
Vue.mixin({
    beforeMount() {
        const {asyncData} = this.$options;
        if (asyncData) {
            asyncData({
                store: this.$store,
                route: this.$route
            });
        }
    }
});

// need to return an app factory: return router and vue instances, and store instance
export default function createApp(context) {
    // to handle first screen, will need to handle router jumping first
    const router = createRouter();
    const store = createStore();
    const app = new Vue({
        router,
        context,
        store,
        render(h) {
            return h(App);
        }
    });
    return {
        app, router, store
    };
}
