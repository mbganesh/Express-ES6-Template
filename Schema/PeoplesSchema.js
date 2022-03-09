import mongoose from "mongoose";

var schema = new mongoose.Schema({
    "index":Number,
    "name": String,
    "isActive": Boolean,
    "registered": Date,
    "age": Number,
    "gender": String,
    "eyeColor": String,
    "favoriteFruit": String,
    "company": {
      "title": String,
      "email": String,
      "phone": String,
      "location": {
        "country":String,
        "address": String
      }
    },
    "tags": Array
})

var model = mongoose.model('PEOPLE' , schema , 'PEOPLE')


export default model