// ===============================
// AI TOOLS STUDIO PRO
// script.js
// ===============================

const toolsContainer = document.getElementById("tools");
const searchInput = document.getElementById("search");
const categoryButtons = document.querySelectorAll(".kategori button");

let filteredTools = [...tools];

// ===============================
// TAMPILKAN AI TOOLS
// ===============================

function tampilkanTools(data){

    if(!toolsContainer) return;

    toolsContainer.innerHTML="";

    if(data.length===0){

        toolsContainer.innerHTML=`
        <div class="no-data">
            <h2>Tidak ada AI Tools ditemukan 😢</h2>
        </div>
        `;

        return;
    }

    data.forEach(tool=>{

        toolsContainer.innerHTML+=`

        <div class="card">

            <img src="${tool.logo}" alt="${tool.name}">

            <div class="badge">
                ${tool.category}
            </div>

            <h2>${tool.name}</h2>

            <p>${tool.description}</p>

            <div class="rating">
                ${tool.rating}
            </div>

            <div class="price">
                ${tool.price}
            </div>

            <div class="card-buttons">

                <a href="${tool.url}" target="_blank">

                    <button class="visit-btn">

                        🌐 Kunjungi

                    </button>

                </a>

                <a href="detail.html?name=${encodeURIComponent(tool.name)}&description=${encodeURIComponent(tool.description)}&category=${encodeURIComponent(tool.category)}&rating=${encodeURIComponent(tool.rating)}&price=${encodeURIComponent(tool.price)}&url=${encodeURIComponent(tool.url)}">

                    <button class="detail-btn">

                        📖 Detail

                    </button>

                </a>

            </div>

        </div>

        `;

    });

}

tampilkanTools(filteredTools);

// ===============================
// SEARCH
// ===============================

if(searchInput){

searchInput.addEventListener("input",function(){

const keyword=this.value.toLowerCase();

filteredTools=tools.filter(tool=>

tool.name.toLowerCase().includes(keyword) ||

tool.description.toLowerCase().includes(keyword) ||

tool.category.toLowerCase().includes(keyword)

);

tampilkanTools(filteredTools);

});

}

// ===============================
// FILTER KATEGORI
// ===============================

categoryButtons.forEach(button=>{

button.addEventListener("click",()=>{

const kategori=button.textContent;

if(kategori==="Semua"){

filteredTools=[...tools];

}else{

filteredTools=tools.filter(tool=>tool.category===kategori);

}

tampilkanTools(filteredTools);

});

});

// ===============================
// DARK MODE
// ===============================

const themeBtn=document.getElementById("theme-toggle");

if(themeBtn){

if(localStorage.getItem("theme")==="light"){

document.body.classList.add("light");

themeBtn.innerHTML="☀️";

}

themeBtn.onclick=()=>{

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){

localStorage.setItem("theme","light");

themeBtn.innerHTML="☀️";

}else{

localStorage.setItem("theme","dark");

themeBtn.innerHTML="🌙";

}

};

}

// ===============================
// SCROLL TO TOP
// ===============================

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

document.title="🚀 AI Tools Studio";

}else{

document.title="AI Tools Studio";

}

});

console.log("✅ AI Tools Studio Pro berhasil dimuat");