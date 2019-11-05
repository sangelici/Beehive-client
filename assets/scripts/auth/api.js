'use strict'

const config = require('../config.js')
const store = require('../store.js')

const signUp = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up'
  })
}

const signIn = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: formData
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut
}
