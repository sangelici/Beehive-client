'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')
const listingEvents = require('./listing/events.js')
const rsvpEvents = require('./rsvp/event.js')

$(() => {
  // LANDING AUTH
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  // LANDING INDEX/FIND LISTING
  $('.find-listing').on('click', () => {
    $('#find-listing').show()
    $('#profile').hide()
    $('#create-listing').hide()
    $('#change-pw').hide()
    $('.listing-index').html('')
  })
  $('#index').on('submit', listingEvents.onGetListings)
  $('#index-auth').on('submit', listingEvents.onGetAuthListings)

  // PROFILE
  $('.profile').on('click', () => {
    $('#profile').show()
    $('#find-listing').hide()
    $('#create-listing').hide()
    $('#change-pw').hide()
    $('.listing-index').html('')
    $('.listing-index').show()
    $('#find-user-listing').hide()
  })
  $('#user-index').on('submit', listingEvents.onGetUserListings)
  $('#rsvp-index').on('submit', rsvpEvents.onIndexRsvp)

  // CREATE LISTING
  $('.create-listing').on('click', () => {
    $('#create-listing').show()
    $('#profile').hide()
    $('#find-listing').hide()
    $('#change-pw').hide()
    $('.listing-index').html('')
    $('.listing-index').hide()
    $('#find-user-listing').hide()
  })

  // SHOW LISTING
  $('rsvps').show()
  $('#new-listing').on('submit', listingEvents.onCreateListing)

  // INDEX LISTINGS
  $('.find-listing').on('click', () => {
    $('#find-listing').hide()
    $('#find-user-listing').show()
    $('.listing-index').html('')
    $('.listing-index').show()
  })
  // CHANGE PASSWORD
  $('.change-pw').on('click', () => {
    $('#change-pw').show()
    $('#create-listing').hide()
    $('#profile').hide()
    $('#find-listing').hide()
    $('#find-user-listing').hide()
  })

  // SHOW LISTING
  $('.work').on('click', '.show-event', listingEvents.onShowListing)
  // $('#show-listing').on('submit', listingEvents.onShowListing)
  $('#update-listing').on('submit', listingEvents.onUpdateListing)
  $('#delete-listing').on('submit', listingEvents.onDeleteListing)

  $('.create-rsvp').on('submit', rsvpEvents.onCreateRsvp)
  // $('.work2').on('click', '.create-rsvp', rsvpEvents.onCreateRsvp)
  $('#delete-rsvp').on('submit', rsvpEvents.onDeleteRsvp)

  // REGISTER/LOGIN MODAL
  $('.show-login').on('click', () => {
    $('#sign-up').hide()
    $('.login').show()
  })

  $('.show-signup').on('click', () => {
    $('.login').hide()
    $('#sign-up').show()
  })

  // $('.listing-index').html('')
  $('.listing-index').show()

  // HIDING
  $('.nav').hide()
  $('#change-pw').hide()
  $('.sign-out').hide()
  $('.listings').show()
  $('.homepage').hide()
  $('#profile').hide()
  $('#create-listing').hide()
  $('#find-user-listing').hide()
})
