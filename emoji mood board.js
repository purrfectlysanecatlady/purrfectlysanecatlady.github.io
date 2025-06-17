const smile = document.getElementById("smile")
const cry = document.getElementById("cry")
const anger = document.getElementById("anger")
const confused = document.getElementById("confused")
const love = document.getElementById("love")
const clear = document.getElementById("clear")
const moodStrip = document.querySelector(".mood-strip")
// const moodStrip = document.getElementById("mood-strip") we could also have found it by id, not only by class


smile.addEventListener("click", () => {
    moodStrip.textContent = moodStrip.textContent + smile.textContent
})
cry.addEventListener("click", () => {
    moodStrip.textContent = moodStrip.textContent + cry.textContent
})
anger.addEventListener("click", () => {
    moodStrip.textContent = moodStrip.textContent + anger.textContent
})
confused.addEventListener("click", () => {
    moodStrip.textContent = moodStrip.textContent + confused.textContent
})
love.addEventListener("click", () => {
    moodStrip.textContent = moodStrip.textContent + love.textContent
})
clear.addEventListener("dblclick", () => {
    moodStrip.textContent = ''
})
