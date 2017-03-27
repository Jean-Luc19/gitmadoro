const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;

const githubConfig = require('../config');
const {User} = require('../models/user');
const init = require('./init');

passport.use(new GitHubStrategy({
  clientID: githubConfig.CLIENT_ID,
  clientSecret: githubConfig.CLIENT_SECRET,
  callbackURL: githubConfig.CALLBACK_URL
  },
  function(accessToken, refreshToken, profile, done) {

    const searchQuery = {
      name: profile.displayName
    };

    const updates = {
      name: profile.displayName,
      someID: profile.id,
      token: accessToken
    };

    const options = {
      upsert: true
    };

    // update the user if s/he exists or add a new user
    User.findOneAndUpdate(searchQuery, updates, options, function(err, user) {
      if(err) {
        return done(err);
      } else {
        return done(null, user);
      }
    });
  }

));

init();

module.exports = passport;
