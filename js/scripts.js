var km = parseInt(prompt("Inserisci i km da percorrere"));
var age = parseInt(prompt("Inserisci  l'età del passeggero"));
var price = 0.21 * km;
var discount20 = price * 0.20;
var discount40 = price * 0.40;

if (age < 18) {
    var price = price - discount20;
} else if (age > 65) {
    var price = price - discount40;
}
document.getElementById("prezzo").innerHTML = price.toFixed(2);
