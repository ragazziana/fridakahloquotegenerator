var quotes = [ 
    ' "At the end of the day, we can endure much more than we think we can."', '"I drank to drown my sorrows, but the damned things learned how to swim."', '"I don\'t paint dreams or nightmares, I paint my own reality."', '"Feet, what do I need them for If I have wings to fly."', '"I paint flowers so they will not die."', '"I think that little by little I\'ll be able to solve my problems and survive"', '"They thought I was a Surrealist, but I wasn\'t. I never painted dreams. I painted my own reality."', '"I am that clumsy human, always loving, loving, loving. And loving. And never leaving."',
]

function newQuote(){
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];

    document.getElementById('quoteDisplay').style.backgroundColor = '#cbcbd2';
}

