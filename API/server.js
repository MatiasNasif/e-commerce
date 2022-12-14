// Configuración del server
const express = require("express");
const app = express();
const db = require("./db");
const models = require("./models");
const routes = require("./routes");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const cors = require("cors")

// Middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())

app.use(
  sessions({
    secret: "goodvibes",
    resave: true,
    saveUninitialized: true,
  })
);

// inicializando passport y diciendole que use las sesiones de express
app.use(passport.initialize());
app.use(passport.session());

// usando passport con estrategia "local"
passport.use(
  new localStrategy(
    { usernameField: "email", passwordField: "password" },
    function (email, password, done) {
      models.User.findOne({ where: { email } })
        .then((user) => {
          if (!user) return done(null, false);
          user.hash(password, user.salt).then((hash) => {
            if (hash !== user.password) {
              return done(null, false);
            }

            return done(null, user);
          });
        })
        .catch(done);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  models.User.findByPk(id)
    .then((user) => done(null, user))
    .catch(done);
});

// Routes
app.use("/api", routes);

db.sync({ force: false }).then(() => {
  app.listen(3001, () => {
      console.log("Servidor escuchando en el puerto 3001")
    });
});