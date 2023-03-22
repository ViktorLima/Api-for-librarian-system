const LibrarianServices = require('../services/LibrarianServices');

module.exports = {
    BuscarTodos: async (req, res) => {
        let json = { error: '', result: [] };

        let LibrarianName = await LibrarianServices.BuscarTodos();

        for (let i in LibrarianName) {
            json.result.push({
                id: LibrarianName[i].id,
                Nome: LibrarianName[i].Nome,
                NomeLivro: LibrarianName[i].NomeLivro,
                GeneroLivro: LibrarianName[i].Genero,

            });
        }
        res.json(json);
    },

    BuscarporId: async (req, res) => {
        let json = { error: '', result: {} };

        let Id = req.params.id;

        let LibrarianForId = await LibrarianServices.BuscarPorId(Id);
        if (LibrarianForId) {
            json.result = LibrarianForId;
        }
        res.json(json);


    },
    Insertion: async (req, res) => {
        let json = { error: '', result: {} };

        let Autor = req.body.Autor;
        let Nome = req.body.Nome;
        let NomeLivro = req.body.NomeLivro;

        if (Autor && Nome && NomeLivro) {
            let LibrarianSystemPost = await LibrarianServices.Insertion(Autor, Nome, NomeLivro);
            json.result = {
                id: LibrarianSystemPost,
                Autor,
                Nome,
                NomeLivro
            };
        } else {
            json.error = 'Fields not send'
        }
        res.json(json);


    },
    Update: async (req, res) => {
        let json = { error: '', result: {} };
        
        let Id =  req.params.id;
        let Autor = req.body.Autor;
        let Nome = req.body.Nome;
        let NomeLivro = req.body.NomeLivro;
        if (Id && Autor && Nome && NomeLivro) {
            await LibrarianServices.Update(Id, Autor, Nome, NomeLivro);
            json.result = {
                Id,
                Autor,
                Nome,
                NomeLivro
            };
        } else {
            json.error = 'Fields not send'
        }
        res.json(json)
    
    },
    Delete: async (req, res) => {
        let json = { error: '', result: {} };
        let Id =  req.params.id;
        await LibrarianServices.Delete(Id);
        res.json(json)
    
    }
    
}