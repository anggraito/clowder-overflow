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
    login: false,
    user: null,
    msgUpdate: '',
    msgError: ''
  },
  mutations: {
    setAllQuestions (state, payload) {
      state.questions = payload
    },
    setOneAnswer (state, payload) {
      state.oneAnswer = payload
    },
    setLogin (state, payload) {
      localStorage.setItem('token', payload)
      console.log(state.login)
      Router.go('/')
    },
    setError (state, payload) {
      state.msgError = payload
    },
    saveQuest (state, payload) {
      state.questions.push(payload)
      Router.push('/questions/' + payload._id)
    }
  },
  actions: {
    doLogin ({commit}, auth) {
      http.post('/signin', {
        username: auth.loginUsername,
        password: auth.loginPass
      })
      .then(response => {
        console.log(response.data)
        if (response.data.message !== 'Mboten saget mriki, kuncine mboten ceples') {
          localStorage.clear()
          // localStorage.setItem('token', response.data)
          console.log()
          commit('setLogin', response.data)
        } else {
          commit('setError', response.data.message)
        }
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
    },
    submitQuestion ({commit}, newQuest) {
      http.post('/questions', {
        title: newQuest.title,
        question: newQuest.question
      }, {
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then(result => {
        commit('saveQuestion', result.data)
      })
      .catch(err => console.log(err.message))
    }
  }
})

export default store
