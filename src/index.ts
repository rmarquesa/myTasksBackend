import "reflect-metadata";
import * as express from "express"
import * as bodyParser from "body-parser"
import * as cors from 'cors'
import routes from "./routes"
import { AppDataSource } from "./data-source";

const app = express()
app.use(bodyParser.json())

AppDataSource.initialize().then(() => {
  
  app.use(cors())
  app.use(routes)

}).catch((error) => 
  console.log("TypeORM connection error: ", error)
);

console.log("Express application is up and running on port 3333");
app.listen(3333)