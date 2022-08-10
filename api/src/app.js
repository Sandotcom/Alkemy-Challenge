import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import routes from './routes/index.js'

const app = express();

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors())

app.use('/', routes)

export default app;