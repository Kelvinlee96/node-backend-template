import {config} from 'dotenv';
import { Sequelize } from 'sequelize';

config();

const {PORT } = process.env

export const sequelize = new Sequelize('postgres', 'postgres', 'P@ssw0rd', {
    host: 'localhost',
    dialect: 'postgres',
});

export const port = PORT || 3000;
// export const dbURI = sequelize