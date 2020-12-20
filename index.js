const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const passport = require("passport");

const isLoggedIn = require("./lib/auth");

const app = express();
const port = process.env.PORT || 5000;


// Passport Config.

require("./config/passport")(passport);


// Setting app.

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ resave: false, saveUninitialized: false, secret: process.env.SESSION_SECRET }));

app.use(passport.initialize());
app.use(passport.session());


// Routes.

app.get("/", (req, res) => {
  if (isLoggedIn(req))
    res.redirect("/main.html");
  else
    res.redirect("/auth/login");
});

app.use("/auth", require("./router/auth"));
app.use(express.static("public"));


// Listening to the port.

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
