console.log('\n\t\t\t ===== MACHINE DE PEANO');
//peano machine
pm = new PeanoMachine();
pm.man();

pm.programme_UN = function() {
    return 1;
}

pm.programme_DEUX = function() {
    return pm.programme_UN();
}

pm.programme_TROIS = function() {
    //...
}

console.log('UN, DEUX, TROIS : ' + pm.programme_UN() + ', ' + pm.programme_DEUX() + ', ' + pm.programme_TROIS());


pm.programme_plus = function(x, y) {
    if (x == 0) {
        return y;
    } else {
        return this.programme_plus(--x, y) + 1;
    }
}
console.log('Plus (3+4) : ' + pm.programme_plus(3, 4));


pm.programme_plus_aux = function(x, y, nb_incr) {
    //...
}
console.log('Plus_aux (3+4) : ' + pm.programme_plus_aux(3, 4, 0));