import Vuex from "vuex"

const createStore = () => {
  return new Vuex.Store({
    state: {
        decks: ['zzz'],
    },
    mutations: {
      setDecks(state, payload) {
        state.decks = payload
      }
    },
    actions:{
        setDecksAction(VuexContext, payload) {
            const decks = payload
            VuexContext.commit('setDecks',decks)
        } 
    },
    getters:{
        decks(state){
            return state.decks
        }
    }

  })
}
export default createStore
