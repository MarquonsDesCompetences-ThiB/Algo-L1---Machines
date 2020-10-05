//registers machines
//let rm = new RegistersMachine_Engine();

//
// ÉTAT INITIAL
// déclaration
rm.etat = {
    //choix des valeurs
    //changez les et observez l'état final résultant
    R1: 777,
    R2: 888
};


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

// === TD 2.1 : initialisation
rm.programme_initialisation = function() {

}

//appel, exécution
rm.executer_programme('initialisation');


// === TD 2.2 : affectation
rm.programme_affectation = function() {

}
rm.executer_programme('affectation'); //appel


// === TD 2.3 : decrementation
rm.programme_decrementation = function() {

}
rm.executer_programme('decrementation'); //appel


// === TD 2.4 : addition
rm.programme_addition = function() {

}
rm.executer_programme('addition'); //appel


// === TD 2.5 : soustraction
rm.programme_soustraction = function() {

}

//appel
rm.executer_programme('soustraction'); //appel


// === TD 2.6 : multiplication
rm.programme_multiplication = function() {

}

//appel
rm.executer_programme('multiplication'); //appel


// === TD 2.7 : exponentiation
rm.programme_exponentiation = function() {

}

//appel
rm.executer_programme('exponentiation'); //appel