const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()
app.use(cors())
app.use(express.json())
require('dotenv').config()
const MenuSchema = mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: false
    },
    category: {
        type: String,
        required: true
    }

})
const Menus = mongoose.model("Menu", MenuSchema)
app.get("/api/products", async (req, res) => {
    const response = await Menus.find()
    res.send(response)
})
app.get("/api/products/:id", async (req, res) => {
    const { id } = req.params
    const target = await Menus.findById(id)
    res.send(target)
})
app.delete("/api/products/:id", async (req, res) => {
    const { id } = req.params
    await Menus.findByIdAndDelete(id)
    const items= await Menus.find()
    res.send(items) 
})
app.post("/api/products", async (req, res) => {
    const { image,title, description, price, category } = req.body
    const newMenus = new Menus({ image:image,title: title, description: description, price: price, category: category })
    await newMenus.save()
    res.send(newMenus)
})
mongoose.connect(process.env.CS).then(res => {

    console.log("db connected");

})

app.listen(process.env.PORT, (req, res) => {
    console.log("bu server işləyir")
})