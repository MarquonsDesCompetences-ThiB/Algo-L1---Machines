class ProgramsEngine {

    constructor() {
        this.that = this;
    }

    //
    // INSTRUCTIONS UTILITAIRES POUR CET OUTIL
    /**
     * Affiche l'état de la machine (ses registres et valeurs)
     */
    afficher_etat = function(message_prefix, initial_or_final) {
        console.log('\t== ' + message_prefix + ' État ' + initial_or_final + ' : ' + JSON.stringify(this.etat) + ' == ');
    };

    executer_programme = function(nom_programme) {
        console.log(' === Exécution ' + nom_programme + ' === ');

        //
        // ÉTAT INITIAL
        //affichage
        this.afficher_etat('', 'initial');

        console.log('\tDEBUT séquence (' + nom_programme + ')');

        eval('this.programme_' + nom_programme + '()');
        console.log('\tFIN séquence (' + nom_programme + ')');

        //
        //ÉTAT FINAL
        //affichage
        this.afficher_etat('', 'final');
        console.log('');
    };

    programme = function() {
        console.error("\t\tCette fonction doit être implémentée dans chaque fichier exercice");
    }
}