import express from "express";
import cors from "cors";
import morgan from "morgan";

import bodyParser from "body-parser";

import routerSubasta from "./src/routes/subasta.routes.js";
import routerUser from "./src/routes/user.routes.js";
import routerAuth from "./src/routes/auth.routes.js";
import routerFinca from "./src/routes/finca.routes.js";
import routerVariedad from "./src/routes/variedad.routes.js";
import routerChat from "./src/routes/chat.routes.js";
import routerNotificaciones from "./src/routes/notificaciones.routes.js";
import routerPostulacion from "./src/routes/postulacion.routes.js";
import routerDepart from "./src/routes/departamento.routes.js";
import routerMunicipio from "./src/routes/municipio.routes.js";
import routerVereda from "./src/routes/veredas.routes.js";
import routertipovari from "./src/routes/tipovariedad.routes.js";

const PORT = 9722;
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/auth", routerAuth);
app.use("/v1", routerUser);
app.use("/v1", routerDepart);
app.use("/v1", routerVereda);
app.use("/v1", routerMunicipio);
app.use("/v1", routerFinca);
app.use("/v1", routerVariedad);
app.use("/v1", routertipovari);
app.use("/v1", routerSubasta);
app.use("/v1", routerPostulacion);
app.use("/v1", routerChat);
app.use("/v1", routerNotificaciones);

app.set("view engine", "ejs");
app.set("views", "./view");
app.use(express.static("./public"));

app.listen(PORT, () => {
  console.log(`Connected on port: ${PORT}`);
});
