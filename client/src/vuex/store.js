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
    msgError: '',
    answers: []
  },
  mutations: {
    setAllQuestions (state, payload) {
      state.questions = payload
    },
    setAnswers (state, payload) {
      state.setAnswers = payload
    },
    setQuestion (state, payload) {
      state.question = payload
    },
    setLogin (state, payload) {
      localStorage.setItem('token', payload)
      Router.go('/')
    },
    setError (state, payload) {
      state.msgError = payload
    },
    saveQuest (state, payload) {
      state.questions.push(payload)
      Router.push('/questions')
    },
    saveAnswer (state, payload) {
      state.answers.push(payload)
      Router.push('/questions/' + payload._id)
    },
    setDelete (state, payload) {
      state.msgUpdate = payload
      Router.push('/')
    }
  },
  actions: {
    doLogin ({commit}, auth) {
      http.post('/signin', {
        username: auth.loginUsername,
        password: auth.loginPass
      })
      .then(response => {
        if (response.data.message !== 'Mboten saget mriki, kuncine mboten ceples') {
          localStorage.clear()
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
        commit('setAllQuestions', data)
      })
      .catch(err => console.log(err))
    },
    getQuestion ({commit}, id) {
      http.get(`/questions/${id}`, {
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then(({data}) => {
        commit('setQuestion', data)
      })
      .catch(err => console.log(err))
    },
    deleteQuestion ({commit}, id) {
      http.delete(`/questions/${id}`, {
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then(() => {
        commit('setDelete', 'success')
      })
      .catch(err => console.error(err))
    },
    getAnswers (context, id) {
      http.get(`/questions/${id}/answers`, {
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then(response => {
        context.commit('setAnswers', response.data)
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
    },
    submitAnswer ({commit}, id, data) {
      http.post(`questions/${id}/reply`, {
        answer: data.newAnswer
      }, {
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then(result => {
        commit('saveAnswer', result.data)
      })
      .catch(err => console.log(err.message))
    }
  }
})

export default store
