function playSound(e){
     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
     const Key = document.querySelector(`.Key[data-key="${e.keyCode}"]`);

     if(!audio) return; //stop running the function all together
     audio.currentTime = 0;//rewind to the start
     audio.play();
     Key.classList.add('playing');

}

function removeTransition(e) {
     if(e.propertyName !== 'transform') return; //Skip it if it is not a transform
     this.classList.remove('playing')
     }
     
     const Keys = document.querySelectorAll('.Key');
     Keys.forEach(Key => Key.addEventListener('transitionend', removeTransition));
     window.addEventListener('keydown', playSound);

     // Click + touch function
Keys.forEach(Key => Key.addEventListener("click", function(e) {
     let value = Key.getAttribute("data-key");
     const audio = document.querySelector(`audio[data-key="${value}"]`);
     const key_data = document.querySelector(`div[data-key="${value}"]`);
     if (audio) {
       key_data.classList.add("playing");
       audio.currentTime = 0;
       audio.play();
     }
   })
 );