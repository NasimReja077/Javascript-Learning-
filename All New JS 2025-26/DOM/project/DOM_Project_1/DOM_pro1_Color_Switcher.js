const butens = document.querySelectorAll('.button');
const bodye = document.querySelector('body');
// const Text = document.querySelectorAll('.Texts');


// Texts.forEach(function(Texts){
//      console.log(Texts);
//      Texts.addEventListener()

// })
butens.forEach(function(button){
     console.log(button);
     button.addEventListener('click',function(even){ // click is type of event
          console.log(even);
          console.log(even.target);
          if(even.target.id === 'grey'){
               bodye.style.backgroundColor = even.target.id;
               bodye.style.color = 'white';
          }
          if(even.target.id === 'white'){
               bodye.style.backgroundColor = even.target.id
               bodye.style.color = 'Black';
          }
          if(even.target.id === 'blue'){
               bodye.style.backgroundColor = even.target.id
               bodye.style.color = 'gold';
          }
          if(even.target.id === 'yellow'){
               bodye.style.backgroundColor = even.target.id
               bodye.style.color = 'red';
          }
          if(even.target.id === 'red'){ // not in css file write in js file
               bodye.style.backgroundColor = even.target.id
               bodye.style.color = 'yellow';
          }
     });
});