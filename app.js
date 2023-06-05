const app = document.getElementById("app");

const pessoa = {
    name: 'Vitor',
    id:1024
}

function mudarApp() {
    app.style.color = 'red';
    document.body.innerText = JSON.stringify(pessoa.name);
}