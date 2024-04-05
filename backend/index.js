import express from "express";
import cors from "cors";
import morgan from "morgan";

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
app.use(cors());  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static('./public'))

app.use("/auth", routerAuth);
app.use("/v1", routerUser);
app.use("/v1", routerFinca);
app.use("/v1", routerVariedad);
app.use("/v1", routerProduccion);
app.use("/v1", routerChat);
app.use("/v1", routerSeguimiento);
app.use("/v1", routerNotificaciones);
app.use("/v1", routerPostulacion);
app.use("/v1", routerSubasta);

app.listen(PORT, () => {
  console.log(`Connected on port: ${PORT}`);
});
