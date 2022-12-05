// IMPORTS FROM PACKAGES
const express = require("express");
const mongoose = require("mongoose");
const adminRouter = require("./routs/admin");
// IMPORTS FROM OTHER FILES
const authRouter = require("./routs/auth");
const productRouter = require("./routs/product");
const userRouter = require("./routs/user");


// INIT
const PORT = process.env.PORT || 3000;
const app = express();
const DB =
  "put your mongodb link here";

// middleware
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);


// Connections
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`connected at port ${PORT}`);
});