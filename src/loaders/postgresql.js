import {Sequelize} from "sequelize";
import { sequelize } from "../config/index.js";

// export default async () => {
//     await sequelize.authenticate();
//     console.log("Database has been established successfully")
// }

// const sequelize = new Sequelize({
//     host: 'localhost',
//     dialect: 'postgres'
// })

export default async () => {
    await sequelize.authenticate();
    console.log("Database has been established successfully")
}