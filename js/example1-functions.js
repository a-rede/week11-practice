// Takes a string and writes a message back

// // Old function declaration
// function greet(name) {
//     console.log(`Hello ${name}!`);
// };

// // Anonymous function declaration
// let greet = function(name) {
//     console.log(`Hello ${name}!`);
// };

// // Arrowhead function declaration
// let greet = name => {
//     console.log(`Hello ${name}!` );
// };


// greet("Abell");

// Example 2: 
// Old function declaration
// function greet(name, day = "Day") {
//     console.log(`Good ${day} ${name}!`);
// };

// // Anonymous function declaration
// let greet = function(name, day = "Day") {
//     console.log(`Good ${day} ${name}!`);
// };

// // Arrowhead function declaration
// let greet = (name, day = "Day") => {
//     console.log(`Good ${day} ${name}!`);
// };

// greet("Abell");
// greet("Abell", "Night");

// Example 3: Circle Radius
// let input = prompt("Enter a value: ")

// let circleArea = input => {

// } 

// Example 4: Add DOM elements
const unorderedListElement = document.querySelector(".shopping"); // DOM ELement

function populateList(list) {
    for(let i = 0; i < list.length; i++){
        // Creates li element
        const listItemElement = document.createElement("li");
        
        // adds the list content to the ul 
        listItemElement.textContent = list[i];

        // appends the the listItemElement to the UL
        unorderedListElement.appendChild(listItemElement);
    }
};

let shoppingList = ['cheese', 'bread', 'green pepper'];

populateList(shoppingList);

// Example 5: Modifying CSS with JavaScript

function listStyleChange() {
    unorderedListElement.classList.replace("circleList", "squareList");
}

listStyleChange();

// Example 6: Image updating (adding a src, width, height, and alt)
function updateImage() {
    const imageElement = document.querySelector("#shoppingCart");
    imageElement.src = "https://cdn-icons-png.flaticon.com/512/263/263142.png";
    imageElement.width = 100;
    imageElement.height = 100;
    imageElement.alt = "Shopping cart icon";
};

updateImage();


// Example 7: Updating styles

function findGreen() {
    const listItem = document.querySelectorAll(".shopping li");
    for (let i = 0; i < listItem.length; i++) {
        if (listItem[i].textContent.includes("green")) {
            listItem[i].classList.add("greenText");
        }
    };
};

findGreen();