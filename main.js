//Creare un array contenente dei cognomi in ordine casuale.
//Chiedere all'utente il suo cognome e inserirlo nella lista dei cognomi.
//Stampare la lista dei cognomi in ordine alfabetico e comunicare all'utente la posizione in cui si trova il suo cognome (dopo averlo riordinato).

//array contenente una lista di cognomi casuali
var surname_list = ['rossi','ferrari','russo','bianchi','romano','gallo','costa','fontana'];

//Richiesta all'utente di inserire il proprio cognome
var surname = prompt('Inserisci il tuo cognome');


//Inserimento del cognome utente nella lista e stampa della lista disordinata
surname_list.push(surname);
console.log('Lista disordinata:');
for(var i = 0; i < surname_list.length; i++){
    console.log(i, surname_list[i]);
}

//ordinamento alfabetico
surname_list.sort();

//stampa della lista ordinata
console.log('Lista ordinata:');
for(var i = 0; i < surname_list.length; i++){
    console.log(i, surname_list[i]);
}

//(soluzione con metodo indexOf())
// console.log('Posizione di', cognome, 'nell\'array: ', surname_list.indexOf(cognome));

//soluzione con cicolo for(trova l'ultima posizione del cognome se è gia presente un cognome uguale in lista)
var last_position = 0;
var counter = 0;
//ricerca l'ultima posizione e quante volte è presente nella lista
for (var i = 0; i < surname_list.length; i++) {
    if(surname == surname_list[i]){
        counter += 1;
        last_position = i;
    }
}

//calcola la prima posizione in cui si trova il cognome
var first_position = last_position - (counter - 1);
//stampa della quante volte è presente, prima posizione e ultima posizione
if (counter > 1) {
    console.log(surname,'è presente',counter,'volte.');
    console.log('Il primo', surname,'si trova in posizione', first_position);
    console.log('L\'ultimo',surname,'si trova in posizione',last_position);
}else{
    console.log(surname,'si trova in posizione',last_position);
}
