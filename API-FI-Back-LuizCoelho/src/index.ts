import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import { AppDataSource } from "./data-source";
import routes from "./routes";

AppDataSource.initialize().then(async () => {
  // create express app
  const app = express();

  app.use(cors());
  app.use(bodyParser.json()); //Tipo da dados enviados
  app.use(routes);

  app.listen(3333); //Determina qual porta a aplicação vai rodar

  console.log(
    "Servidor iniciado na porta 3333! || Acesse http://localhost:3333/Goal para ver os resultados."
  );
});
