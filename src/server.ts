import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';
import * as mainRoute from './routes/route'

dotenv.config();

const server = express();

server.use(cors());

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({ extended: true }));

server.use(mainRoute.router)

server.use((req: Request, res: Response) => {
  res.status(404).json({ Error: "Página não localizada!" })
})
server.listen(process.env.PORT) 