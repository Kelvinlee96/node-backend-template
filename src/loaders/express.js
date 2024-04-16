import express from 'express'
// import bodyParser from 'body-parser';

export default (app) => {
    app.get('/', (_req, res) => {
        return res.status(200).json({
            resultMessage: {
                en: "The project is running..."
            }
        }).end();
    });

    // app.use(bodyParser.urlencoded({ extended: false }));
    // app.use(bodyParser.json());

}