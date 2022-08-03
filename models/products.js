const mongoose = require('mongoose');
const providers = require('./providers')

const objectSchema = {
    id: { 
        type: Number, 
        required: true,
        unique: true
    },
    title: { 
        type: String, 
        required: true 
    },
    price: { 
        type: Number, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    image:{
        type: String,
        validate: {
            validator: function(url){
                return url.indexOf('.jpg') != -1;
            }, 
            message: "Porfa, sólo imágenes JPG"
        }
    },
    provider:[{type: mongoose.Schema.Types.ObjectId, ref: 'providers'}]
};
// Crear el esquema
const productSchema = mongoose.Schema(objectSchema);
// Crear el modelo --> Colección
const Product = mongoose.model('products', productSchema);

module.exports = Product;

//insertar un producto

// const p = new Product(
//     { 
//         id: 1,
//         title: "Tortilla",
//         price: 1.80,
//         description: "Tortilla jugosa de teatro",
//         image: "https://www.recetasderechupete.com/wp-content/uploads/2020/11/Tortilla-de-patatas-4-768x530.gif" 
//     }
//     );

    // p.save().then((data)=> console.log(data));