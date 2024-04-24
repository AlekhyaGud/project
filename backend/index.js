const PORT= 4000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path= require('path');
const cors = require('cors');
const { log } = require('console');

app.use(express.json());
app.use(cors());

// Database connection with MongoDB
mongoose.connect("mongodb+srv://alekhyagudibandla:alekhyaGud%4021@cluster0.ey683i1.mongodb.net/outfitoracle");

// API Creation

app.get("/",(req,res)=>{
    res.send("Epress app is running")
})

// Image storage engine

const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})

// creaing upload endpoint for images
app.use('/images',express.static('upload/images'))


app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success: 1,
        image_url: `http:localhost:${PORT}/images/${req.file.filename}`
    })
})

// Schema for Creating products

const product = mongoose.model("product",{
    id: {
        type: Number,
        required: true,
    },
    name:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required:true,
    },
    category:{
        type: String,
        reuired: true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
})

app.post('/addproduct',async (req, res)=>{
    let products = await product.find({});
    let id;
    if(products.length>0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id+1;
    }
    else{
        id = 1;
    }
    const new_product = new product({
        id: id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
    });
    console.log(new_product);
    await new_product.save();
    console.log("Saved");
    res.json({
        success:true,
        name:req.body.name,
    })
})


// Creating API for deleting products

app.post('/removeproduct',async (req, res)=>{
    await product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success: true,
        name: req.body.name,
    })
})


// Creating API for getting all products
app.get('/allproducts', async (req, res) => {
    let products = await product.find({});
    console.log("All products fetched");
    res.json(products.map(product => ({
        id: product.id,
        name: product.name,
        image: product.image,
        category: product.category,
        date: product.date
    })));
});



app.listen(PORT,(error)=>{
    if(!error){
        console.log("Server running on Port " +PORT)
    }
    else{
        console.log("Error: " +error)
    }
})