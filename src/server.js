// const express = require('express') // O require() é a função usada para importar módulos
import express from "express"
import userRouter from "./routers/userRouter.js"
import imovelRouter from "./routers/imovelRouter.js"
const app = express()
const port = 3000

app.use("/user", userRouter)
app.use("/imovel", imovelRouter)

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})

