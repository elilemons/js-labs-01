"use strict";

let name1 = prompt("What is the first name?");
let name2 = prompt("What is the second name?");
let name3 = prompt("What is the third name?");
let nameToCompare;

if ( name1.length > name2.length && name1.length > name3.length ) {
    console.log(`${name1} is the longest.`);
} else if (name2.length > name1.length && name2.length > name3.length) {
    console.log(`${name2} is the longest.`);
} else if (name3.length > name1.length && name3.length > name2.length) {
    console.log(`${name3} is the longest.`);
} else if (name1.length === name2.length 
    && name1.length === name3.length 
    && name2.length === name3.length) {
    console.log(`${name1} and ${name2} and ${name3} are equal in length.`);
} else {
    console.log(`We have no idea what happened, ${name1} and ${name2}`);
}