import db from "../database/db.js";

class MusicaDAO {
    async createMusica(nombre, artista, duracion, genero) {
        const [id] = await db('musica')
            .insert({
                nombre,
                artista,
                duracion,
                genero
            })
            .returning('id');
        return id;
    }

    async getMusicaById(id) {
        const musica = await db('musica')
            .select('*')
            .where({ id })
            .first();
        return musica;
    }

    async updateMusica(id, updates) {
        await db('musica')
            .where({ id })
            .update(updates);
        return true;
    }

    async deleteMusica(id) {
        await db('musica')
            .where({ id })
            .del();
        return true;
    }
}

export default new MusicaDAO();