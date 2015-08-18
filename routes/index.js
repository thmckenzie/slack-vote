var express = require('express')
  , router = module.exports = express.Router()

var test = require('./test.js')
  // , doVote = require('./do_vote.js')
  // , listVotes = require('./list_votes.js')
  // , startVotes = require('./start_vote.js')
  // , close = require('./close_poll.js');

// router.route('/vote').post(doVote.post);
// router.route('/votes').post(listVotes.post);
// router.route('/start').post(startVotes.post);
// router.route('/close').post(close.post);
router.route('/asdf').get(test.sayHello);
router.route('/assf').get(test.goodbye);
router.route('/asdf').post(test.post);
