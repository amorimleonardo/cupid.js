'use strict';

let TinderPro = require('tinder_pro');
let secrets   = require('./secrets');
let tinder    = new TinderPro();

let fbId    = secrets.facebook_id,
    fbToken = secrets.facebook_token;

let distance = 25,
    liked    = 0,
    matches  = 0;

console.log('****** Connecting to facebook ******');

tinder.sign_in(fbId, fbToken, function (err, res, body) {
  if(body.user) {
    console.log('Welcome, ', body.user.name, '=)');
    console.log('\nLet\'s swipe right some people until find your soulmate...\n');
    tinder.update_search_distance(distance, function() {
      getUsers(tinder);
    });

  } else {
    console.log('An error occured', body.message);
  }
});

function getUsers(tinder) {
  tinder.get_nearby_users(function (err, res, body) {
    if (body && body.results) {
      autoLiker(body.results);
    }
    getUsers(tinder);
  });
}

function autoLiker(results) {
  results.forEach(function (result) {
    tinder.like(result._id, function(err, res, body) {
      if(res.statusCode === 200) {
        liked++;
        console.log('Liked ' + result.name + '(' + liked + '), it was ' + (body.match ? '' : 'not') + ' a match');
      }
    })
  });
}

