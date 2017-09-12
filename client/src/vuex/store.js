import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const http = axios.create({
  baseURL: 'http://localhost:3000'
})

const store = new Vuex.Store({
  state: {
    allQuestions: '',
    oneAnswer: ''
  },
  mutations: {
    setAllQuestions (state, payload) {
      state.allQuestions = payload
    },
    setOneAnswer (state, payload) {
      state.oneAnswer = payload
    }
  },
  actions: {
    getAllQuestions ({commit}) {
      http.get('/questions')
      .then(response => {
        commit('setAllQuestions', response.data)
      })
      .catch(err => console.log(err))
    },
    getAnswers (context, id) {
      console.log('belum punya answers', id)
      http.get(`/questions/${id}/answers`)
      .then(response => {
        context.commit('setOneAnswer', response.data)
      })
      .catch(err => console.log(err))
    }
  }
})

export default store
