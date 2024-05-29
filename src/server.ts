import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { AppDataSource } from "./database/data-source";
import { Users } from "./entity/Users";

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err)
  })

dotenv.config();

const port = process.env.HOST || 3000

const app = express()

app.use(express.json())
app.use(cors())

app.get("/users", async (request: Request, response: Response) => {
  const users = await AppDataSource.getRepository(Users).find()
  response.json(users)
})

app.listen(port, () => {
  console.log('Servidor funcionando!!!!')
})