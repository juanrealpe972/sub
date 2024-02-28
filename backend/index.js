import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import subRoutes from "./src/routes/subasta.routes.js";
import routerUser from "./src/routes/user.routes.js";

const PORT = 6789;

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials:true
  })
);

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/", routerUser);
app.use("/api", subRoutes);

app.listen(PORT, () => {
  console.log(`Connected on port: ${PORT}`);
});
