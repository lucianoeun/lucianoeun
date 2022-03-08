// var dt = new Date.now();
// var ano = dt.getDate("dd-mm-yyyy");
// var dia = dt.getMonth();

// console.log(ano);

var dados = [
    { id: 1, semana:1 }
]


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// let month = months[dt.getMonth()];
// let day = days[dt.getDay()];


const dt = new Date();
let dia = dt.getDate();
let mes = dt.getMonth() + 1;
let ano = dt.getFullYear();






console.log(dia+" / "+mes+" / "+ano);