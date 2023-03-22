const db = require('../db');

module.exports = {
    BuscarTodos: () => {
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM librarian_name', (error, results) => {
                if (error) {
                    rejeitado(error);
                    return;
                } else {
                    aceito(results);
                }
            });
        });
    },
    
    BuscarPorId: (Id) =>{
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM librarian_name WHERE id = ?', [Id],(error,results) => {
                if (error) {
                    rejeitado(error);
                    return;
                } 
                if(results.length > 0){
                    aceito(results[0]);
                    
                }else{
                    aceito(false);
                }
            });
        });
    },
    Insertion: (Autor,Nome,NomeLivro) =>{
        return new Promise((aceito, rejeitado) => {

            db.query('INSERT INTO librarian_name(Autor,Nome,NomeLivro) VALUES (?, ?, ?)', 
                [Autor , Nome , NomeLivro],
                (error,results) => {
                if (error) {
                    rejeitado(error);
                    return;
                } 
                else{
                    aceito(results.insertId);   
                }
            });
        });
    },
    Update: (Id,Autor,Nome,NomeLivro) =>{
        return new Promise((aceito, rejeitado) => {

            db.query('UPDATE librarian_name SET Autor = ?, Nome = ?, NomeLivro = ? WHERE id = ? ', 
                [ Autor, Nome, NomeLivro ,Id],
                (error,results) => {
                if (error) {
                    rejeitado(error);
                    return;
                } 
                else{
                    aceito(results);   
                }
            });
        });
    },
    Delete: (Id) =>{
        return new Promise((aceito, rejeitado) => {

            db.query('DELETE FROM librarian_name WHERE id = ? ', 
                [Id],
                (error,results) => {
                if (error) {
                    rejeitado(error);
                    return;
                } 
                else{
                    aceito(results);   
                }
            });
        });
    }

    
    
};
