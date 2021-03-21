import createApp from './main';

// active client side
const {app, router} = createApp();

router.onReady(() => {
    // mount and active
    app.$mount('#app');
});
