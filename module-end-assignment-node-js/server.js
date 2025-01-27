const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const itemRoutes = require("./routes/itemRoutes");
const { errorHandler } = require("./middleware/errorHandler");
const { logRequestDetails } = require("./middleware/logger");

const app = express();
dotenv.config();
const PORT = process.env.PORT;
const uri = process.env.MONGO_URI;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use(bodyParser.json());
app.use(errorHandler);
app.use(logRequestDetails);

app.use("/items", itemRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
