const speechQuotes = [
     "Belief in Self: Believe in yourself and the world will be at your feet.",
     "Courageous Action: Give me blood, and I shall give you freedom.",
     "National Unity: Remember, it is the valiant who taste death but once. It is the timid who die every moment.",
     "Sacrifice for the Nation: No real change in history has ever been achieved by discussions.",
     "Determination: Freedom is not given, it is taken.",
     "Visionary Approach: One individual may die for an idea, but that idea will, after his death, incarnate itself in a thousand lives.",
     "Dream Big: Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.",
     "Hard Work: You have to dream before your dreams can come true.",
     "Learning from Failures: Don't take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck.",
     "Empowerment: If you want to shine like a sun, first burn like a sun.",
     "Perseverance: Man needs his difficulties because they are necessary to enjoy success.",
     "Service to Humanity: Let us sacrifice our today so that our children can have a better tomorrow."
]

const usedIndex = new Set()
const quoterElement = document.getElementById("quote-box")

function generateQuote() {
     if (usedIndex.size >= speechQuotes.length){
          usedIndex.clear()
     }

     while(true){
          const randomIndex = Math.floor(Math.random() * speechQuotes.length)

          if (usedIndex.has(randomIndex)) continue

          const quote = speechQuotes[randomIndex]
          quoterElement.innerHTML = quote;
          usedIndex.add(randomIndex)
          break
     }
}