const container = document.getElementById("tools");
const search = document.getElementById("search");

function tampilkan(data) {
    container.innerHTML = "";

    data.forEach(tool => {
      container.innerHTML += `
<div class="card">

<img src="${tool.logo}" class="logo">

<div class="badge">${tool.category}</div>

<h2>${tool.name}</h2>

<p>${tool.description}</p>

<div class="rating">
⭐ ${tool.rating}
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
<button class="favorite-btn" onclick="toggleFavorite('${tool.name}')">
❤️ Favorite
</button>
</button>
</a>

</div>

</div>

`;
       
    });
}

tampilkan(tools);

search.addEventListener("input", () => {
    const keyword = search.value.toLowerCase();

    const hasil = tools.filter(tool =>
        tool.name.toLowerCase().includes(keyword) ||
        tool.category.toLowerCase().includes(keyword) ||
        tool.description.toLowerCase().includes(keyword)
    );

    tampilkan(hasil);
});