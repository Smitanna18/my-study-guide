/* -----------------FEEDBACK RATING TEXT CHANGE ------------------------- */
let screenSize = screen.width;

if (screenSize < 830) {
    const rate1 = document.getElementById("rate-1")
    const rate2 = document.getElementById("rate-2")
    const rate3 = document.getElementById("rate-3")
    const rate4 = document.getElementById("rate-4")
    const rate5 = document.getElementById("rate-5")
    
    rate1.innerText = "1" ;
    rate2.innerText = "2" ;
    rate3.innerText = "3" ;
    rate4.innerText = "4" ;
    rate5.innerText = "5" ;
}

