// Old function declaration
function greet(name, day = "Day") {
    console.log(`Good ${day} ${name}!`);
};

// // Anonymous function declaration
// let greet = function(name, day = "Day") {
//     console.log(`Good ${day} ${name}!`);
// };

// // Arrowhead function declaration
// let greet = (name, day = "Day") => {
//     console.log(`Good ${day} ${name}!`);
// };

greet("Abell");
greet("Abell", "Night");
