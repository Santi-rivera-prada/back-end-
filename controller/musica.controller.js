import musicaServices from "../service/musica.services.js";

class MusicaController {
    async createMusica(request, response) {
        try {
            /**
             * El cuerpo (body) debe tener la siguiente estructura:
             * {
             *     nombre: "Canción",
             *     artista: "Artista",
             *     duracion: "Duración",
             *     genero: "Género"
             * }
             */
            const id = await musicaServices.createMusica(request.body);
            return response.status(201).json(id);
        } catch (error) {
            console.error(error);
            return response.status(500).send('Error interno del servidor');
        }
    }

    async getMusicaById(request, response) {
        try {
            const id = request.params.id;
            const musica = await musicaServices.getMusicaById(id);
            if (!musica) {
                return response.status(404).send('Música no encontrada');
            }
            return response.status(200).json(musica);
        } catch (error) {
            console.error(error);
            return response.status(500).send('Error interno del servidor');
        }
    }

    async updateMusica(request, response) {
        try {
            const id = request.params.id;
            const update = request.body;
            const success = await musicaServices.updateMusica(id, update);
            if (!success) {
                return response.status(404).send('Música no encontrada');
            }
            response.status(200).send('Música actualizada');
        } catch (error) {
            console.error(error);
            return response.status(500).send('Error interno del servidor');
        }
    }

    async deleteMusica(request, response) {
        try {
            const id = request.params.id;
            const success = await musicaServices.deleteMusica(id);
            if (!success) {
                return response.status(404).send('Música no encontrada');
            }
            return response.send('Música eliminada');
        } catch (error) {
            console.error(error);
            return response.status(500).send('Error interno del servidor');
        }
    }
}

export default new MusicaController();