import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export function createStore() {
    return new Vuex.Store({
        state: {
            count: 0
        },
        mutations: {
            init(state, count) {
                state.count = count;
            },
            add(state) {
                state.count++;
            }
        },
        actions: {
            getCount({commit}) {
                return new Promise(resolve => {
                    setTimeout(() => {
                        commit('init', Math.random() * 100);
                        resolve();
                    }, 1000);
                });
            }
        }
    });
}
