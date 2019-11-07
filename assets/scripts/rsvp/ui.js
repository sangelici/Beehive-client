'use strict'

const store = require('../store')
const showRsvps = require('../templates/all-rsvp.handlebars')
// const createRsvp = require('../templates/create-rsvp.handlebars')

const successMessage = function (newText) {
  $('.message').text(newText)
  $('.message').removeClass('failure')
  $('.message').addClass('success')
  $('form').trigger('reset')
  // setTimeout(function () { successMessage('') }, 4000)
}

const failureMessage = function (newText) {
  $('.message').text(newText)
  $('.message').removeClass('success')
  $('.message').addClass('failure')
  // setTimeout(function () { failureMessage('') }, 4000)
}

const onCreateRsvpSuccess = function (data) {
  console.log(data)
  store.rsvp = data.rsvp
  successMessage('Yay, onCreateRsvp worked! ' + data.rsvp)
  // const oneRsvpHTML = createRsvp({listing: data.listing})
  // $('.listing-index').html('')
  // $('.listing-index').html(oneRsvpHTML)
}

const onCreateRsvpFailure = function () {
  failureMessage('Sorry, something went wrong. Please try again.')
}

const onIndexRsvpSuccess = function (data) {
  store.rsvps = data.rsvps
  console.log(store.user.email)
  console.log(data.rsvps)
  successMessage('Yay, onIndexRsvp worked! ')
  const showRsvpsHTML = showRsvps({rsvps: store.rsvps})
  $('.listing-index').html('')
  $('.listing-index').html(showRsvpsHTML)
}

// const onIndexRsvpSuccess = function (data) {
//   store.rsvps = data.rsvps
//   console.log(store.user.email)
//   console.log(data.rsvps)
//   successMessage('Yay, onIndexRsvp worked! ')
// }

const onIndexRsvpFailure = function () {
  failureMessage('Sorry, something went wrong. Please try again.')
}

const onDeleteRsvpSuccess = function () {
  successMessage('Your quote with Id: ' + store.rsvp_id + ' was destroyed.')
}

const onDeleteRsvpFailure = function () {
  failureMessage('Sorry, something went wrong. Please try again.')
}

module.exports = {
  onCreateRsvpSuccess,
  onCreateRsvpFailure,
  onIndexRsvpSuccess,
  onIndexRsvpFailure,
  onDeleteRsvpSuccess,
  onDeleteRsvpFailure
}
