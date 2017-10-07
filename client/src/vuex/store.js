import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const http = axios.create({
  baseURL: 'http://localhost:3000'
})

const store = new Vuex.Store({
  state: {
    questions: [],
    question: {},
    oneAnswer: ''
  },
  mutations: {
    setAllQuestions (state, payload) {
      state.questions = payload
    },
    setOneAnswer (state, payload) {
      state.oneAnswer = payload
    }
  },
  actions: {
    doLOgin ({commit}, auth) {
      http.post('/signin', {
        username: auth.username,
        password: auth.password
      })
    },
    getAllQuestions ({commit}) {
      http.get('/questions')
      .then(({data}) => {
        console.log('ini respon question', data)
        commit('setAllQuestions', data)
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
