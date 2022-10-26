const f1pilot = [
    {
        name: 'Lewis',
        lastname: 'Hamilton',
        team: 'Mercedes AMG',
        img: 'hamilton.jpg'
    },
    {
        name: 'Charles',
        lastname: 'Leclerc',
        team: 'Ferrari',
        img: 'leclerc.jpg'
    },
    {
        name: 'Lando',
        lastname: 'Norris',
        team: 'McLaren',
        img: 'norris.jpg'
    },
    {
        name: 'George',
        lastname: 'Russel',
        team: 'Mercedes AMG',
        img: 'russel.jpg'
    },
    {
        name: 'Max',
        lastname: 'Verstappen',
        team: 'RedBull',
        img: 'verstappen.jpg'
    }
];

let counterImgs = 0;
let numImgs = f1pilot.length;

const textOutput = document.querySelector('.info-pilot');
const pilotBig = document.querySelector('.pilot-big');

const prev = document.querySelector('.btn-left');
const next = document.querySelector('.btn-right');

for (indice in f1pilot){

    prev.addEventListener('click', prevFunction);
    next.addEventListener('click', nextFunction);

    const pilot = f1pilot[counterImgs];
    output(pilot);
}

function prevFunction(){
    counterImgs--;
    if(counterImgs < 0) counterImgs = numImgs - 1;
    const pilot = f1pilot[counterImgs];
    output(pilot);
}

function nextFunction(){
    counterImgs++;
    if(counterImgs === numImgs) counterImgs = 0;
    const pilot = f1pilot[counterImgs];
    output(pilot);
}

function output(pilot){
    textOutput.innerHTML = `
    <h2>${pilot.name} ${pilot.lastname}</h2>
    <p>Scuderia: ${pilot.team}</p>`;

    pilotBig.innerHTML = `
    <img src="assets/img/${pilot.img}" alt="${pilot.lastname}">`;
}











