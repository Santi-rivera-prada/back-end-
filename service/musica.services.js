import musicaDao from "../dao/musica.dao.js"

class MusicaService {
    async createMusica(musicaDto) {
        const { nombre, artista, duracion, genero } = musicaDto;
        return musicaDao.createMusica(nombre, artista, duracion, genero)
    }

    async getMusicaById(id) {
        return musicaDao.getMusicaById(id)
    }

    async updateMusica(id, updates) {
        return musicaDao.updateMusica(id, updates)
    }

    async deleteMusica(id) {
        return musicaDao.deleteMusica(id)
    }
}

export default new MusicaService();