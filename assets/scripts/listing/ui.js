'use strict'

const store = require('../store')
const showListings = require('../templates/all-listing.handlebars')

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

const onCreateListingSuccess = function (data) {
  console.log(data)
  store.listing = data.listing
  successMessage('Yay, onCreateListing worked! ' + data.listing.listing_name)
}

const onCreateListingFailure = function () {
  failureMessage('Sorry, something went wrong. Please try again.')
}

const onShowListingSuccess = function (data) {
  console.log(data.listing)
  successMessage('What a stupendous listing! ' + data.listing.listing_name)
}

const onShowListingFailure = function () {
  failureMessage('Sorry, something went wrong. Please try again.')
}

const onUpdateSuccess = function (data) {
  console.log(data)
  successMessage('Your listing has been updated!')
}

const onUpdateFailure = function () {
  failureMessage('Sorry, something went wrong. Please try again.')
}

// const onGetListingsSuccess = function (data) {
//   console.log(data)
//   successMessage('Here are your listings ')
// }

const onGetListingsSuccess = (data) => {
  // console.log(‘get data is ‘, data)
  const showListingsHTML = showListings({listings: data.listings})
  $(`.listings`).html(showListingsHTML)
}

const onGetListingsFailure = function () {
  failureMessage('Sorry, something went wrong. Please try again.')
}

const onGetUserListingsSuccess = function (data) {
  console.log(data)
  successMessage('Here are your listings ')
}

const onGetUserListingsFailure = function () {
  failureMessage('Sorry, something went wrong. Please try again.')
}

const onDeleteListingSuccess = function () {
  successMessage('Your quote with Id: ' + store.listing_id + ' was destroyed.')
}

const onDeleteListingFailure = function () {
  failureMessage('Sorry, something went wrong. Please try again.')
}

module.exports = {
  onCreateListingSuccess,
  onCreateListingFailure,
  onShowListingSuccess,
  onShowListingFailure,
  onUpdateSuccess,
  onUpdateFailure,
  onGetListingsSuccess,
  onGetListingsFailure,
  onDeleteListingSuccess,
  onDeleteListingFailure,
  onGetUserListingsSuccess,
  onGetUserListingsFailure
}
