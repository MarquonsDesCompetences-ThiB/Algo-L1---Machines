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

// === TD 3.1 : Conditionnelle Simple
rm.programme_cond_simple = function() {

}

//appel, exécution
rm.executer_programme('cond_simple');


// === TD 3.2 : Conditionnelle Complète
rm.programme_cond_complete = function() {

}
rm.executer_programme('cond_complete'); //appel


// === TD 3.3 : Test Inferiorite
rm.programme_test_inf = function() {

}
rm.executer_programme('test_inf'); //appel