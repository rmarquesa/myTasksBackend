import "reflect-metadata"
import { DataSource } from "typeorm"
import { Tasks } from "./entity/Tasks"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "DB Host",
    port: 5432,
    username: "DB User",
    password: "DB Password",
    database: "DB Name",
    entities: [Tasks],
    synchronize: true,
    logging: false,
    migrations: [],
    subscribers: [],
})