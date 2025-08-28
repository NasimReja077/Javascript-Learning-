const Text = document.querySelector(".typed-text");
const TextAutoLode = () =>{
  setTimeout(()=>{
    Text.textContent = "Good";
  },0);

  setTimeout(()=>{
    Text.textContent = "Best";
  },4000);

  setTimeout(()=>{
    Text.textContent = "Big";
  },8000);
}
TextAutoLode();