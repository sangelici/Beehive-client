'use strict'

const store = require('../store')


const onSignUpSuccess = function () {
  successMessage('signed up successfully!')
  $('#sign-up').trigger('reset')
}

const onSignUpFailure = function () {
  failureMessage('Sign up failed')
  $('#sign-up').trigger('reset')
}



module.exports = {
    onSignUpSuccess,
    onSignUpFailure

}
