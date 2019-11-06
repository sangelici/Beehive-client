'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')
const listingEvents = require('./listing/events.js')
const rsvpEvents = require('./rsvp/event.js')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#new-listing').on('submit', listingEvents.onCreateListing)
  $('#show-listing').on('submit', listingEvents.onShowListing)
  $('#update-listing').on('submit', listingEvents.onUpdateListing)
  $('#index').on('submit', listingEvents.onGetListings)
  $('#user-index').on('submit', listingEvents.onGetUserListings)
  $('#delete-listing').on('submit', listingEvents.onDeleteListing)
  $('.create-rsvp').on('submit', rsvpEvents.onCreateRsvp)
  $('#rsvp-index').on('submit', rsvpEvents.onIndexRsvp)
  $('#delete-rsvp').on('submit', rsvpEvents.onDeleteRsvp)
})
