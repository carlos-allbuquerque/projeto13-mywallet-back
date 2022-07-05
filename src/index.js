import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRouter from "./routes/authRouter.js";
import accountInfoRouter from "./routes/accountInfoRouter.js"
import transactionsRouter from "./routes/transactionsRouter.js"

dotenv.config();

const server = express();
server.use([express.json(), cors()]);

server.use(authRouter);
server.use(accountInfoRouter);
server.use(transactionsRouter);

const PORT = process.env.PORT;
server.listen(PORT, () => console.log(`Servidor iniciado na porta ${PORT}`));