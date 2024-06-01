import { DataSource } from "typeorm";
import { Deliveries } from "../entities/Deliveries";
import { Customers } from "../entities/Customers";
import { Riders } from "../entities/Riders";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "test1234",
    database: "postgres",
    synchronize: true,
    logging: true,
    entities: [Customers, Deliveries, Riders],
    subscribers: [],
    migrations: [],
})