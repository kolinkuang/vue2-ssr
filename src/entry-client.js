import createApp from './main';

// active client side
const {app, router, store} = createApp();

// restore store instance
if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__);
}

router.onReady(() => {
    // mount and active
    app.$mount('#app');
});
