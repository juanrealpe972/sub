import express from "express";
import cors from "cors";
import morgan from "morgan";

import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import subRoutes from "./src/routes/subasta.routes.js";
import routerUser from "./src/routes/user.routes.js";
import routerAuth from "./src/routes/auth.routes.js";

const PORT = 6789;

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/", routerUser);
app.use("/", routerAuth);

app.use("/", subRoutes);

app.listen(PORT, () => {
  console.log(`Connected on port: ${PORT}`);
});
