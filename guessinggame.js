// const favMovies = [
//     ['Begin Again', 'Soul',],
//     ['Matrix', 'Matix Reloaded', 'Matrix Revolutions'],
//     ['Frozen', 'Frozen 2', 'Tangled', 'Alladin']
// ]

// for (let i = 0; i < favMovies.length; i++) {
//     console.log(`Row #${i + 1}`)
//     const row = favMovies[i];
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }
// }


// While LOOP

// let count = 0;
// while (count < 10) {
//     count++;
//     console.log(count)
// }

let maximum = parseInt(prompt("Enter the maximum number:"));
while (!maximum) {
    maximum = parseInt(prompt("Please enter a valid number"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter your first guess"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === "q") break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:");
    } else {
        guess = prompt("Too low! Enter a new guess:");
    }
}
if (guess === "q") {
    console.log("You quit!")
} else {
    console.log(`You got it! I took you ${attempts} guesses`)
}

