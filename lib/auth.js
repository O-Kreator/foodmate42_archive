const isLoggedIn = req =>
  !(typeof req.user === "undefined"
  || req.user === null
  || typeof req.user.id === "undefined"
  || req.user.id === null);

module.exports = isLoggedIn;
