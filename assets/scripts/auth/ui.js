'use strict'

const store = require('../store.js')

const successMessage = function (newText) {
  $('.message').text(newText)
  $('.message').removeClass('failure')
  $('.message').addClass('success')
  $('form').trigger('reset')
  setTimeout(function () { successMessage('') }, 4000)
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
  homepage()
}

const onSignInFailure = function () {
  failureMessage('Oh no! Sign In is incorrect. Please try again!')
}

// Change password
const onChangePasswordSuccess = function () {
  successMessage('Changed password successfully!')
}

// Change password
const onChangePasswordFailure = function () {
  failureMessage('Password change failed.')
}

// SIGN OUT
const onSignOutSuccess = function () {
  successMessage(`Goodbye! Come back soon!`)
  landing()
}

const onSignOutFailure = function () {
  failureMessage(`Sign out failed. Please try again!`)
}

const homepage = function () {
  $('.landing').hide()
  $('.nav').show()
  $('.sign-out').show()
  $('.homepage').show()
  $('#change-pw').hide()
}

const landing = function () {
  $('.landing').show()
  $('#find-listing').show()
  $('.nav').hide()
  $('.homepage').hide()
  $('.sign-out').hide()
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
