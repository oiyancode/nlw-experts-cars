const perguntas = [
  {
    pergunta: "Qual montadora produziu o modelo Mustang?",
    respostas: [
      "Ford",
      "Chevrolet",
      "Dodge"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o SUV mais vendido do mundo?",
    respostas: [
      "Toyota RAV4",
      "Honda CR-V",
      "Ford Escape"
    ],
    correta: 0
  },
  {
    pergunta: "Qual empresa é conhecida pela produção de carros elétricos?",
    respostas: [
      "Tesla",
      "Toyota",
      "Volkswagen"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a velocidade máxima do Bugatti Veyron Super Sport?",
    respostas: [
      "350 km/h",
      "400 km/h",
      "450 km/h"
    ],
    correta: 2
  },
  {
    pergunta: "Quem é o fundador da Ferrari?",
    respostas: [
      "Enzo Ferrari",
      "Ferdinand Porsche",
      "Ferruccio Lamborghini"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o modelo de carro mais vendido de todos os tempos?",
    respostas: [
      "Toyota Corolla",
      "Volkswagen Golf",
      "Ford F-Series"
    ],
    correta: 0
  },
  {
    pergunta: "Em que país a marca Hyundai tem sua sede?",
    respostas: [
      "Japão",
      "Coreia do Sul",
      "China"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o motor mais comum em carros esportivos?",
    respostas: [
      "V8",
      "V6",
      "Inline-4"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o primeiro carro produzido em série no mundo?",
    respostas: [
      "Ford Model T",
      "Chevrolet Suburban",
      "Volkswagen Beetle"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o país de origem da marca de carros Mercedes-Benz?",
    respostas: [
      "Alemanha",
      "Itália",
      "Estados Unidos"
    ],
    correta: 0
  }
];



const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou laco de repeticao
for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta

      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    quizItem.querySelector('dl').appendChild(dt)
  }


  quizItem.querySelector('dl dt').remove()

  //coloca a pergunta na tela
 quiz.appendChild(quizItem)
}