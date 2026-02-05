function saraksts() {
    const sarakstss = document.createElement("li");
    sarakstss.innerText = document.getElementById("darbs").value;
    sarakstss.classList.add("d-flex","justify-content-between","align-items-center","list-group-item");
    const notirit = document.createElement("button");
    notirit.innerText = "dzest";
    notirit.classList.add("btn", "btn-danger");
    notirit.onclick = function notiritt() {
        sarakstss.remove();
    }
    document.getElementById("task-list").appendChild(sarakstss);
    sarakstss.appendChild(notirit);
}