import express from "express";
import mongoose from "mongoose";
import api from './Router/api.js'
import morgan from "morgan";

const app = express()

mongoose.connect('mongodb://localhost/practice')

app.use('/api' , api)

app.use(morgan('combined'))


app.listen(9090)

app.use(morgan('dev'))