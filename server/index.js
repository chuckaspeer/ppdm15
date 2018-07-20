require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
//const checkForSession = require('./middlewares/checkForSession');
//const controller = require("./controllers/controller");
const cors = require("cors");
const massive = require("massive");
const path = require("path");
//naming convention is important here create one for every controller
const port = process.env.PORT || 3005;
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(`${__dirname}/../build`));

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(err => console.log(err));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000000
    }
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new Auth0Strategy(
    {
      domain: process.env.DOMAIN,
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "/login",
      scope: "openid email profile"
    },
    function(accessToken, refreshToken, extraParams, profile, done) {
      return done(null, profile);
    }
  )
);
passport.serializeUser((user, done) => {
  console.log(user);
  const db = app.get("db");
  db.getUserByAuthid([user.id])
    .then(response => {
      if (!response[0]) {
        console.log("doing db call");
        db.addUserByAuthid([
          user.name.givenName,
          user.name.familyName,
          user.id,
          user.emails[0].value
        ])
          .then(res => done(null, res[0]))
          .catch(console.log);
      } else {
        return done(null, response[0]);
      }
    })
    .catch(console.log);
});
passport.deserializeUser((user, done) => {
  return done(null, user);
});

app.get(
  "/login",
  passport.authenticate("auth0", {
    // successRedirect: "http://localhost:3000/#/HomeScreen",
    successRedirect: "/#/HomeScreen",
    failureRedirect: "/login",
    failureFlash: true
  })
);

// function authenticated(req, res, next) {
//   if (req.user) {
//     next();
//   } else {
//     res.sendStatus(401);
//   }
// }
// app.get("/me", (req, res, next) => {
//   if (!req.user) {
//     res.status(500).json({ message: "BROKE" });
//   } else {
//     res.status(200).send(students);
//   }
// });

//app.use(checkForSession);

//needed on if you have a build folder

app.get("/api/classes/:id/students", (req, res) => {
  app
    .get("db")
    .getStudentsByClassId([req.params.id])
    .then(response => res.status(200).json(response));
  //res.status(200).json({message :'Hell yeah'});
});
// app.get("/api/classes/:id/students", (req, res) => {
//   app
//     .get("db")
//     .joinStudentByClasses([req.params.id])
//     .then(response => res.status(200).json(response));
//   //res.status(200).json({message :'Hell yeah'});
// });

app.get("/api/staff", (req, res) => {
  app
    .get("db")
    .staff.find({})
    .then(response => res.status(200).json(response));
});
app.get("/api/classes", (req, res) => {
  app
    .get("db")
    // .classes.find({})
    .getClassesByStaffId([req.session.passport.user.id])
    .then(response => res.status(200).json(response));
});

app.get("/api/reports/:studentid", (req, res) => {
  console.log(req.params);
  req.app
    .get("db")
    // .classes.find({})
    .getReportsByStudentId([req.params.studentid])
    .then(response => res.status(200).json(response));
});
app.get("/api/staff/students", (req, res) => {
  console.log(req.params);
  req.app
    .get("db")
    // .classes.find({})
    .getStudentsByStaffId([req.session.passport.user.id])
    .then(response => res.status(200).json(response));
});

app.get("/api/checkboxes", (req, res) => {
  app
    .get("db")
    .checkboxes.find({})
    //.getClassesByStaffId([1])
    .then(response => res.status(200).json(response));
});

app.post("/api/students/:id/doc_comments", (req, res) => {
  const { docs } = req.body;
  const { id } = req.params;

  let arr = [];
  docs.checkboxes.forEach((element, index) => {
    arr.push(element.label);
  });
  const db = req.app.get("db");
  db.addCommentByStudent([docs.comment, id, req.session.passport.user.id])
    .then(response => {
      const commentid = response[0].id;
      db.addCheckByStudent([arr, id, req.session.passport.user.id])
        .then(response => {
          const checkid = response[0].id;
          db.addReportByStudentId([
            checkid,
            commentid,
            id,
            req.session.passport.user.id
          ])
            .then(response => {
              console.log(response);
              res.status(200).json(response);
            })
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
});

app.put("/api/students/:id/doc_comments", (req, res) => {
  console.log("hit");
  const { comment } = req.body;
  const { id } = req.params;

  const db = req.app.get("db");
  db.updateReportByReportId([comment, id]).then(response => {
    console.log(response);
    res.status(200).json(response);
    // commentid = response[0].id;
  });
});
/////////////////////////////DELETE/////////////////////////////////////////////////////////
app.delete("/api/students/:id/reports", (req, res) => {
  console.log("hit");
  //const { comment } = req.body;
  const { id } = req.params;

  const db = req.app.get("db");
  db.deleteReportByReportId([id]).then(response => {
    console.log(response);
    res.sendStatus(200);
    // commentid = response[0].id;
  });
});

//add app. get, post, puts and deletes here;

//app.get("/api/classes", controller.getClasses);
// app.get("/api/staff", controller.getstaff);
// app.get("/api/students", controller.getstudents);
// //app.get("/api/student/:id", controller.getstudent);

// app.put("/api/product/:id", products_controller.upDate);
// app.post("/api/product", products_controller.create);
// app.delete("/api/product/:id", products_controller.delete);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
