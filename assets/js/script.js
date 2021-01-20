const Questions = [
    {
        "pergunta": 'A série “Chernobyl”, dirigida por Johan Renck, envolve todo o contexto envolvido em um dos maiores acidentes nucleares no mundo. Nesse cenário, mais de 100.000 km² de área foram contaminados na Ucrânia de 1986. A partir do funcionamento de usinas nucleares como a de Chernobyl, podemos afirmar que:',
        "alternativa_A": "É utilizada a fusão nuclear para liberar energia nessas usinas, pois esse processo é mais prático do que a fissão nuclear, comum em estrelas. ",
        "alternativa_B": "Não é necessário controle da cadeia de fissões, uma vez que, após pouco tempo, o 235U decairá completamente.",
        "alternativa_C": "A energia nuclear é uma das mais limpas, com um dos recursos minerais mais renováveis.",
        "alternativa_D": "O Brasil dispõe de usinas nucleares participativas na produção de energia do país e até mesmo mecanismos de enriquecimento do urânio. ",
        "resposta": "D",
        "explicacao": "A alternativa A está incorreta, pois é utilizada a fissão nuclear nas usinas, sendo a fusão um processo complexo que requer muita energia (típico das estrelas, como o Sol). Em relação à alternativa B, o erro está no fato de que, em muitas vezes, é necessário controlar a taxa de fissões, com controladores (varetas de cádmio, prata, índio, por exemplo). Já em relação à “c”, não podemos afirmar que os recursos minerais da energia nuclear (urânio, predominantemente) são renováveis, pois as jazidas podem se esgotar com a exploração."
    },
    {
        "pergunta": 'No ano de 1895, Wilhelm Röntgen tornou-se o primeiro cientista a observar a ação dos raios X e essa descoberta fez com que houvesse muita investigação, discussão e o surgimento de polêmicas na sociedade da época. Nesse sentido, a respeito da evidenciação primária dos raios X, é correto que:',
        "alternativa_A": "A descoberta iniciou-se a partir do estudo de tubos de raios anódicos, com elétrons acelerados.",
        "alternativa_B": "Foi observado certo fenômeno visível que escapava dos tubos, atravessava alguns materiais e atingia grandes espaços no ar.",
        "alternativa_C": "Foi depois de anos que descobriram os danos causados por ficar muito tempo manuseando e utilizando as máquinas sem proteção. ",
        "alternativa_D": "Foi depois de dezenas de anos após a descoberta que descobriram a sensibilização das chapas fotográficas a partir dos raios X.",
        "resposta": "C",
        "explicacao": "A alternativa A está incorreta, pois, no estudo, foram utilizados tubos de raios catódicos. Em relação à alternativa B, o erro está no fato de que os raios X eram invisíveis. Já em relação à “D”, não podemos afirmar que passaram-se anos para descobrir a sensibilização, uma vez que Röntgen conseguiu até mesmo imagens da mão de sua esposa no ano de descoberta. ."       
    },
    {
        "pergunta": 'Quando o núcleo radioativo decai, ele fica instável e sofre transformações. Assim, dentre os tipos de radiação, ele pode emitir:',
        "alternativa_A": "Raios gama, os quais são neutros, muito penetrantes e pouco ionizantes. ",
        "alternativa_B": "Raios alfa, os quais têm alto poder de ionização e também um grande grau de penetração.",
        "alternativa_C": "Raios alfa, com emissão de quatro prótons e dois nêutrons.",
        "alternativa_D": "Raios beta, os quais têm a carga somente negativa. ",
        "resposta": "A",
        "explicacao": "A alternativa B está incorreta, pois os raios alfa são pouco penetrantes. Em relação à alternativa C, o erro está no fato de que os raios alfa tem uma estrutura composta por 2 prótons e 2 nêutrons. Já em relação à “D”, não podemos afirmar que raios beta possuem carga somente negativa, uma vez que emissões pósitrons também são possíveis com carga positiva (β+)."          
    }
]

