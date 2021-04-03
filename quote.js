const api = 'http://type.fit/api/quotes';
const quotes = document.querySelector('#quotes');
const author = document.querySelector('#author');
const nextQ = document.querySelector('#nextQ');
const tweet = document.querySelector('#tweet');
let quote ='';
let quotesData ='';
const tweetPost = ()=>{
   let tweetApi = `https://twitter.com/intent/tweet?text=${quotesData.text}`;
   window.open(tweetApi);
}
const showQuotes = () =>{
    let rmNum = Math.floor(Math.random() * 20);
 //    console.log(quote[rmNum].author);
     quotesData = quote[rmNum];
     quotes.innerText =`${quotesData.text}` ;
     quotesData.author == null ? author.innerText = 'Unknown' :  author.innerText = `${quotesData.author};
    `;
}
const getQuotes =  async ()=>{
    try{
         let data = await fetch(api);
          quote = await data.json();
         // console.log(quote[3]);
         showQuotes();
    }catch(err){
        console.log(err);
    }
}
tweet.addEventListener('click', tweetPost)
nextQ.addEventListener('click', showQuotes);
 getQuotes();