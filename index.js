import 'dotenv/config';
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import routersmaster from "./app/routes/indexroutes.js";

import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./app/Docs/swagger.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

app.use("/stock", routersmaster);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
