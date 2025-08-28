//You have a driving linens ? .. please show me .
console.log("Hello.. I am Traffic Police.. Can i sew Your driving linens ?");
console.log("Yes");
console.log("What is your Current Age ?");
let a = prompt("Enter your age = ");
a = Number.parseInt(a);  // Converting the string to a number
if(a<0){
     alert("This is an invalid age. pleases enter Right age ...");
}
else if(a<10){
     alert("You are a kid and you cannot even think of driving");
}
else if(a<18 && a>=10){
     alert("First you can Learn all Traffic Protocols , Rules And you can think of driving after 18");
}
else {
     alert("You can now drive as you are above 18.");
}

console.log("Done. Please you can goes your destination .");

// HomeWork - Explore switch statement and write a basic program in the comments
console.log("You can", (a<18? "not drive" :"drive"))