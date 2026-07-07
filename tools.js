function searchTools(){
const input=document.getElementById("search").value.toLowerCase();
const cards=document.querySelectorAll(".card");

cards.forEach(card=>{
const title=card.querySelector("h2").textContent.toLowerCase();

if(title.includes(input)){
card.style.display="block";
}else{
card.style.display="none";
}
});
}
