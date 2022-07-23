
function Plusfunction() { // +
    var number_one = document.forms["operator"]["number1"].value;
    var number_two = document.forms["operator"]["number2"].value;

    var number_one = Number(number_one);
    var number_two = Number(number_two);

    var Reusalt = number_one + number_two;

    document.getElementById('output').innerHTML  = Reusalt ;
}

function Minusfunction() { // -
    var number_one = document.forms["operator"]["number1"].value;
    var number_two = document.forms["operator"]["number2"].value;

    var number_one = Number(number_one);
    var number_two = Number(number_two);

    var Reusalt = number_one - number_two;

    document.getElementById('output').innerHTML  = Reusalt ;
}

function Multiplicationfunction() { // *
    var number_one = document.forms["operator"]["number1"].value;
    var number_two = document.forms["operator"]["number2"].value;

    var number_one = Number(number_one);
    var number_two = Number(number_two);

    var Reusalt = number_one * number_two;

    document.getElementById('output').innerHTML  = Reusalt ;
}

function Divisionfunction() { // /
    var number_one = document.forms["operator"]["number1"].value;
    var number_two = document.forms["operator"]["number2"].value;

    var number_one = Number(number_one);
    var number_two = Number(number_two);

    var Reusalt = number_one / number_two;

    document.getElementById('output').innerHTML  = Reusalt ;
}