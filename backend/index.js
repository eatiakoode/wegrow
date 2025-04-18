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
const builderRouter = require("./routes/builderRouter");
const agentRouter = require("./routes/agentRouter");
const propertyRouter = require("./routes/propertyRouter");
const furnishingstatusRouter = require("./routes/furnishingstatusRouter");
const constructionstatusRouter = require("./routes/constructionstatusRouter");
const blogRouter = require("./routes/blogRouter");
const testimonialRouter = require("./routes/testimonialRouter");
const propertypageRouter = require("./routes/propertypageRouter");
const faqRouter = require("./routes/faqRouter");

// Frontend API route
const cityFrontendRoute = require("./routes/cityFrontendRoute");
const propertytypeFrontendRouter = require("./routes/propertytypeFrontendRouter");
const propertyFrontendRouter = require("./routes/propertyFrontendRouter");







const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");

dbConnect();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// const bodyParser = require('body-parser');

// app.use(bodyParser.json({ limit: '10mb' })); // or more
// app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

app.use(cookieParser());
app.use("/admin/api/user", authRouter);

app.use("/admin/api/country", countryRouter);
app.use("/admin/api/state", stateRouter);
app.use("/admin/api/city", cityRouter);
app.use("/admin/api/location", locationRouter);
app.use("/admin/api/amenity", amenityRouter);
app.use("/admin/api/category", categoryRouter);
app.use("/admin/api/propertytype", propertytypeRouter);
app.use("/admin/api/builder", builderRouter);
app.use("/admin/api/agent", agentRouter);
app.use("/admin/api/property", propertyRouter);
app.use("/admin/api/furnishingstatus", furnishingstatusRouter);
app.use("/admin/api/constructionstatus", constructionstatusRouter);
app.use("/admin/api/blog", blogRouter);
app.use("/admin/api/testimonial", testimonialRouter);
app.use("/admin/api/propertypage", propertypageRouter);
app.use("/admin/api/faq", faqRouter);

// Frontend API
app.use("/frontend/api/city", cityFrontendRoute);
app.use("/frontend/api/propertytype", propertytypeFrontendRouter);
app.use("/frontend/api/property", propertyFrontendRouter);





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
