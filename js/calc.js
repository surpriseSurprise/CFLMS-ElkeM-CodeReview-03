function Calculate() {
    let name = document.getElementById('yourName').value;
    let age = parseInt(document.getElementById('age').value);
    let countries = document.getElementById('myCountry').value;
    let horsepower = document.getElementById('horsepower').value;
    let insAustria = Math.floor(horsepower * 100 / age + 50);
    let insHungary = Math.floor(horsepower * 120 / age + 100);
    let insGreece = Math.floor(horsepower * 150 / (age + 3) + 50);

if (countries == 'austria') {
    document.getElementById("output").innerHTML = name + ", your insurance costs " + insAustria + "€";
} else if (countries == 'hungary') {
    document.getElementById("output").innerHTML = name + ", your insurance costs " + insHungary + "€";
} else if (countries == 'greece') {
    document.getElementById("output").innerHTML = name + ", your insurance costs " + insGreece + " €";
}

}

document.getElementById('formSubmit').addEventListener("click", Calculate, false);

// Team


var teamMembers = [{name:"Fran", email:"fran@index.com",image:"images/person1.png"},{name:"Bill",email:"bill@index.com",image:"images/person2.png"},{name:"Fritz", email:"fritz@index.com",image:"images/person3.png"}];

function Team(teamMembers) {

    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * i);
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
    }
