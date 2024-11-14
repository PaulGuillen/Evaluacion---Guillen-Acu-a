const personajes = [
    {
        "id": 1,
        "name": "Goku",
        "race": "Saiyan",
        "attack": 50000,
        "defense": 50000,
        "abilities": [
        "Transformaciones de Super Saiyan",
        "Super Kamehameha",
        "Super Dragon Fist"
        ] 
    },
    {
        "id":2,
        "name": "Vegeta",
        "race": "Saiyan",
        "attack": 49000,
        "defense": 49000,
        "abilities": [
        "Super Saiyan Transformations",
        "Final Flash",
        "Big Bang Attack"
        ]
    },
    {
        "id": 3,
        "name": "Gohan",
        "race": "Humano/Saiyan",
        "attack": 38000,
        "defense": 38000,
        "abilities": [
        "Super Saiyan Transformations",
        "Super Kamehameha",
        "Masenko"
        ]
    },
    {
        "id": 4,
        "name": "Freezer",
        "race": "Unknown",
        "attack": 47000,
        "defense": 47000,
        "abilities": [
        "Eye Laser",
        "Death Beam",
        "Death Ball"
        ]
    },
    {
        "id": 5,
        "name": "Cell",
        "race": "Android",
        "attack": 20000,
        "defense": 20000,
        "abilities": [
        "Energy Shield",
        "Super Kamehameha",
        "Destructo Disk"
        ]
    },
    {
        "id": 6,
        "name": "Buu",
        "race": "Majin",
        "attack": 29000,
        "defense": 29000,
        "abilities": [
        "Absorption",
        "Healing",
        "Chocolate Beam"
        ]
    }
]

function personajeConMayorAttack() {
    const maxAttack = personajes.reduce((max, personaje) => personaje.attack > max.attack ? personaje : max, personajes[0]);
    console.log("Personaje con el mayor attack:", maxAttack);
}

function personajesSaiyan() {
    const saiyans = personajes.filter(personaje => personaje.race === 'Saiyan');
    console.log("Personajes de raza Saiyan:", saiyans);
}

function totalAttackPersonajes() {
    const totalAttack = personajes.reduce((sum, personaje) => sum + personaje.attack, 0);
    console.log("Total de attack de todos los personajes:", totalAttack);
}

function nombresDePersonajes() {
    const nombres = personajes.map(personaje => personaje.name);
    console.log("Nombres de todos los personajes:", nombres);
}

function ejercicio5() {
    personajeConMayorAttack();
    personajesSaiyan();
    totalAttackPersonajes();
    nombresDePersonajes();
}