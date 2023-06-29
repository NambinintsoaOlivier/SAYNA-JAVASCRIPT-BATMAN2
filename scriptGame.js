// GAME
// REFERENCES
let demmarer = document.querySelector('.demmarer');
let suivante = document.querySelector('.suivante');
let containerQuestion = document.getElementById('question');
let nbQuestion = document.querySelector('.nb-question');
let demmarerScreen = document.querySelector('.demmarer-screen');
let listQuestion = document.querySelector('.list-question');
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let userScore = document.getElementById("user-score");
let info = document.querySelector(".resultat-info");
let restart = document.getElementById("restart");
let blurBg = document.querySelector(".blur-bg");
let bordure = document.querySelector(".all");
let reseaux = document.querySelector(".reseaux");

let questionCount;
let scoreCount = 0;
let count = 3;
let countdown;

// liste des questions et choix
const quizArray = [{
        id: "0",
        question: "Quel est l’autre nom de l’Homme-Mystère ?",
        options: ["Le Sphinx", "Saphir", "Le Joker"],
        img: "Illustrations/Batgame_3.png",
        correct: "Saphir",
    },
    {
        id: "1",
        question: "Quelle est l’ancienne profession de Harley Quinn ?",
        options: ["Infirmière", "Psychiatre", "Dentiste"],

        img: "Illustrations/Batgame_4.png",
        correct: "Dentiste",
    },
    {
        id: "2",
        question: "Quel est l’objet fétiche de Double Face ?",
        options: ["Une pièce", "Un livre", "Un couteau"],
        img: "Illustrations/Batgame_5.png",
        correct: "Un couteau",
    },
    {
        id: "3",
        question: "Qui a produit Batman en 1964 ?",
        options: ["Stanley Kubrick ", "Andy Warhol", "Peter Jackson"],
        img: "Illustrations/Batgame_6.png",
        correct: "Peter Jackson",
    },
    {
        id: "4",
        question: "Batman c’est aussi le nom d’une ville en...",
        options: ["Turquie ", "Islande", "Allemagne"],
        img: "Illustrations/Batgame_7.png",
        correct: "Islande",
    },
    {
        id: "5",
        question: "Quel vilain apparaît pour la première fois dans le Batman 232 ?",
        options: ["Le Pingouin ", "Ra’s al Ghul", "Poison Ivy"],
        img: "Illustrations/Batgame_8.png",
        correct: "Poison Ivy",
    },
    {
        id: "6",
        question: "Quelle ville Batman défend-il ??",
        options: ["Gotham City ", "Starling City", "Hell’s Kitchen"],
        img: "Illustrations/Batgame_9.png",
        correct: "Hell’s Kitchen",
    },
    {
        id: "7",
        question: "Tim Burton a réalisé deux Batman, qui jouait Batman ?",
        options: ["Georges Clooney", "Val Kilmer", "Mickael Keaton"],
        img: "Illustrations/Batgame_10.png",
        correct: "Mickael Keaton",
    },
    {
        id: "8",
        question: "Dans son premier Batman (1989) Jack Nicholson jouait :",
        options: ["Le Pingouin", "L’Homme Mystère", "Le Joker"],
        img: "Illustrations/Batgame_11.png",
        correct: "Le Pingouin",
    },
    {
        id: "9",
        question: "Qui est Jonathan Crane ? ",
        options: ["L’Épouvantail", "Le Joker", "Hugo Strange"],
        img: "Illustrations/Batgame_12.png",
        correct: "Hugo Strange",
    },
    {
        id: "10",
        question: "Qui est l’interprète de Catwoman dans le nouveau Batman de Matt Reeves (2022) ?",
        options: ["Emma Watson", "Gigi Hadid", "Lola Iolani Momoa", "Zoë Kravitz"],
        img: "Illustrations/Batgame_13.png",
        correct: "Zoë Kravitz",
    },
    {
        id: "11",
        question: "Quel est le prénom des parents du jeune Bruce Wayne ?",
        options: ["Thomas et Martha ", "Elaine et Georges", "Martha et James"],
        img: "Illustrations/Batgame_14.png",
        correct: "Thomas et Martha",
    },
    {
        id: "12",
        question: "Qui interprète le Joker en 2008 ?",
        options: ["Heath Legder ", "Haeth Ledger", "Heath Ledger"],
        img: "Illustrations/Batgame_15.png",
        correct: "Heath Ledger",
    },
    {
        id: "13",
        question: "En quelle année Robin fait il sa première apparition ?",
        options: ["1940", "1939", "1941"],
        img: "Illustrations/Batgame_16.png",
        correct: "1941",
    },
    {
        id: "14",
        question: "Qui est la fille de Batman et Catwoman (Earth - 2) ?",
        options: ["Oracle", "Huntress", "Black Canar"],
        img: "Illustrations/Batgame_17.png",
        correct: "Oracle",
    },

];

// button demmarer
demmarer.addEventListener("click", () => {
    demmarerScreen.classList.add("hide");
    suivante.classList.remove('hide');
    nbQuestion.classList.remove('hide');
    initial();
})

function initial() {
    containerQuestion.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 16;
    clearInterval(countdown);
    quizCreator();
    quizDisplay(questionCount);
}

