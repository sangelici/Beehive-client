'use strict'

const store = require('../store.js')

const successMessage = function (newText) {
  $('.message').text(newText)
  $('.message').removeClass('failure')
  $('.message').addClass('success')
  $('form').trigger('reset')
  setTimeout(function () { failureMessage('') }, 4000)
}

const failureMessage = function (newText) {
  $('.message').text(newText)
  $('.message').removeClass('success')
  $('.message').addClass('failure')
  setTimeout(function () { failureMessage('') }, 4000)
}

// SIGN UP
const onSignUpSuccess = function () {
  successMessage('signed up successfully!')
  $('#sign-up').trigger('reset')
}

const onSignUpFailure = function () {
  failureMessage('Sign up failed')
  $('#sign-up').trigger('reset')
}

// SIGN IN
const onSignInSuccess = function (responseData) {
  successMessage(`You're signed in!`)
  store.user = responseData.user
}

const onSignInFailure = function () {
  failureMessage('Oh no! Sign In is incorrect. Please try again!')
}

// SIGN OUT
const onSignOutSuccess = function () {
  successMessage(`Goodbye! Come back soon!`)
}

const onSignOutFailure = function () {
  failureMessage(`Sign out failed. Please try again!`)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure
}
