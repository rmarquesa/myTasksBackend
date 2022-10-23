import "reflect-metadata"
import { DataSource } from "typeorm"
import { Tasks } from "./entity/Tasks"

const DATABASE_HOST     = process.env.DATABASE_HOST
const DATABASE_USER     = process.env.DATABASE_USER
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD
const DATABASE_NAME     = process.env.DATABASE_NAME

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DATABASE_HOST,
    port: 5432,
    username: DATABASE_USER,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME,
    entities: [Tasks],
    synchronize: true,
    logging: false,
    migrations: [],
    subscribers: [],
})