// module.exports = {
//     create: (req, res, next) => {
//       const db = req.app.get("db");
//       const { classes, staff, students } = req.body; //destructureing
//       db
//         .create([classes, staff, students])
//         .then(() => res.sendStatus(200))
//         .catch(err => {
//           res.status(500).send({ errorMessage: "Something went wrong in Create" });
//           console.log(err);
//         });
//  },
  
//     getstudent: (req, res, next) => {
//       const dbInstance = req.app.get("db");
//       const { params } = req; //destructuring
//       dbInstance
//         .read_product([params.id])
//         .then(product => res.tatus(200).send(product))
//         .catch(err => {
//           res.status(500).send({ errorMessage: "Something went wrong in getOne!" });
//           console.log(err);
//         })
//     },
//     getAll: (req, res, next) => {
//       const dbInstance = req.app.get("db");
  
//       dbInstance
//         .read_products()
//         .then(products => res.status(200).send(products))
//         .catch(err => {
//           res.status(500).send({ errorMessage: "Something went wrong in getAll!" });
//           console.log(err);
//         });
//     },
//     upDate: (req, res, next) => {
//       const dbInstance = req.app.get("db");
//       const { params, query } = req; // destructuring
//       dbInstance
//         .upDate_product([params.id, query.desc])
//         .then(() => res.sendStatus(200))
//         .catch(err => {
//           res.status(500).send({ errorMessage: "Something went wrong in upDate!" });
//           console.log(err)
//         });
//     },
//     delete: (req, res, next) => {
//       const dbInstance = req.app.get("db");
//       const { params } = req; //destructuring
//       dbInstance
//         .delete_product([params.id])
//         .then(() => res.sendStatus(200))
//         .catch(err => {
//           res.status(500).send({ errorMessage: "Something went wrong in delete!" });
//           console.log(err);
//         });
//     }
 // };
