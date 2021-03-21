// used in first screen rendering
import createApp from './main';

// context is introduced by renderer
export default context => {
    return new Promise((resolve, reject) => {
        // to get router and app instances
        const {app, router, store} = createApp(context);

        // to get first screen URL
        router.push(context.url);
        router.onReady(() => {
            // to fetch async data right here
            // fetch all matched components
            // matched === current matched component and all its children
            const matched = router.getMatchedComponents();

            // 404
            if (!matched.length) {
                return reject({code: 404});
            }

            // iterate matched, see if they have asyncData inside
            // execute them if they exist, return them when the execution is done
            Promise.all(
                matched.map(component => {
                    if (component.asyncData) {
                        return component.asyncData({
                            store,
                            route: router.currentRoute
                        });
                    }
                })
            ).then(() => {
                context.state = store.state;
                // rendered will serialize states to strings, window.__INITIAL_STATE__
                // context.state === window.__INITIAL_STATE__
                // and deserialize them before actual being used at frontend
                resolve(app);
            }).catch(reject);
        }, reject);
    });
};
