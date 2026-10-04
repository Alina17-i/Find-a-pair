const game = document.getElementById("game")

let cardsCon = 4;
const cardsConArray = [];
let firstCard = null;
let secondCard = null;

//Создание массива чисел
for(let i = 1; i <= cardsCon; i++){
    cardsConArray.push(i, i)
}

//Перемешивание массива чисел
for(let i = 0; i < cardsConArray.length; i++){
    let randomIndex = Math.floor(Math.random() * cardsConArray.length);

    let temp = cardsConArray[i];
    cardsConArray[i] = cardsConArray[randomIndex];
    cardsConArray[randomIndex] = temp;
}

//Создание карточек
for (const cardNumb of cardsConArray) {
    let card = document.createElement("div");
    card.textContent = cardNumb;
    card.classList.add("card");

    //Клик по карточке
    card.addEventListener("click", function(){
        if(card.classList.contains("open") || card.classList.contains("opes")){
            alert("Эта карточка уже открыта")
            return
        }

        if(firstCard !== null && secondCard !== null){
            firstCard.classList.remove("open");
            secondCard.classList.remove("open");
            firstCard = null;
            secondCard = null;
        }

        card.classList.add("open");

        if(firstCard == null){
            firstCard = card
        }else{
            secondCard = card
        }

        if(firstCard !== null && secondCard !== null){
            let firstCardNumber = firstCard.textContent;
            let secondCardNumber = secondCard.textContent;

            if(firstCardNumber == secondCardNumber){
                firstCard.classList.add("opes");
                secondCard.classList.add("opes");
            }
            
        }
        
    if(cardsConArray.length == document.querySelectorAll(".opes").length){
        setTimeout(function(){
            alert("Победа!")
        },400)
    }
    })

    game.append(card);
}