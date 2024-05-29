import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const port = 3000

const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (request: Request, response: Response) => {
  response.send('Hello 😚😚😚')
})

app.listen(port, () => {
  console.log('Servidor funcionando!!!!')
})