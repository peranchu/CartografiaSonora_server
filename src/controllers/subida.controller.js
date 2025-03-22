const post = require('../models/file')

const subida = (req, res) =>{
    const data = req.body;

    var post = new post();

    //Asignación valores
    post.description = data.description;
    post.audio = data.audio;

    post.save((err, postStored) => {
        if(err || !postStored) {
            return response.status(404).send({
                status: 'Error',
                message: 'Los Datos No se han guardado'
            });
        }
        return response.status(200).send({
            status: 'Success',
            postStored
        });
    });
};



//Exportación del módulo
module.exports = {
    subida    
};