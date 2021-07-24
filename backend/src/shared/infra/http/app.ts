import 'reflect-metadata';

import express from 'express';
import cors from 'cors';

import createConnection from '@shared/infra/typeorm';

createConnection();

const app = express();

app.use(cors());
app.use(express.json());

export default app;
