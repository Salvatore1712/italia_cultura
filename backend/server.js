import express from "express"
import app from "./app.js"

app.listen(3000, (errore)=> {
    if(errore) throw new errore;
    console.log(`Server in ascolto...`)
})