const mongoose = require('mongoose');
/*
_id
company_name
CIF
address
url_web
*/

const objectSchema = {
    
    company_name: { 
        type: String, 
        required: true 
    },
    CIF: { 
        type: Number, 
        required: true 
    },
    address: { 
        type: String, 
        required: true 
    },
    url_web:{
        type: String,
        required: true
    }
};
// Crear el esquema
const providerSchema = mongoose.Schema(objectSchema);
// Crear el modelo --> Colección
const Provider = mongoose.model('providers', providerSchema);

module.exports = Provider;


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