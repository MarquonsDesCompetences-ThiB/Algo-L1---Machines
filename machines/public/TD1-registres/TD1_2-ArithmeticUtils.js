//registers machines
//let rm = new RegistersMachine_Engine();

//
//PROGRAMMES DEMANDÉS, déclarations et appels
/**
    Rappels d'instructions possibles :

    rm.remise_a_zero('R1'); // R1 <- 0
    rm.increment('R1'); // R1++

    rm.tant_que_different('R1', 'R2',
        function() { // tant que R1 != R2 faire
            rm.increment('R2'); //R2++
        }
    );
*/

//
// === TD 2.1 : initialisation
rm.descr = '{ (Ri)=m, n € N (entiers naturels) } => { (Ri)=n }';

rm.etat = {
    R1: 11,
    R2: 22
};

rm.programme_initialisation = function(R1, n) {
    rm.remise_a_zero(R1); // R1 <- 0

}

rm.executer_programme('initialisation'); //appel, exécution


//
// === TD 2.2 : affectation
rm.descr = '{ (Ri)=m, (Rj)=n } => { (Ri)=n, (Rj)=n }';

rm.etat = {
    R1: 11,
    R2: 22
};

rm.programme_affectation = function(R1, R2) {

}
rm.executer_programme('affectation', 'R1', 'R2'); //appel


//
// === TD 2.3 : decrementation
rm.descr = '{ (Ri)=n } => { (Ri)=n-1 }';

rm.etat = {
    R1: 11,
    //
    //Registres temporaires
    R2: 22, //tmp 1
    R3: 33 //tmp 2
};

rm.programme_decrementation = function(R1) {
    //
    // Instructions
    rm.programme_initialisation('R2', 1); //R2 <- 1

    //...
}
rm.executer_programme('decrementation', 'R1'); //appel


//
// === TD 2.4 : addition
rm.descr = '{ (Ri)=m, (Rj)=n, (Rk)=o } => { (Ri)=n+o, (Rj)=n, (Rk)=o }';

rm.etat = {
    R1: 11, //i
    R2: 22, //j
    R3: 33, //k
    //
    //Registre temporaire
    R4: 44
};

rm.programme_addition = function(R1, R2, R3) {

}

rm.executer_programme('addition', 'R1', 'R2', 'R3'); //appel


//
// === TD 2.5 : soustraction
rm.descr = '{ (Ri)=m, (Rj)=n, (Rk)=o } => { (Ri)=n-o, (Rj)=n, (Rk)=o }';

rm.etat = {
    R1: 11,
    R2: 22,
    //...
};

rm.programme_soustraction = function(R1, R2, R3) {

}

rm.executer_programme('soustraction', 'R1', 'R2', 'R3'); //appel


//
// === TD 2.6 : multiplication
rm.descr = '{ (Ri)=m, (Rj)=n, (Rk)=o } => { (Ri)=n*o, (Rj)=n, (Rk)=o }';

rm.etat = {
    R1: 11,
    R2: 22,
    //...
};

rm.programme_multiplication = function(R1, R2, R3) {

}

rm.executer_programme('multiplication', 'R1', 'R2', 'R3'); //appel


//
// === TD 2.7 : exponentiation
/*
    La notation mathématique de l'exponentiation est : ^
    Exemple :
        2^2 = 4
        2^3 = 8 //base : 2, exposant : 3, puissance : 8
        4^3 = 64 
 */
rm.descr = '{ (Ri)=m, (Rj)=n, (Rk)=o } => { (Ri)=n^o, (Rj)=n, (Rk)=o }';

rm.etat = {
    R1: 11,
    R2: 22,
    //...
};

rm.programme_exponentiation = function(R1, R2, R3) {

}

rm.executer_programme('exponentiation', 'R1', 'R2', 'R3'); //appel