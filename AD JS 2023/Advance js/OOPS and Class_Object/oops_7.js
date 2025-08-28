// inheritance

class User{
     constructor(username){
          this.username = username
     }
     logMe(){
          console.log(`USERNAME is ${this.username}`);
     }
}

class Teacher extends user{
     constructor(username,email,password){
          super(username)
          this.email = email
          this.password = password
     }

     addCourse(){
          console.log(`A new course was add by ${this.username}`);
     }
}

const chai = new Teacher("Chai","chai@teacher.com","123")

chai.logMe()
const maralaChai = new User('masalaChai')

maralaChai.logMe
console.log(chai instanceof user);