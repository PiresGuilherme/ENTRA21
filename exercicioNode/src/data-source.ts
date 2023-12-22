import "reflect-metadata"
import { DataSource } from "typeorm"
import { Resident } from "./entity/Resident"
import { Properties } from "./entity/Properties"
import { Bill } from "./entity/Bill"
import { AptComplex } from "./entity/aptComplex"

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
