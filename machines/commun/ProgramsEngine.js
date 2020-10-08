class ProgramsEngine {

    constructor() {
        this.that = this;

        this.etat = {};
        this.descr = 'Description de la fonction';
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
        console.log(' === Exécution de ' + nom_programme + ' === ');

        //
        // ÉTAT INITIAL
        //affichage
        this.afficher_etat('', 'initial');

        console.log('\tDescription de la fonction appliquée : ' + this.descr);
        console.log('\tDEBUT séquence (' + nom_programme + ')');

        //le 3ème argument est registre | constante | fonction
        arguments[2] = this.etat[arguments[2]] != undefined ? '\"' + arguments[2] + '\"' : arguments[2];
        let js_script = 'this.programme_' + nom_programme + '(';
        for (let i = 1; arguments[i] !== undefined; i++) {

            if (i > 1) {
                js_script += ', ';
            }
            if (i != 2) {
                js_script += '"' + arguments[i] + '\"'
            } else {
                js_script += arguments[2];
            }
        }
        js_script += ');';
        eval(js_script);

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