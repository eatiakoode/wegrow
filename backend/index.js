const bodyParser = require("body-parser");
const express = require("express");
const dbConnect = require("./config/dbConnect");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT;
const authRouter = require("./routes/authRoute");

const countryRouter = require("./routes/countryRouter");
const stateRouter = require("./routes/stateRouter");
const cityRouter = require("./routes/cityRoute");
const locationRouter = require("./routes/locationRouter.js");
const amenityRouter = require("./routes/amenityRouter.js");
const categoryRouter = require("./routes/categoryRoute");
const propertytypeRouter = require("./routes/propertytypeRoute");

const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");

dbConnect();
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/api/user", authRouter);

app.use("/api/country", countryRouter);
app.use("/api/state", stateRouter);
app.use("/api/city", cityRouter);
app.use("/api/location", locationRouter);
app.use("/api/amenity", amenityRouter);
app.use("/api/category", categoryRouter);
app.use("/api/propertytype", propertytypeRouter);


const path = require("path");
// app.use("/public", express.static(path.join(__dirname, "public")));
// app.use(express.static("public"));
// app.use('/images', express.static('path_to_images_directory'));
app.use('/public', express.static(path.join(__dirname, 'public')));
console.log("testimage")
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running  at PORT ${PORT}`);
});
