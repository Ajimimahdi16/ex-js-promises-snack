/*🏆 Snack 1
Ottieni il titolo di un post con una Promise.

Crea una funzione getPostTitle(id) 
che accetta un id e restituisce una Promise che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}
🎯 Bonus: Ottieni l'intero post con l'autore
Crea una funzione getPost(id) che recupera l'intero post. Concatena una seconda chiamata che aggiunge una proprietà user che contiene i dati dell'autore, recuperati dalla chiamata https://dummyjson.com/users/{post.userId}.*/


function getPostTitle(id){
    return new Promise((resolve, reject)=> {
        fetch(`https://dummyjson.com/posts/${id}`)
        .then (Response => Response.json())
        .then (post =>resolve(post.title))
        .catch(errore => reject(errore));
        });
        
    };

getPostTitle(1)
.then(title => console.log("titolo ricevuto ", title))
.catch(errore => console.log("errore", errore))


/*🏆 Snack 2
Crea la funzione lanciaDado() che restituisce una Promise che, 
dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, 
nel 20% dei casi, il dado si "incastra" e la Promise va in reject.
🎯 Bonus: HOF con closure per memorizzare l'ultimo lancio
Modifica la funzione in creaLanciaDado(), che restituisce una closure che memorizza l'ultimo risultato. 
Se il numero esce due volte di fila, stampa "Incredibile!".*/

function lanciaDado() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {  
    
            const siIncastra = Math.random() < 0.2;

            if (siIncastra) {
                reject("Il dado si è incastrato! ");
            } else {
                const lancio = Math.floor(Math.random() * 6) + 1;
                resolve(`Hai fatto: ${lancio}`);
            }
        }, 3000);
    });
}


lanciaDado()
    .then(messaggio => console.log(messaggio))
    .catch(error => console.error(error));