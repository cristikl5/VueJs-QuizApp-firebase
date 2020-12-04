import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        currentQuestionId: 0,
        answers: [
            {id: 1, correct: true || false}
        ],
        // results: {
        //     correct: 0,
        //     incorrect_answers: 0
        // },
        // questions: [
        //     {
        //         id: 1,
        //         correct: true || false
        //     }
        // ],
    },
    getters: {
        correctAnswers(state) {
            return state.answers.map(item => item.correct)
        }
    },
    mutations: {

    },
    actions: {}
});




