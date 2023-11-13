var qoutesArray =
    [
        {
            author: '― Oscar Wilde',
            quote: '“Be yourself; everyone else is already taken.”'
        },
        {
            author: '― Marilyn Monroe',
            quote: `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`
        },
        {
            author: '― Albert Einstein',
            quote: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`
        },
        {
            author: '― Albert Einstein2',
            quote: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`
        },
        {
            author: '― Albert Einstein3',
            quote: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`
        },
        {
            author: '― Albert Einstein4',
            quote: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`
        },
        {
            author: '― Albert Einstein5',
            quote: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`
        }
    ]

function generateQuote() {
    // Searched the internet found out that there is random method in Math Obj it returns a dicimal val from 0 to 1 so to up the value to be in other range 
    // multipling the value to be .5*the length of the arr(7) so 0.5 * 7 = 3.5 there is no index 3.5 so we have to convert the value from dicemal to int 
    // so we use the number method ParseInt to convert the value to be int by force ;)..
    var randomNumber = Number.parseInt(Math.random() * qoutesArray.length);
    document.getElementById("quoteData").innerHTML = 
    `
    <h2 class="text-center text-info">${qoutesArray[randomNumber].author}</h2>
    <p class="text-center text-info">${qoutesArray[randomNumber].quote}</p>`;
}