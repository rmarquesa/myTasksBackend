import "reflect-metadata";
import * as express from "express"
import * as bodyParser from "body-parser"
import * as cors from 'cors'
import routes from "./routes"
import { AppDataSource } from "./data-source";

const PORT = 3333;
const HOST = '0.0.0.0';

const app = express()
app.use(bodyParser.json())

AppDataSource.initialize().then(() => {
  
  app.use(cors())
  app.use(routes)

}).catch((error) => 
  console.log("TypeORM connection error: ", error)
);


app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});