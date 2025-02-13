const listaFeedbacks = document.querySelector("#feedbacks")
const modelo = document.querySelector("#modelo")
document.querySelector("button").addEventListener("click", () => {
    const novoFeedback = modelo.cloneNode(true)
    novoFeedback.style.display = "block"
    novoFeedback.querySelector("h2").innerHTML = document.querySelector("input").value
    novoFeedback.querySelector("p").innerHTML = document.querySelector("textarea").value
    listaFeedbacks.appendChild(novoFeedback)
})