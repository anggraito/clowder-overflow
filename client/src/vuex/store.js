import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Router from '../router/index'

Vue.use(Vuex)
const http = axios.create({
  baseURL: 'http://localhost:3000'
})

const store = new Vuex.Store({
  state: {
    questions: [],
    question: {},
    login: '',
    oneAnswer: ''
  },
  mutations: {
    setAllQuestions (state, payload) {
      state.questions = payload
    },
    setOneAnswer (state, payload) {
      state.oneAnswer = payload
    },
    setLogin (state, payload) {
      if (payload.data.err) state.login = payload
      else {
        localStorage.setItem('accesstoken', payload.data.token)
        Router.go('/')
      }
    }
  },
  actions: {
    doLogin ({commit}, auth) {
      http.post('/signin', {
        username: auth.username,
        password: auth.password
      })
      .then(response => {
        commit('setLogin', response)
      })
      .catch(err => console.log(err))
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
