// fetch = Function used for making HTTP requests to fetch resources.
//              (JSON style data, images, files)
//              Simplifies asynchronous data fetching in JavaScript and
//              used for interacting with APIs to retrieve and send
//              data asynchronously over the web.
//              fetch(url, {options})

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

// https://www.w3schools.com/jsref/api_web.asp

async function fetchData(){

     try{
 
         const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
 
         if(!response.ok){
             throw new Error("Could not fetch resource");
         }
 
         const data = await response.json();
         const pokemonSprite = data.sprites.front_default;
         const imgElement = document.getElementById("pokemonSprite");
 
         imgElement.src = pokemonSprite;
         imgElement.style.display = "block";
     }
     catch(error){
         console.error(error);
     }
 }