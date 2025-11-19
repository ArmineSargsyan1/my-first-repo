// // import express from "express";
// // import { createServer } from "http";
// //
// // const app = express();
// // const port = 3000;
// //
// // const handler1 = (req, res, next) => {
// //   req.customData = "This is custom data from handler1";
// //   next();
// // };
// //
// // const handler2 = (req, res, next) => {
// //   res.send("H " + req.customData);
// // };
// //
// // app.get("/", handler1, handler2);
// //
// // app.listen(port, () => {
// //   console.log(`App listening on port ${port}`);
// // });
// //
//
//
//
// import express from "express";
//
// const app = express();
// const port = 3000;
//
// app.use(express.json());
//
// const handler1 = (req, res, next) => {
//   req.customData = "This is custom data from handler1";
//   next();
// };
//
// const handler2 = (req, res, next) => {
//   res.send("H " + req.customData);
// };
//
// app.get("/", handler1, handler2);
//
// app.post("/", handler1, (req, res) => {
//   res.send({
//     message: "POST",
//     customData: req.customData,
//     body: req.body
//   });
// });
//
// app.put("/", handler1, (req, res) => {
//   res.send({
//     message: "PUT",
//     customData: req.customData,
//     body: req.body
//   });
// });
//
// app.delete("/", handler1, (req, res) => {
//   res.send({
//     message: "DELETE",
//     customData: req.customData
//   });
// });
//
// app.listen(port, () => {
//   console.log(`App listening on port ${port}`);
// });



import express from "express";

import routes from "./routes/index.js";

const app = express();
const port = 3000;

app.use(routes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
