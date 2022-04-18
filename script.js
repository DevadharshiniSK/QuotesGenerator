let btn = document.getElementById('btn');
let output = document.getElementById('output');

let quote = [
    ' "Nothing is impossible. The word itself says I am possible! -Audrey Hepburn" ',
    ' "There is nothing impossible to they who will try! -Alexander the Great" ',
    ' "At the end of the day, whether or not those people are comfortable with how you re living your life doesnot matter. What matters is whether you are comfortable with it! — Dr. Phil " ',
    ' " You define your own life. Dont let other people write your script— Oprah Winfrey" ',
    ' "You are never too old to set another goal or to dream a new dream— Malala Yousafzai" ',
    ' "Success is not final, failure is not fatal: it is the courage to continue that counts– Winston Churchill" ',
    ' " The bad news is time flies. The good news is youre the pilot! — Michael Altshuler" ',
    ' " Life has got all those twists and turns. Youve got to hold on tight and off you go! — Nicole Kidman" ',
    ' " Spread love everywhere you go! — Mother Teresa" ',
    ' "Silence is the last thing the world will ever hear from me! — Marlee Matlin" ',
]
btn.addEventListener('click',function(){
    var randomquote = quote[Math.floor(Math.random() * quote.length)]
    output.innerHTML = randomquote;
})