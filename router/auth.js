const express = require("express");
const router = express.Router();

const passport = require("passport");
const isLoggedIn = require("./../lib/auth");
const { getConnection } = require("./../config/db");


// Log-in

router.get("/login", passport.authenticate("42"));

router.get("/login/authenicate",
  passport.authenticate("42", { failureRedirect: "/auth/login" }),
  async (req, res) => {
    if (isLoggedIn(req)) {
      const [data] = await (await getConnection()).execute("SELECT * FROM user WHERE id=?", [req.user.username]);
      if (data.length === 0)
        await (await getConnection()).execute("INSERT INTO user VALUES (?)", [req.user.username]);
      res.redirect("/main.html");
    } else
      res.redirect("/auth/login");
});


// Log-out

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
})


module.exports = router;
