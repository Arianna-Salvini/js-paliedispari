# Palidroma
- Step 1: Chiedere all’utente di inserire una parola 
    - Creare una variabile per la parola dell'utente
        - Usare prompt per l'inserimento

     - Creare un array contenente i caratteri della parola inserita
        - Usare .split per scomporre la parola in caratteri
        - Creare un secondo array coi caratteri della parola inserita al contrario con .reverse
            - .join per creare il secondo array
    
    - Verificare se la parola è palindroma
        - SE i caretteri della parola e i caratteri invertiti sono uguali la parola è pallindroma
            - Mssaggio appropriato
        - ALTRIMENTI la parola non è palindroma
            - Messaggio appropriato

Tools:
- const/get
- prompt
- const/let
- array
- .split
- .toRevers
- .join
- if/else
- consol.log

- Step 2: Creare una funzione per capire se la parola inserita è palindroma





Tools:
- function
- consol.log



# Pari e Dispari
- Step 1: User parameters
    - L’utente sceglie pari o dispari 
        - prompt e un to.LocalaLoercase (just in case)

    - Inserisce un numero da 1 a 5.
        - prompt con parseInt per renderlo un numero

- Step 2: Pc Numbers
    - Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
     - Craiamo la funzione per generare un numero tra un min di 1 e un max 5
        - Facciamo restituire alla funzione il numero tramite il metodo Math 
            -Prima arrotondo al numero intero più vicino con .round
            - Poi genero il numero casuale moltiplicandolo per un numero che vada dal massimo al minimo
                - Aggiungo 1 per evitare di includere lo 0 ed escludere il max
    
    -creo una variabile ugale alla funzione per generare il numero randomic per il pc mettendo 1 e 5 come parametri

- Step 3: Sommiamo i due numeri 
    - Creiamo la variabile per la somma e sommiamo i due numeri: quello dell'utente e quello random del pc

- Step 4: Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) e dichiariamo chi ha vinto.
    - Creiamo la funzione per capire chi vince
        - Mettiamo come parametri il numero del giocatore e quello del pc
        - Creiamo una condizione con if
            - SE la somma ha come risultato al modulo 0 AND l'utente ha scritto "pari" 
            OR la somma non ha come risultato al modulo 0 AND l'utente ha scritto "dispari"
                - Restituisci il messaggio di vittoria
            - ALTRIMENTI
                - Restitituisci il messaggio di sconfitta

    - Creo un alert per visualizzare il messaggio invocando la funzione e inserendo le variabili del numero del giocatore e  del numero del pc precedentemente dichiarate


Tools:
- const/var
- prompt
- .toLocateLowerCase
- .Math.random
- .Math.round
- somma
- function
- if-else if-else
- alert
- consol.log
