// Lexical scoping is a concept in JavaScript that determines the scope of variables based on their location within the source code. In other words, a variable's scope is defined by the block of code in which it is declared, and nested functions have access to variables declared in their parent scopes.
// it is important for understanding how variable scope works in JavaScript, especially when dealing with closures.


function outer(){
     let username = "Nasim" // parent scope

     // console.log("Too Outer",secret) // ReferenceError: secret is not defined // parent scope can not access child scope variables because it is not in the same scope
     function inner(){ // child scope
          let secret = "mySecret550";
          console.log("inner:",username, "mySecret:",secret);
     }
     function innerTwo(){// child scope
          console.log("innerTwo:",username);
          // console.log("innerTwo:",username, "mySecret:",secret); // because secret is not defined in this scope // not shared child scope variable // but get access to parent scope variable
     }
     inner();
     innerTwo();
}
outer(); // inner: Nasim
// console.log("Too Outer",username); // ReferenceError: username is not defined

// https://www.youtube.com/watch?v=VaH09NXQZ58
function makeFunc(){ // closure example
     const name = "Mozilla"; // outer function scope // captured by closure
     function displayName(){ // inner function // displayName is a closure
          console.log(name);
     }
     return displayName;
}
const myFunc = makeFunc();
myFunc(); // Output: Mozilla

// closure // https://www.youtube.com/shorts/MnhHhX92o64

function returnFuncs(){
     const x = () =>{
          let a = 1;
          console.log(a);
          const y = () => {
               // let a = 2;
               console.log(a);
               const z = () => {
                    // let a = 3;
                    console.log(a);
               }
               z();
          }
          a = 999;
          y();
     }
     return x;
}
let a = returnFuncs();
a(); // 1