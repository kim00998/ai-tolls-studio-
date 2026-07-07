const toolsContainer = document.getElementById("tools");

function tampilkanTools(data) {
  toolsContainer.innerHTML = "";

  data.forEach(tool => {
    toolsContainer.innerHTML += `
      <div class="card">
        <h2>${tool.name}</h2>
        <p>${tool.description}</p>
        <small>${tool.category}</small><br><br>

        <a href="${tool.url}" target="_blank">
          <button>Kunjungi</button>
        </a>
      </div>
    `;
  });
}

tampilkanTools(tools);
