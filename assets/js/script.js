const Questions = [
    {
        "pergunta": 'pergunta teste 1',
        "alternativa_A": "teste a",
        "alternativa_B": "teste b",
        "alternativa_C": "teste c",
        "alternativa_D": "teste d",
        "resposta": "B",
        "explicacao": "por meio do enunciado..."
    },
    {
        "pergunta": 'pergunta teste 2',
        "alternativa_A": "teste a 2",
        "alternativa_B": "teste b 2",
        "alternativa_C": "teste c 2 ",
        "alternativa_D": "teste d 2",
        "resposta": "D",
        "explicacao": "por meio do enunciado 2..."       
    },
    {
        "pergunta": 'pergunta teste 3',
        "alternativa_A": "teste a",
        "alternativa_B": "teste b",
        "alternativa_C": "teste c",
        "alternativa_D": "teste d",
        "resposta": "C",
        "explicacao": "por meio do enunciado 3..."          
    }
]
let QuestionIndex = 0
const Alternatives = document.querySelectorAll(".btn-alternative")
const Wrong = document.querySelector(".wrong-container")
const CorrectContainer = document.querySelector(".correct-container")
const NextQuestion = document.querySelector(".next-question")
const AlternativesContainer = document.querySelector(".question-alternatives")
const QuestionContainer = document.querySelector(".question-container")
let Points = 0

function StartGame() {
    AlternativesContainer.classList.remove("clicked")
    const CurrentQuizIndex = Questions[QuestionIndex]
    const HeaderNumber = document.querySelector(".question-number").textContent = `Pergunta ${QuestionIndex + 1}`
    const Question = document.querySelector(".question").textContent = CurrentQuizIndex.pergunta
    for (let i = 0; i < Alternatives.length; i++) {
        Alternatives[i].value === "A" ? Alternatives[i].textContent = CurrentQuizIndex.alternativa_A : ''
        Alternatives[i].value === "B" ? Alternatives[i].textContent = CurrentQuizIndex.alternativa_B : ''
        Alternatives[i].value === "C" ? Alternatives[i].textContent = CurrentQuizIndex.alternativa_C : ''
        Alternatives[i].value === "D" ? Alternatives[i].textContent = CurrentQuizIndex.alternativa_D : ''
        Alternatives[i].style.color = "black"
        Alternatives[i].removeEventListener('click', Alternatives[i].event, false)
        Alternatives[i].event = () => {
            NextQuestion.classList.add("active")
            if (!AlternativesContainer.classList.contains("clicked")) {
                if (Alternatives[i].value === CurrentQuizIndex.resposta) {
                    CorrectContainer.classList.add("correct")
                    AlternativesContainer.classList.add("clicked")
                    Points++
                } else {
                    Wrong.classList.add("wrong")
                    Wrong.querySelector(".right-alternative").textContent = `Resposta ${CurrentQuizIndex.resposta}`
                    Wrong.querySelector(".explication-content").textContent = CurrentQuizIndex.explicacao
                    AlternativesContainer.classList.add("clicked")
                }
                AlternativesContainer.classList.add("clicked")
            } else {
                Alternatives[i].textContent = "É válido apenas uma tentativa!"
                Alternatives[i].style.color = "red"
            }
        }
        Alternatives[i].addEventListener("click", Alternatives[i].event, false)
    }
}


NextQuestion.addEventListener("click", () => {
    QuestionIndex++
    Wrong.classList.remove("wrong")
    CorrectContainer.classList.remove("correct")
    NextQuestion.classList.remove("active")
    // if (Questions.length - QuestionIndex == 0) {
    //     NextQuestion.textContent = Points
    // }
    StartGame()
})


StartGame()
