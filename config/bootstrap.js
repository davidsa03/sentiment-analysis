/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

var sentiment = require('sentiment');
var Twit = require('twit');

module.exports.bootstrap = function(cb) {

  var clientMLB = new Twit({
      access_token: '851951216301154304-PShGdwmtBESW6dc9elb7TeCbilP0VbO',
      access_token_secret: 'jxypJIQV2YBAdZpWCEDkdN83P24PQUrgFRxt8RotKlskV',
      consumer_key: '9Ro3XRzgqHXALNAFWGXXFBajA',
      consumer_secret: 'oLISf9TqxEfz4zZT2VNZwkKaRBFHeqBur3oCpU293FMrot3nlB'
    });
  // var stream = clientMLB.stream('user', {with: 'followings'});
  //   stream.on('tweet', function (tweet) {
  //     var title = tweet.text.split(' ');
  //     if (title[0] == 'RT') {
  //       title.shift();
  //     }
  //     // If the beginning is a RT it'll be RT @___ so take that out
  //     if (title[0][0] == '@') {
  //       title.shift();
  //     }
  //     // delete title[title.length - 1];
  //     title = title.join(' ');
  //     var r1 = sentiment(title);
  //     console.log("Tweet: " + title);
  //     console.log("Sentiment: " + r1.score);
  //     console.log("========================================");
  //   })
  // var r1 = sentiment('You suck');
  // console.dir(r1);        // Score: -2, Comparative: -0.666
  // console.log(r1.score);
  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};
