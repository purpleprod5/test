var rl = require('readline-sync');

x = "oui";
var resulta;
var test

while (x == "oui") {

    if(!resulta) test = rl.question('choisicer un nombre : ');
    var test1 = rl.question('choisicer deuxième un nombre : ');
    var test2 = rl.question('choisicer une opération : ');
    switch (test2) {
        case "addition":
            resulta = Number(test) + Number(test1);
            break;
        case "soustraction":
            resulta = test - test1;
            break;
        case "multiplication":
            resulta = test * test1;
            break;
        case "division":
            resulta = test / test1;
            break;
        default:
            console.log("opération non reconnus");
    }
    console.log(resulta);
    var garde_résulta = rl.question('voulez garder le résulta pour votre prochaine opération : ');
    
    if (!garde_résulta=="oui") {
        resulta = 0;
        console.log("le résulta ne seras pas garder");
    } else test = resulta;

    if (rl.question("voulez vous continuer ?") !== "oui") return x = "non";
}
