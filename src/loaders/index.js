import expressLoader from './express.js'
import postgresLoader  from './postgresql.js';

export default async(app) => {
    await postgresLoader();
    expressLoader(app);
}