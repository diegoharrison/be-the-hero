const crypto = require('crypto');  //Importando o pacote crypto para criptografia.
const connection = require('../database/connection');  //Importando a connection.

module.exports = {
    
    //List
    async index(request, response) {       
        const ongs = await connection('ongs').select('*');
            
        return response.json(ongs);
    },

    
    //Create
    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        //criptografando o id e passando como string e hexadecimal.
        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })

    return response.json({ id }); // o id será utilizado para conectar na aplicação.
    }
};