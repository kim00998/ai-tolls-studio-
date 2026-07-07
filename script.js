const container=document.getElementById("tools");
const search=document.getElementById("search");

function tampilkan(data){

container.innerHTML="";

data.forEach(tool=>{

container.innerHTML+=`
<div class="card">

<span class="badge">${tool.category}</span>

<h2>${tool.name}</h2>

<p>${tool.description}</p>

<a href="${tool.url}" target="_blank">
<button>Kunjungi</button>
</a>

</div>
`;

});

}

tampilkan(tools);

search.addEventListener("input",()=>{

const hasil=tools.filter(tool=>

tool.name.toLowerCase().includes(search.value.toLowerCase())

);

tampilkan(hasil);

});
