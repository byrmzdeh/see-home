import express from 'express'
import mongoose, { Schema } from 'mongoose';
import cors from 'cors'
const app = express()
const port = 9000

app.use(express.json())
app.use(cors())

const seeSchema = new Schema({
    image: String,
    name: String,
    desc: String,
    price: Number,
    value : Number

});

const seeModel = mongoose.model('See', seeSchema);


app.get('/', async (req, res) => {
    try {
        const product = await seeModel.find({})
        res.send(product)
    } catch (error) {
        console.log(error.message);
    }
})

app.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const product = await seeModel.findById(id)
        res.send(product)
    } catch (error) {
        console.log(error.message);
    }
})

app.post('/', async (req, res) => {
    try {
     const {image , name , desc , price , value} = req.body
        const product = new seeModel({image , name , desc , price , value})
        await product.save()
        res.send(product)
    } catch (error) {
        console.log(error.message);
    }
})

app.put('/:id', async (req, res) => {
    try {
        const {id} = req.params
     const {image , name , desc , price , value} = req.body
        const product = await seeModel.findByIdAndUpdate(id , {image , name , desc , price , value})
        res.send(product)
    } catch (error) {
        console.log(error.message);
    }
})

app.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const product = await seeModel.findByIdAndDelete(id)
        res.send(product)
    } catch (error) {
        console.log(error.message);
    }
})


mongoose.connect('mongodb+srv://aydan:aydan@cluster0.ccton5y.mongodb.net/')
    .then(() => console.log('Connected !'))
    .catch(() => console.log("Not Connected !"))


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})