import "reflect-metadata"
import { DataSource } from "typeorm"
import { Resident } from "./model/Resident"
import { Properties } from "./model/Properties"
import { Bill } from "./model/Bill"
import { AptComplex } from "./model/aptComplex"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Senac@2021",
    database: "aptComplex",
    synchronize: true,
    logging: false,
    entities: [Resident,Properties,Bill, AptComplex],
    migrations: [],
    subscribers: [],
})
