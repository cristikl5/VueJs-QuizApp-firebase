import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    answers: [],
    round: 1,
  },
  getters: {
      getAnswers: (state) => {
          return state.answers;
      },
      getRound: (state) => {
          return state.round;
      }
  },
  mutations: {
   results(state,payload) {
     state.answers=payload
   },
   addAnswer(state, payload) {
     state.answers.push({id: payload.id, correct: payload.value, round: payload.round})
   },
   addRound(state, payload) {
     state.round = payload.round;
   }

  },
  actions: {
      setCurrentQuestionId({ commit }, results) {
      console.log(results, 'results');
      commit('addAnswer', results)
    },
      setRound({ commit }, results) {
      console.log(results, 'results');
      commit('addRound', results)
    },
  }
});
