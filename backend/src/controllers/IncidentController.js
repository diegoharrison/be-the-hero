const connection = require('../database/connection');

module.exports = {

    //List 
    async index(request, response) {
      
      const { page = 1 } = request.query;  //page começa da 1, query porque vem de ? params na url.      
      
      const [count] = await connection('incidents').count();  //contador      
      
      const incidents = await connection('incidents')
       .join('ongs', 'ongs.id', '=', 'incidents.ong_id') //relacionamento das tabelas ong e incidentes.
       .limit(5) //limite de 5 registros por página. 
       .offset( (page - 1) * 5) //paginação                  
       .select([
          'incidents.*', 
          'ongs.name',
          'ongs.email',
          'ongs.whatsapp',
          'ongs.city',
          'ongs.uf'
        ]);

       response.header('X-Total-Count', count['count(*)']); //no cabeçalho da resposta pra pegar a quant. total de ítens.
          
      return response.json(incidents);
    },

    //create  
    async create(request, response) {
      const { title, description, value } = request.body;
      const ong_id = request.headers.authorization;

      const [id] = await connection('incidents').insert({
        title,
        description,
        value,
        ong_id,
      })

      return response.json({ id });      
    },

    //Delete
    async delete(request, response) {
      const { id } = request.params;
      const ong_id = request.headers.authorization;

      const incident = await connection('incidents')
        .where('id', id)
        .select('ong_id')
        .first();

        if (incident.ong_id !== ong_id) {
          return response.status(401).json({ error: 'Operation not permited.' })
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send(); // 204 enviar a resposta de sucesso, mas sem conteúdo e send enviar a resposta vazia.
    }
}