const container = document.getElementById("tools");
const search = document.getElementById("search");

function tampilkan(data) {
    container.innerHTML = "";

    data.forEach(tool => {
        container.innerHTML += `
        <div class="card">
            <h2>${tool.name}</h2>

            <p>${tool.description}</p>

            <p><strong>${tool.category}</strong></p>

            <p>${tool.rating}</p>

            <p>${tool.price}</p>

            <a href="detail.html?
name=${encodeURIComponent(tool.name)}
&description=${encodeURIComponent(tool.description)}
&category=${encodeURIComponent(tool.category)}
&rating=${encodeURIComponent(tool.rating)}
&url=${encodeURIComponent(tool.url)}">
            </a>
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