const forms = document.querySelector('form');
// this usecase will give you empty.but also store value
// const height = parseInt(document.querySelector('#height').value)
forms.addEventListener('submit',function(evan){
     evan.preventDefault();

     const height = parseInt(document.querySelector('#height').value);// parseInt is convart string to number.
     const weight = parseInt(document.querySelector('#weight').value);
     const Result = document.querySelector('#Results');
     if(height === '' || height < 0 || isNaN(height)){
          Result.innerHTML = `Please give a valid height ${height}`
     }else if(weight === ''|| weight < 0 || isNaN(weight)){
          Result.innerHTML = `Please give a valid Weight ${weight}`
     }else{
          const BMI = (weight / ((height * height) / 10000)).toFixed(2);
          Result.innerHTML = `<span>Your BMI is ${BMI}</span>`;
     }
});