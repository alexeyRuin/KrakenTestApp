import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        result: null,
        pairs: ['XBTEUR','XBTUSD','ZECJPY','XRPXBT','ETCETH']
    },
    actions: {
        fetch({commit, state}) {
            axios.get('https://api.kraken.com/0/public/Ticker', {
                params: {
                pair: state.pairs.join(',')
                }})
            .then(response => {
                commit('data', response.data.result)
            })
            .catch(function (error) {
                console.log(error);
            });
        },
    },
    mutations: {
        data(state, id) {
            state.result = id
        },
        add(state, id) {
            var index = state.pairs.findIndex(a => a === id);
            if (index < 0) state.pairs.push(id)
        },
        rem(state, id) {
            var index = state.pairs.findIndex(a => a === id);
            state.pairs.splice(index, 1)
        }
    },
})