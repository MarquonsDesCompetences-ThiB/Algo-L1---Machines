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

// === TD 3.1 : Conditionnelle Simple
rm.descr = '{ (Ri)=m, (Rj)=n, (Rk)=o } => { (Ri)=n^o, (Rj)=n, (Rk)=o }';

rm.etat = {
    R1: 111,
    R2: 222
};

rm.programme_cond_simple = function(R1, R2, I) {
    rm.instructions.programme_affectation(); //R1 <- R2
    //R1 <- R2

    rm.tant_que_different(R1, R2, function() {
        I();
    });
}

rm.executer_programme('cond_simple', 'R1', 'R2', function() {

}); //appel, exécution


// === TD 3.2 : Conditionnelle Complète
rm.etat = {
    R1: 111,
    R2: 222
};

rm.programme_cond_complete = function(I1, I2) {

}
rm.executer_programme('cond_complete'); //appel


// === TD 3.3 : Test Inferiorite
rm.etat = {
    R1: 111,
    R2: 222,
    RTest: 333
};

rm.programme_test_inf = function() {

}
rm.executer_programme('test_inf'); //appel