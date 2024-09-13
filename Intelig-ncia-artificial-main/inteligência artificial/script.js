const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que você entende por Inteligência Artificial?",
        alternativas: [
            {
                texto: "Um programa de computador que pode resolver problemas e realizar tarefas como os humanos.",
                afirmacao: "A inteligência Artificial é um ramo da ciência da computação,"
            },
            {
                texto: "Um robô que tem sentimentos.",
                afirmacao: "A inteligência Artificial é um ramo da ciência da computação,"
            }
        ]
    },
    {
        enunciado: "Você acha que a IA pode pensar como um ser humano? Por que?",
        alternativas: [
            {
                texto: "Sim, porque a IA pode aprender e tomar decisões.",
                afirmacao: "que cria sistemas capazes de realizar tarefas"
            },
            {
                texto: "Não, porque a IA segue regras e não tem consciência.",
                afirmacao: "que cria sistemas capazes de realizar tarefas"
            }
        ]
    },
    {
        enunciado: "Você acha que é possível a IA ter sentimentos? Por que os sentimentos são algo especial nos seres humanos?",
        alternativas: [
            {
                texto: "Não, porque sentimentos vêm de Deus e não podem ser imitados por máquinas.",
                afirmacao: "que normalmente exigem inteligência humana,"
            },
            {
                texto: "Sim, porque a IA pode sentir como nós.",
                afirmacao: "que normalmente exigem inteligência humana,"
            }
        ]
    },
    {
        enunciado: "Deus nos criou os seres humanos à sua imagem e semelhança. Como isso nos diferencia de uma máquina ou programa de IA?",
        alternativas: [
            {
                texto: "Somos capazes de amar e ter uma alma, algo que a IA não tem.",
                afirmacao: "como aprender, tomar decisões e resolver problemas."
            },
            {
                texto: "Nós somos mais inteligentes que a IA.",
                afirmacao: "como aprender, tomar decisões e resolver problemas."
            }
        ]
    },
    {
        enunciado: "Como podemos usar a IA para fazer o bem no mundo. ajudando as pessoas?",
        alternativas: [
            {
                texto: "Usando a IA para fazer tudo por nós sem precisarmos ajudar ninguém.",
                afirmacao: "Exemplos de IA incluem assistentes virtuais, carros automos, etc."
            },
            {
                texto: "Usando a IA para ajudar a cuidar dos doentes ou ensinar pessoas.",
                afirmacao: "Exemplos de IA incluem assistentes virtuais, carros automos, etc."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Afinal a IA é";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
