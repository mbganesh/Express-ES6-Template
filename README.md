# Express-ES6-Template


```npm init -y```

### [index.js](https://github.com/mbganesh/Express-ES6-Template/blob/main/index.js)
```
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
```

### [api.js](https://github.com/mbganesh/Express-ES6-Template/blob/main/Router/api.js)
```
import express from "express";
import PeopleSchema from '../Schema/PeoplesSchema.js'
const router = express.Router()

router.use(express.json())


router.get('/' , async (req , res)=> {
    let allData = await PeopleSchema.find({})
    res.send(allData)
})


export default router
```

### [PeoplesSchema.js](https://github.com/mbganesh/Express-ES6-Template/blob/main/Schema/PeoplesSchema.js)
```
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
```

### [package.json](https://github.com/mbganesh/Express-ES6-Template/blob/main/package.json)
```
{
  "name": "es6",
  "version": "1.0.0",
  "description": "Express JS Template",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "start": "nodemon index.js"
  },
  "keywords": [],
  "author": "Ganesh",
  "license": "MIT",
  "dependencies": {
    "express": "^4.17.3",
    "mongoose": "^6.2.4",
    "morgan": "^1.10.0",
    "nodemon": "^2.0.15"
  },
  "devDependencies": {},
  "repository": {
    "type": "git",
    "url": "git+https://github.com/mbganesh/Express-ES6-Template.git"
  },
  "bugs": {
    "url": "https://github.com/mbganesh/Express-ES6-Template/issues"
  },
  "homepage": "https://github.com/mbganesh/Express-ES6-Template#readme"
}

```
