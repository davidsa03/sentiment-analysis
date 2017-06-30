/**
 * SentimentController
 *
 * @description :: Server-side logic for managing sentiments
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var sentiment = require('sentiment');

module.exports = {
	home: function(req, res) {
		var analysis;
    async.series([
      function(callback) {
				if (req.body != undefined) {
					// console.log(req.body.content);
					analysis = sentiment(req.body.content);
				  // console.dir(analysis);        // Score: -2, Comparative: -0.666
					sails.sockets.blast("analysis", analysis);
				}
        callback();
      },
    ], function(callback) {
      res.view('sentiment/home', {
      });
    });
  },
};
