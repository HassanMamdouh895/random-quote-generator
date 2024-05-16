var btn = document.getElementById("btn")
var output = document.getElementById("output")
var qutes = [
    ' “Be yourself; everyone else is already taken.” ',
    ' “If you tell the truth, you dont have to remember anything.” ',
    ' “A room without books is like a body without a soul.”',
    '“Be the change that you wish to see in the world.”',
    '“A friend is someone who knows all about you and still loves you.”',
    '“It is better to be hated for what you are than to be loved for what you are not.”',
]







var newqutes


function Qutes() {
    var randomqutes = qutes[Math.floor(Math.random() * qutes.length)]



    while (newqutes===randomqutes) {
        randomqutes = qutes[Math.floor(Math.random() * qutes.length)]
    }




    output.innerHTML = randomqutes
    newqutes = randomqutes
    
}

