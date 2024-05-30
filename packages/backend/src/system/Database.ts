import { DataSource } from "typeorm";
import { User } from "../entities/Posts";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "test1234",
    database: "postgres",
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
})