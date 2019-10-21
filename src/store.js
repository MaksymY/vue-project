import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contactModal: true,
  },
  mutations: {
    TOGGLE_CONTACT_MODAL(state) {
			state.contactModal = !state.contactModal;
		},
  },
  actions: {
    toggleContactModal({ commit }) {
			commit("TOGGLE_CONTACT_MODAL");
		},
  }
})
