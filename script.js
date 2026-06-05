// Onderdelen uit de HTML ophalen

const counter = document.getElementById("counter");
const loader = document.getElementById("loader");
const site = document.getElementById("site");

const arabicName = document.getElementById("arabicName");
const latinName = document.getElementById("latinName");
const name = document.getElementById("name");

// Arabische cijfers voor de loading counter

const arabicDigits = ['٠','١','٢','٣','٤','٥','٦','٧','٨','٩'];

// Gewone cijfers omzetten naar Arabische cijfers

function toArabicNumber(number){
    return number
        .toString()
        .padStart(3,'0')
        .split('')
        .map(digit => arabicDigits[digit])
        .join('');
}

// Eerst de Arabische naam laten zien en daarna omdraaien

setTimeout(() => {

    name.classList.add("flip");

    setTimeout(() => {

        // Arabische naam verbergen

        arabicName.style.display = "none";

        // Nederlandse naam laten zien

        latinName.style.display = "inline-block";

    }, 450);

}, 300);

// Startwaarde van de counter

let count = 0;

// Counter laten oplopen tijdens de intro

const interval = setInterval(() => {

    count += 2;

    // Maximaal tot 100 tellen

    if(count > 100){
        count = 100;
    }

    counter.textContent = toArabicNumber(count);

    // Als de intro klaar is

    if(count === 100){

        clearInterval(interval);

        // Loader weg laten gaan

        loader.classList.add("hide");

        // Website zichtbaar maken

        site.classList.add("show");

        // Scrollen weer aanzetten

        document.body.style.overflow = "auto";
    }

}, 20);