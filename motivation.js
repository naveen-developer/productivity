const motivationQuote = () => {
    fetch("https://motivational-spark-api.vercel.app/api/quotes/random").then((res) => res.json()).then((data) => {
        document.querySelector('.quote-text').innerText = data.quote;
        document.querySelector('.quote-author').innerText = '—  ' + data.author;
        //console.log(data);
    })
}

motivationQuote();

const newQuoteBtn = document.querySelector('.quote-actions button');
newQuoteBtn.addEventListener('click', () => {
    document.querySelector('.favorite-toggle input').checked = false
    motivationQuote();
})