let QuestionIndex = 0
let Points = 0
const Alternatives = document.querySelectorAll(".btn-alternative")
const Wrong = document.querySelector(".wrong-container")
const CorrectContainer = document.querySelector(".correct-container")
const NextQuestion = document.querySelector(".next-question")
const AlternativesContainer = document.querySelector(".question-alternatives")
const Question = document.querySelector(".question")
const GameContainer = document.querySelector(".gameplay-container")
const PlayerStatus = document.querySelector(".game-finished")
const HeaderContainer = document.querySelector(".game-header")
const HeaderContent = document.querySelector(".game-header-content")
const IntroGame = document.querySelector(".intro-container")
const StartGameButton = document.querySelector(".start-game")
const PlayerName = document.getElementById("player")

HeaderContainer.style.display = "none"
IntroGame.classList.add("active")

StartGameButton.addEventListener("click", () => {
    if (PlayerName.value.length < 3 || PlayerName.value.length > 30 ) {
        document.querySelector(".name-error").textContent = "Informe um nome válido"
    } else {
        IntroGame.style.display = "none"
        GameContainer.classList.add("play")
        HeaderContainer.style.display = "flex"
    }
})

function StartGame() {
    AlternativesContainer.classList.remove("clicked")
    const CurrentQuizIndex = Questions[QuestionIndex]
    HeaderContent.textContent = `Pergunta ${QuestionIndex + 1}`
    Question.textContent = CurrentQuizIndex.pergunta
    for (let i = 0; i < Alternatives.length; i++) {
        Alternatives[i].value === "A" ? Alternatives[i].querySelector(".alternative-text-a").textContent = CurrentQuizIndex.alternativa_A : ''
        Alternatives[i].value === "B" ? Alternatives[i].querySelector(".alternative-text-b").textContent = CurrentQuizIndex.alternativa_B : ''
        Alternatives[i].value === "C" ? Alternatives[i].querySelector(".alternative-text-c").innerText = CurrentQuizIndex.alternativa_C : ''
        Alternatives[i].value === "D" ? Alternatives[i].querySelector(".alternative-text-d").textContent = CurrentQuizIndex.alternativa_D : ''
        Alternatives[i].style.color = "black"
        Alternatives[i].removeEventListener('click', Alternatives[i].event, false)
        Alternatives[i].event = () => {
            NextQuestion.classList.add("active")
            if (!AlternativesContainer.classList.contains("clicked")) {
                if (Alternatives[i].value === CurrentQuizIndex.resposta) {
                    CorrectContainer.classList.add("correct")
                    AlternativesContainer.classList.add("clicked")
                    document.body.style.overflowY = "auto"
                    document.querySelector(".explication-container").style.height = "100px"
                    NextQuestion.style.position = "absolute"
                    NextQuestion.style.top =  "40px"
                    Points++
                } else {
                    document.querySelector(".explication-container").style.height = "auto"
                    document.querySelector(".game-container").style.height = "auto"
                    document.body.style.overflowY = "auto"
                    NextQuestion.style.position = "static"
                    // NextQuestion.style.top = "40px"
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
    document.querySelector(".game-container").style.height = "610px"
    document.body.style.overflowY = "hidden"
    window.scrollTo(0, 0)
    NextQuestion.classList.remove("active") 
    if (Questions.length - QuestionIndex == 0) {
        QuestionIndex = 0
        GameContainer.classList.remove("play")
        PlayerStatus.classList.add("show-status")
        document.querySelector(".game-container").style.height = "auto"
        HeaderContent.textContent = `Resultados do Jogador: ${PlayerName.value}`
        PlayerStatus.querySelector(".player-status .total .questions-number").textContent = Questions.length
        PlayerStatus.querySelector(".player-status .right .questions-number-right").textContent = Points
        PlayerStatus.querySelector(".player-status .wrong .questions-number-wrong").textContent = Questions.length - Points
    } else {
        StartGame()
    }
})

StartGame()