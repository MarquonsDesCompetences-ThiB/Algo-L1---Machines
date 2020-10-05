//
// ======================== INSTRUCTIONS ÉLÉMENTAIRES DE LA MACHINE
class RegistersMachine extends ProgramsEngine {
    //
    // ======================== ÉTAT DE LA MACHINE

    //etat dans lequel est le programme, les valeurs qu'il contient
    etat = {
        R1: 11, //registre 1 de nom R1 avec pour valeur 11
        R2: 22,
        R3: 33,
        R4: 44,
        R5: 55,
        R6: 66,
        R7: 77,
        R8: 88,
        R9: 99
    };

    constructor() {
        super();
        this.instructions = this;
    }

    /**
     * Reset, remet à zéro le registre spécifié
     * nom_registre : Nom de clé de état {'R1', 'R2', 'Ri'}
     */
    remise_a_zero(nom_registre) {
        //sauvegarde l'ancienne valeur pour l'afficher ensuite
        let old_val = this.etat[nom_registre];

        //met à 0 le registre
        this.etat[nom_registre] = 0;

        //affichage ancienne valeur et nouvelle
        console.log('\t\tremise_a_zero ' + nom_registre + ' (' + old_val + '->' + this.etat[nom_registre] + ')');
    }

    /**
     * Additionne 1 au registre spécifié
     */
    increment(nom_registre) {
        //sauvegarde l'ancienne valeur pour l'affichage
        let old_val = this.etat[nom_registre];

        //incrémente le registre
        this.etat[nom_registre]++;

        //affichage
        console.log('\t\tincrement ' + nom_registre + ' (' + old_val + '->' + this.etat[nom_registre] + ')');
    }

    /**
     * Additionne 1 au registre spécifié
     */
    tant_que_different(nom_registre_1, nom_registre_2, program) {
        console.log('\t\tDEBUT tant_que');

        //"tant que différent" en Javascript
        while (this.etat[nom_registre_1] != this.etat[nom_registre_2]) {
            //affichage
            console.log('\t\t\t' + nom_registre_1 +
                ' != ' +
                nom_registre_2 +
                ' (' + this.etat[nom_registre_1] +
                ' != ' +
                this.etat[nom_registre_2] + ') :');

            program();
        }

        //affichage
        console.log('\t\tFIN tant_que : ' + nom_registre_1 + ' == ' + nom_registre_2 + ' == ' + this.etat[nom_registre_1]);
    }
};

console.log('\n\t\t\t ===== TEST');
new RegistersMachine().executer_programme("Test de la machines à registres (l'erreur ProgramsEngine:26 est normale)");