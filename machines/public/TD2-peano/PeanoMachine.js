//
// ======================== MACHINE DE PEANO
class PeanoMachine extends ProgramsEngine {

    constructor() {
        super();
        this.instructions = this;

        this.expression = {
            /**
             * Affiche dans la console les instructions Javascript utilisables 
             * comme expressions
             */
            man() {
                console.log('Peano - Expression := ');
                console.log('0 | ++expr | --expr | definition');
                console.log('definition = <Nom_fonction>(<arg>i, <arg>j, ...) {  }');
                console.log('\n');
            }
        };

        this.definition = {
            /**
             * Affiche dans la console les valeurs possibles de Définition
             */
            man() {
                console.log('Peano - definition := ');
                console.log('| <expression>');
                console.log('| Xi (arg0, arg1, arg2...)');
                console.log('| si <CONDITION> alors <I1> sinon <I2>\n');
                console.log('\n');
            }
        };
    }

    /**
     * Affiche dans la console la grammaire de la machine
     */
    man() {
        console.log('Grammaire de la machine de Peano :');
        this.expression.man();
        this.definition.man();
    }
};

console.log('\n\t\t\t ===== MACHINE DE PEANO');
new PeanoMachine().executer_programme("Test de la machine de Peano (l'erreur ProgramsEngine:45 est normale)");