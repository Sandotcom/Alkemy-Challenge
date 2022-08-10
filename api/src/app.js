import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'

const app = express();

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors())

export default app;