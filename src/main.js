import Vue from 'vue';
import App from './App.vue';
import createRouter from './router';

Vue.config.productionTip = false;

// need to return an app factory: return router and vue instances, and store instance
export default function createApp(context) {
    // to handle first screen, will need to handle router jumping first
    const router = createRouter();
    const app = new Vue({
        router,
        context,
        render(h) {
            h(App);
        }
    });
    return {
        app, router
    };
}
