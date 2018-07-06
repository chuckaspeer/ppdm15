require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
//const checkForSession = require('./middlewares/checkForSession');
//const controller = require("./controllers/controller");
const cors = require("cors");
const massive = require("massive");
//naming convention is important here create one for every controller
const port = 3005;
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
);

//app.use(checkForSession);
// app.use(express.static(`__dirname/../build`));

//needed on if you have a build folder

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(err => console.log(err));

app.get("/api/classes/:id/students", (req, res) => {
  app
    .get("db")
    .getStudentsByClassId([req.params.id])
    .then(response => res.status(200).json(response));
  //res.status(200).json({message :'Hell yeah'});
});
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
    .getClassesByStaffId([1])
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

  req.app
    .get("db")
    .addCommentByStudent([arr, docs.comment, id, 1])
    .then(response => res.status(200).json(response))
    .catch(err => console.log(err));
});
// app.post("/api/students/:id/doc_checks", (req, res) => {
//   const { checks } = req.body;
//   const { id } = req.params;
//   console.log({ checks, id });
//   req.app
//     .get("db")
//     .addCommentByStudent([checks, id, ])
//     .then(response => res.status(200).json(response))
//     .catch(err => console.log(err));
// });

//add app. get, post, puts and deletes here;

//nodapp.get("/api/classes", controller.getClasses);
// app.get("/api/staff", controller.getstaff);
// app.get("/api/students", controller.getstudents);
// //app.get("/api/student/:id", controller.getstudent);

// app.put("/api/product/:id", products_controller.upDate);
// app.post("/api/product", products_controller.create);
// app.delete("/api/product/:id", products_controller.delete);

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});