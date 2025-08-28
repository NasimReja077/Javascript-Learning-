const Student = {
     fullName: "Nasim Reja", // <- all is key
     age: 22,
     cgpa: 7.5,
     isPass: true,
}
console.log(Student)
Student["age"] = Student["age"] + 1
console.log(Student)
console.log(Student["cgpa"])

//Q2 
// Creat a object 
const profile = {
     userID: "Nasim Reja",
     isFllowButten: false,
     postNo: 350,
     fllowerNo: 250,
     floingNo: 35
}
console.log(profile)
console.log(typeof profile)
console.log(typeof profile["isisFllowButten"])