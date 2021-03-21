// used in first screen rendering
import createApp from './main';

// context is introduced by renderer
export default context => {
    return new Promise((resolve, reject) => {
        // to get router and app instances
        const {app, router} = createApp();

        // to get first screen URL
        router.push(context.url);
        router.onReady(() => {
            resolve(app);
        }, reject);
    });
};
