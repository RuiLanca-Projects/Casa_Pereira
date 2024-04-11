$(document).ready(function () {
    var cards = $(".card");
    var index = 0;

    function showNextCard() {
        if (index < cards.length) {
            cards.eq(index++).addClass("card-visible");
            setTimeout(showNextCard, 2000); // Adjust timing as needed
        }
    }

    showNextCard();
});

function voltar(){
    window.history.back();
}