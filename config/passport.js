const FortyTwoStrategy = require("passport-42").Strategy;

module.exports = passport => {
  passport.use(new FortyTwoStrategy({
    clientID: process.env.FORTYTWO_CLIENT_ID,
    clientSecret: process.env.FORTYTWO_CLIENT_SECRET,
    callbackURL: 'http://15.164.163.75/auth/login/authenicate'
  },
  (accessToken, refreshToken, profile, cb) => {
    return cb(null, profile);
  }));
  
  passport.serializeUser((user, cb) => {
    cb(null, user);
  });
  
  passport.deserializeUser((obj, cb) => {
    cb(null, obj);
  });
};
