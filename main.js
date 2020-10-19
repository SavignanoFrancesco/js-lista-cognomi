//Creare un array contenente dei cognomi in ordine casuale.
//Chiedere all'utente il suo cognome e inserirlo nella lista dei cognomi.
//Stampare la lista dei cognomi in ordine alfabetico e comunicare all'utente la posizione in cui si trova il suo cognome (dopo averlo riordinato).

//array contenente una lista di cognomi casuali
var lista_cognomi = ['rossi','ferrari','russo','bianchi','romano','gallo','costa','fontana'];

//Richiesta all'utente di inserire il proprio cognome
var cognome = prompt('Inserisci il tuo cognome');

//Inserimento del cognome utente nella lista e tampa della lista disordinata
lista_cognomi.push(cognome);
console.log('Lista disordinata:');
for(var i = 0; i < lista_cognomi.length; i++){
    console.log(i, lista_cognomi[i]);
}

//ordinamento alfabetico
lista_cognomi.sort();

//stampa della lista ordinata
console.log('Lista ordinata:');
for(var i = 0; i < lista_cognomi.length; i++){
    console.log(i, lista_cognomi[i]);
}

//stampa la posizione del cognome dell'utente dopo aver ordinato l'array
console.log('Posizione di', cognome, 'nell\'array: ', lista_cognomi.indexOf(cognome));
