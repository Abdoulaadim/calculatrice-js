/*function afficher() {
    var x = document.querySelectorAll('.number');
    console.log(x[1].innerText);


}*/

/*window.onload = function() {
    var number = "";
    var numberTwo = "";
    var selectedOperator = "";
    var result = document.querySelector("#display");

    document.querySelector('.number').onclick = function() {
        number += document.querySelector('.number').innerText;
        document.querySelector('#display').text(number);
        console.log(number);

    }



};*/
///////////////////////////////////////////////////////
/*var num;
var x = document.querySelectorAll(".number");
var clear = document.querySelector(".clear");
var aff = document.querySelector("#display");
x.forEach((e) => {
    e.onclick = function() {

        aff.innerHTML += e.innerText;



    }
});





console.log(aff.value);
clear.onclick = function() {

    aff.innerText = "";
}*/
///////////////////////////////////////////////////////

var num1 = 0,
    num2 = 0,
    opr = "",
    spanNumbers = document.querySelectorAll(".number"),
    spanOperator = document.querySelectorAll(".operator"),
    aff = document.querySelector("#display"),
    reset = document.querySelector("#reset"),
    clear = document.querySelector("#clear"),
    memoirer = document.querySelector("#memoirer"),
    memoires = document.querySelector("#memoires"),
    Vopratclick = false, //vérifier si un opérateur est cliqué
    Vegalclick = false, //vérifier si vous cliquez sur égal
    stoq,
    fco = 0; //premier clic sur l'opérateur


//clear pas à pas (num par num)
clear.onclick = function() {
    aff.innerHTML = aff.innerHTML.substring(0, aff.innerHTML.length - 1);
}

//vider le span d'affichage
reset.onclick = function() {
    Vopratclick = false;
    Vegalclick = false;
    fco = 0;
    num1 = 0;
    num2 = 0;
    opr = "";
    aff.innerHTML = "0";
}

//memoire
memoires.onclick = function() {
    stoq = aff.innerHTML;

}
memoirer.onclick = function() {
    aff.innerHTML = stoq;
}

//boucle de span num avec onclick 
for (var i = 0; i < spanNumbers.length; i++) {
    spanNumbers[i].onclick = function() {
        //quan l'operateur + || - || * || / en vide laffichage de num1  pour  num2
        if (Vopratclick) {
            num1 = parseFloat(aff.innerHTML);
            aff.innerHTML = "";
        }

        //vérifie si le texte ne contient pas '.'
        if (aff.innerHTML.toString().indexOf(".") === -1) {
            //si le texte est égal à 0 et que le span pressé n'est pas un '.'
            if (aff.innerHTML === "0" && this.innerHTML !== ".") {
                aff.innerHTML = this.innerHTML;
                Vopratclick = false;

            } else {
                aff.innerHTML = aff.innerHTML + this.innerHTML;
                Vopratclick = false;
            }

        } else if (this.innerHTML !== ".") {
            aff.innerHTML = aff.innerHTML + this.innerHTML;
            Vopratclick = false;
        }

    }
}

//boucle de span opert avec onclick 
for (var i = 0; i < spanOperator.length; i++) {
    spanOperator[i].onclick = function() {

        if (fco === 0) {
            fco++;
            num1 = parseFloat(aff.innerHTML);
            opr = this.innerHTML;
            console.log(opr);
            Vopratclick = true;

        } else {
            //si le span cliqué n'est pas =
            if (this.innerHTML !== "=") {
                //si = n'est pas déjà cliqué
                if (!Vegalclick) {
                    num2 = parseFloat(aff.innerHTML);
                    aff.innerHTML = calc(opr, num1, num2);
                    opr = this.innerHTML; // récupère l'opérateur
                    //console.log(opr);
                    num2 = parseFloat(aff.innerHTML);
                    Vopratclick = true;
                    Vegalclick = false;
                } else {
                    Vegalclick = false;
                    opr = this.innerHTML;
                }
            } else {
                num2 = parseFloat(aff.innerHTML);
                aff.innerHTML = calc(opr, num1, num2);
                opr = this.innerHTML;
                console.log(opr);
                num1 = parseFloat(aff.innerHTML);
                Vopratclick = true;
                Vegalclick = true;
            }
        }
    };
}







//creation une fonction calc pour effectuer l'opération
function calc(op, n1, n2) {

    var result = 0;
    switch (op) {
        case "+":
            result = n1 + n2;
            break;
        case "-":
            result = n1 - n2;
            break;
        case "×":
            result = n1 * n2;
            break;
        case "/":
            if (n2 > 0) {
                result = n1 / n2;
            }
            break;
        case "COS":
            result = Math.cos(n1);
            console.log(result);
            break;
        case "SIN":
            result = Math.sin(n1);
            console.log(result);
            break;
        case "Tang":
            result = Math.tan(n1);
            console.log(result);
            break;
        case "Sqrt":
            result = Math.sqrt(n1);
            console.log(result);
            break;
        case "Log":
            result = Math.log(n1);
            console.log(result);
            break;



    }
    return result;

}