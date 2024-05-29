import cors from "cors";
import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config()

const { DATABASE_PORT } = process.env

const app: Application = express();
const port = DATABASE_PORT || 3000

app.use(express.json())
app.use(cors())

app.get("/", (request: Request, response: Response) => {
  response.send('😁😁😁😁😁')
})

app.listen(port, () => {
  console.log(`Servidor funcionando na porta ${port}`)
})