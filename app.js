import express from 'express';
import router from './src/routes/index.js';
// const express = require('express');
import { port } from './src/config/index.js';
import loader from './src/loaders/index.js';

const app = express();
loader(app);
app.use('/', router);

app.listen(port, err => {
    if(err) {
        console.log(err);
        return process.exit(1);
    }

    console.log(`Server is running on ${port}`);
});

export default app;
