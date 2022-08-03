//Controlador, Lógica de negocio de la app
const Provider = require('../models/providers');

const getProduct = async (req, res) => {
            if (req.params.id) { //FIND BY ID
                try {
                    let product =  await Provider.find({id:req.params.id},'title price id -_id');
                    res.status(200).json(product); // Pinta datos en el pug
                }
                catch (error) {
                    console.log(`ERROR: ${error.stack}`)
                    res.status(404).json({"message": "producto no encontrado"});
                }
            } else { //FIND ALL
                try {
                    let products =  await Provider.find({},'-_id -__v').sort('id'); // []
                    res.status(200).json({products}); // Pinta datos en el pug
                }
                catch (error) {
                    console.log(`ERROR: ${error.stack}`)
                    let products = []
                    res.status(404).json({products});
                }
            }
        }

const createProduct = async (req, res) => {
            console.log("Esto es el console.log de lo que introducimos por postman",req.body); // Objeto recibido de producto nuevo
            const newProduct = req.body; // {} nuevo producto a guardar
        
            // Líneas
            //para guardar 
            // en una BBDD SQL o MongoDB
        try{let product = new Provider(req.body) //Crear el objeto producto
            let answer = await product.save() //Guardar objeto en Mondodb
            console.log("Este es el console.log de lo que devuelve la api",answer);
            
            res.status(200).json({"Message": `Producto ${answer.title} guardado en el sistema con ID: ${answer.id}`});
        }
        catch(error){
            console.log(`ERROR:${error.stack}`)
            res.status(400).json({"message" :`Error guardando el producto `})
        }}
            

const deleteProduct = async (req,res)=> {
    const msj ="Has enviado un DELETE para borrar product";
    console.log(msj);
    res.json({"message":msj});
  };

module.exports = {
    getProduct,
    createProduct,
    deleteProduct,
}