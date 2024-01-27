//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max","HAS","PuRple","dog"];

function findWords(){
    let found_names = []; // initialize an empty array to store the found names
    for (let i = 0; i < dog_names.length; i++) { // loop through each name in the dog_names array
        let name = dog_names[i].toLowerCase(); // convert the current name to lowercase for case-insensitive comparison
        if (dog_string.toLowerCase().includes(name)) { // check if the current name is included in the dog_string (case-insensitive)
            found_names.push(dog_string.match(new RegExp('\\b' + name + '\\b', 'gi'))[0]); // push the found name to the found_names array
        }
    }
    return found_names; // return the found_names array
}

console.log(findWords()); // output: [ 'Max' ]

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    // Use the map() method to iterate over each element in the array
    return arr.map((element, index) => {
        // If the index is even, replace the element with a new string
        if (index % 2 === 0) {
            return "NewElement";
        }
        // Otherwise, keep the original element
        return element;
    });
}

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"];
let newArr = replaceEvens(arr);
console.log(newArr);

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]