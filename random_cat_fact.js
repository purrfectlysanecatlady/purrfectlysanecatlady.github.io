const fact = document.querySelector(".fact")
const cat = document.querySelector(".cat")


const getCatFact = async () => {
    try {
        const res = await fetch("https://catfact.ninja/fact")
        const data = await res.json();
        fact.textContent = data.fact;
    } catch (e) {
        console.error(e)
    }
}
cat.addEventListener("click", () => { getCatFact() })

