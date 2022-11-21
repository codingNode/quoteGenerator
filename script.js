
function newQuote(arr)
{
 
        const quote= arr[Math.floor(Math.random()*arr.length)]
        console.log(quote)
 

    const authorText = document.getElementById('author')
    !quote.author ? authorText.textContent = 'Unknown' : authorText.textContent = quote.author;

    const quoteText = document.getElementById('quote')
    quote.text.length > 100 ? quoteText.classList.add('quote-long') : quoteText.classList.remove('quote-long')
    quoteText.textContent = quote.text

    const tweetBtn = document.getElementById('twitter')
    tweetBtn.addEventListener('click', ()=>{tweetQuote(quote.text, quote.author)})
}

function tweetQuote(text,author)
{
    const twitterUrl = `https://twitter.com/intent/tweet?text=${text} - ${author}`;
    window.open(twitterUrl,'_blank')
}
async function getQuote()
{
    let quoteBank=[];
    try{
        const response =await fetch('https://type.fit/api/quotes');
        quoteBank = await response.json()
        // console.log(quoteBank[21])
        newQuote(quoteBank)
    
    }
    catch(err)
    {
        console.log(err)
    }

    const quoteBtn = document.getElementById('new-quote')
    quoteBtn.addEventListener('click', ()=>{newQuote(quoteBank)});
}



getQuote()
