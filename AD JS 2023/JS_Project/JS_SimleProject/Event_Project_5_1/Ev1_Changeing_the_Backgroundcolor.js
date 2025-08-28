//generate a random color

const randromColor = function(){
     const hexColor = '0123456789ABCDEF';
     let color = '#';
     for (let i=0; i<6; i++){
          color += hexColor[Math.floor(Math.random() * 16)];
     }
     return color;
};

let intervalId;
const startChaningCollors = function (){
     if(!intervalId){
          intervalId = setInterval(changingBGcolor,1000);
     }

     function changingBGcolor(){
          document.body.style.backgroundColor = randromColor();
     }
};

const stopChagingColors = function (){
     clearInterval(intervalId);
     intervalId = null;
};
document.querySelector('#start').addEventListener('click', startChaningCollors);
document.querySelector('#stop').addEventListener('click',stopChagingColors);