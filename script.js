const cards = document.querySelectorAll('.card');
let cardOne, cardTwo;
let disableDeck = false;
let matchedCard = 0;

let totalFlip = 0;

function flipCard(e) { 
    let clickedCard = e.target;
    // console.log(clickedCard);
    
    if (clickedCard !== cardOne && !disableDeck) {
        clickedCard.classList.add('flip');
        totalFlip++;
        document.getElementById('flipCount').innerHTML=totalFlip;
        if (!cardOne) {
            return cardOne = clickedCard;
            
    }
    cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector('img').src;
        let cardTwoImg = cardTwo.querySelector('img').src;
        // console.log(cardOneImg, cardTwoImg);
        
        matchCard(cardOneImg, cardTwoImg);
        
    }
    
};


function matchCard(img1, img2) { 
    console.log(img1, img2);
    if (img1 === img2) {
        matchedCard++;
        if (matchedCard === 8) {
            setTimeout(() =>
            {shuffleCard()},800);
        }
        cardOne.removeEventListener('click', flipCard);
        cardTwo.removeEventListener('click', flipCard);
        cardOne = cardTwo = '';
        return disableDeck = false;
    } else {
        setTimeout(() => {
            cardOne.classList.add('shake');
            cardTwo.classList.add('shake');
        }, 300)
        setTimeout(() => {
            cardOne.classList.remove('shake','flip');
            cardTwo.classList.remove('shake', 'flip');
            cardOne = cardTwo = '';
           disableDeck = false;
        }, 900)
        
    }
}
function shuffleCard() {
    cardOne, cardTwo = '';
    matchedCard = 0;
    disableDeck = false;
    totalFlip = 0;
    document.getElementById('flipCount').innerHTML=totalFlip;
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];

    array.sort(() => Math.random() < 0.5 ? 1 : -1);
    
    

    cards.forEach((card ,index )=> {
        let imgTag = card.querySelector('img');
        imgTag.src = `./memorycard/card${array[index]}.svg`;
        card.classList.remove('flip');
        card.addEventListener('click', flipCard);
})
}

cards.forEach(card => {
    // card.classList.add('flip');
    card.addEventListener('click', flipCard);
})
