/* ======================== INFOS ======================== */
// En Javascript, COMMENTAIRE 1 ligne (car commence par '//')
/*
        En Javascript, COMMENTAIRE MULTILIGNE
        car commence par '/' (slash) et '*' (astérisque) 
        et finit par '*' (astérisque) et '/' (slash)
*/
console.log('\n\t\t\t ===== MACHINE A REGISTRES');
//registers machines
let rm = new RegistersMachine();

//
// ÉTAT INITIAL
// déclaration
rm.descr = '{ (Ri)=m, (Rj)=n} => { (Ri)=2, (Rj)=2 }';

rm.etat = {
    //choix des valeurs
    //changez les et observez l'état final résultant
    R1: 777,
    //registre temporaire
    R2: 888
};


//
//PROGRAMME DEMANDÉ, contrôles, séquences : fonction
// déclaration
rm.programme_definition = function(R1) {
    rm.remise_a_zero(R1); // R1 <- 0
    rm.remise_a_zero('R2'); // R2 <- 0

    rm.increment(R1); // R1++
    rm.increment(R1); // R1++

    //tant que R1 != R2
    rm.tant_que_different(R1, 'R2',
        function() { // faire
            rm.increment('R2'); //R2++
        }
    );
}

//appel, exécution
rm.executer_programme('definition', 'R1');