// Prototype 

// let myName = "hitesh     "
// let mychannel = "chai     "
// console.log(myName.trueLength); // trueLength


let myHeros = ["thor", "spiderman"]


let Herosis ={
    thor: "thander",
    spiderman: "hand to hand combate",
    getSpiderManPower: function(){ // methord
        console.log(`Spider power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// Herosis.hitesh() // hitesh is present in all objects

myHeros.hitesh()
myHeros.heyHitesh()
// Herosis.heyHitesh() // error

// braders are not giveing but path is given 
//  funtion\|Arrar\|string||--->Object----> Null


//-------------------

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TA_Support = {
    makeAssigiment: 'JavaScript assiment',
    fullTime: true,
    __proto__: TeachingSupport // sintax __proto__
}

Teacher.__proto__= User

// modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUserName = "ChaiisLove     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUserName.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()
