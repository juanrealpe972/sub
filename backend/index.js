import express from "express";
import cors from "cors";
import morgan from "morgan";

import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import routerSubasta from "./src/routes/subasta.routes.js";
import routerUser from "./src/routes/user.routes.js";
import routerAuth from "./src/routes/auth.routes.js";
import routerFinca from "./src/routes/finca.routes.js";
import routerVariedad from "./src/routes/variedad.routes.js";
import routerProduccion from "./src/routes/produccion.routes.js";
import routerChat from "./src/routes/chat.routes.js";
import routerSeguimiento from "./src/routes/seguimiento.routes.js";
import routerNotificaciones from "./src/routes/notificaciones.routes.js";
import routerPostulacion from "./src/routes/postulacion.routes.js";

const PORT = 9722;

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
app.use("/", routerFinca);
app.use("/", routerVariedad);
app.use("/", routerProduccion);
app.use("/", routerChat);
app.use("/", routerSeguimiento);
app.use("/", routerNotificaciones);
app.use("/", routerPostulacion);
app.use("/", routerSubasta);

app.listen(PORT, () => {
  console.log(`Connected on port: ${PORT}`);
});
