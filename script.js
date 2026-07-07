const search = document.querySelector("input");

search.addEventListener("keyup", function(){

const keyword = this.value.toLowerCase();

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

const text = card.innerText.toLowerCase();

if(text.includes(keyword)){
card.style.display="block";
}else{
card.style.display="none";
}

});

});
