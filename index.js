function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {
    var pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.salsas = salsas;
    return pizza;
}

function randomPizza() {
    let cortezas = ["Estilo Chicago","Lanzada a mano","Margarita","Napolitana"];
    let tipoSalsas = ["Tradicional","marinara","Cheddar","Barbacoa"];
    let quesos = ["Mozzarella","Feta","Parmesano","Provolone"];
    let salsas = ["Pepperoni", "Salchicha","champiñones", "aceitunas", "cebollas","aceite de oliva", "albahaca", "orégano"];
    
    //seleccionar los quesos
    let quesosRandom = [];
    let cantidadQuesos = Math.floor(Math.random()*(3-1))+1;
    let cantQuesos = quesos.length;
    for (let index = 0; index < cantidadQuesos; index++) {
        let quesoSeleccionado = Math.floor(Math.random()*(cantQuesos-0));
        quesosRandom.push(quesos[quesoSeleccionado]);
        quesos.splice(quesoSeleccionado,1);
        cantQuesos--;
    }

    //seleccionar las salsas
    let salsasRandom = [];
    let cantidadSalsas = Math.floor(Math.random()*(4-1)+1);
    let cantSalsas = salsas.length;
    for (let index = 0; index < cantidadSalsas; index++) {
        let salsaSeleccionada = Math.floor(Math.random()*(cantSalsas-0));
        salsasRandom.push(salsas[salsaSeleccionada]);
        salsas.splice(salsaSeleccionada,1);
        cantSalsas--;
    }

    let pizzita = pizzaOven(cortezas[Math.floor(Math.random()*(4-0))], tipoSalsas[Math.floor(Math.random()*(4-0))],
    quesosRandom,salsasRandom);
    return pizzita;
}

var pizza1 = pizzaOven( "Estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);

console.log("Ingredientes de pizza "+pizza1.tipoCorteza);
console.log(pizza1);

var pizza2 = pizzaOven("Lanzada a mano", "marinara" ,["mozzarella", "feta"],["champiñones", "aceitunas", "cebollas"]);

console.log("Ingredientes de pizza "+pizza2.tipoCorteza);
console.log(pizza2);

var pizza3 = pizzaOven("Margarita", "tradicional" ,["mozzarella"],["aceite de oliva", "albahaca", "orégano"]);

console.log("Ingredientes de pizza "+pizza3.tipoCorteza);
console.log(pizza3);

var pizza4 = pizzaOven("Napolitana", "Cheddar" ,["mozzarella"],["salsa de tomate", "queso mozzarella", "anchoas"]);

console.log("Ingredientes de pizza "+pizza4.tipoCorteza);
console.log(pizza4);

var pizzaRandom = randomPizza();
console.log("Ingredientes de pizza random :");
console.log(pizzaRandom);