function quizCreator() {
    //randomize type de question
    quizArray.sort(() => Math.random() - 0.5);
    //generer le quiz
    for (let i of quizArray) {
        //randomize type de reponse
        i.options.sort(() => Math.random() - 0.5);
        //nombre de question
        nbQuestion.innerHTML = 1 + " / " + quizArray.length;
        //contenair
        let div = document.createElement('div');
        div.classList.add("container-mid", "hide");
        listQuestion.appendChild(div);
        //image
        let img_div = document.createElement("div");
        img_div.classList.add("img-question");
        img_div.innerHTML = `<img class="ani-zoom" src="${i.img}" >`;
        div.appendChild(img_div);
        // le bloc de questions et reponse
        let questionChoix = document.createElement("div");
        questionChoix.classList.add("question-reponse");
        div.appendChild(questionChoix);
        //les questions
        let question_div = document.createElement("p");
        question_div.classList.add("question");
        question_div.innerHTML = i.question;
        questionChoix.appendChild(question_div);
        // options
        let form = document.createElement("form");
        form.classList.add("liste-reponse");
        form.innerHTML = `
        <ul class="reponse">
            <li id="color">
                <input type="checkbox" class="option-div" id="a" name="" onchange="check(this)" value="${i.options[0]}">
                <label for="a">${i.options[0]}</label>
            </li>
        </ul><br>
        <ul class="reponse">
            <li id="color">
                <input type="checkbox" class="option-div" id="b" name="" onchange="check(this)" value="${i.options[1]}">
                <label for="b">${i.options[1]}</label>
            </li>
        </ul><br>
        <ul class="reponse">
            <li id="color">
                <input type="checkbox" class="option-div" id="c" name="" onchange="check(this)" value="${i.options[2]}">
                <label for="c">${i.options[2]}</label>
            </li>
        </ul><br>
        `;
        questionChoix.appendChild(form);
    }
}
//Display quiz 
const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    quizCards[questionCount].classList.remove("hide");
};

// fonction checher pour choisir la bonne ou mauvaise reponse 
function check(userOption) {
    let userSolution = userOption.value;
    console.log(userSolution);
    let question = document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");
    // si la reponse est correct
    if (userSolution === quizArray[questionCount].correct) {
        var color = event.target;
        var parent = color.parentNode;
        parent.classList.add("correct");
        scoreCount++;
    } else {
        var color = event.target;
        var parent = color.parentNode;
        parent.classList.add("incorrect");
        options.forEach((element) => {
            if (element.innerText == quizArray[questionCount].correct) {
                element.classList.add("correct");
            }
        });
    }
    clearInterval(countdown);
    options.forEach((element) => {
        element.disabled = true;
    });
}

//button next
suivante.addEventListener(
    "click",
    (displayNext = () => {
        //incrementation question
        questionCount += 1;
        //si c'est la derniere question
        suivante.innerHTML = "QUESTION SUIVANTE";
        if (questionCount == quizArray.length) {
            //pour afficher le score
            displayContainer.classList.add("hide");
            scoreContainer.classList.remove("hide");
            blurBg.classList.remove("hide");
            bordure.classList.add('flow');
            reseaux.classList.add("hide");
            //score d'utilisateur
            if (scoreCount >= 10 && scoreCount <= 14) {
                userScore.innerHTML =
                    scoreCount + "/" + questionCount + " PAS MAL ! ";
                info.innerHTML = "Encore un peut d'entrainement avec le Chevalier noir vous serait <br> bénéfique, mais vous pouvez marcher la tête haute vos <br> connaissances sont là. A vous de les consolider, foncez Gotham est <br> votre terrain de chasse ! ";
                scoreContainer.appendChild(buttonStart);
                scoreContainer.appendChild(info);
            }
            if (scoreCount < 10) {
                userScore.innerHTML =
                    scoreCount + "/" + questionCount + " C'EST PAS TOUT A FAIT CA.. ";
                info.innerHTML = "Oula ! Heureusement que le Riddler est sous les verrous... Il faut que <br> vous vous repassiez les films, cette fois en enlevant peut-etre <br> le masque qui vous  a bloqué la vue ! Aller, rien n'est perdu !";
                scoreContainer.appendChild(buttonStart);
                scoreContainer.appendChild(info);
            } else {
                userScore.innerHTML =
                    scoreCount + "/" + questionCount + " BRAVO ! ";
                info.innerHTML = "Vous êtes veritablement un super fan de l'univers de batman ! <br> Comics, films, rien ne vous échappe. Brucce Wayne a de quoi être fier, <br> Gotham est en paix et Batman peut prendre sa retraitre, vous veillez aux grains ! ";
                scoreContainer.appendChild(buttonStart);
                scoreContainer.appendChild(info);
            }


        } else if (questionCount == quizArray.length - 1) {
            suivante.innerHTML = "Voir les resultats";
            nbQuestion.innerHTML =
                questionCount + 1 + " / " + quizArray.length;
            quizDisplay(questionCount);
            count = 16;
            clearInterval(countdown);
        } else {

            nbQuestion.innerHTML =
                questionCount + 1 + " / " + quizArray.length;

            quizDisplay(questionCount);
            count = 16;
            clearInterval(countdown);
        }
    }));
//recommecer le Quiz 
restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
    blurBg.classList.add("hide");
    reseaux.classList.remove("hide");
    bordure.classList.remove('flow');
});