// module.exports = {
//    

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
