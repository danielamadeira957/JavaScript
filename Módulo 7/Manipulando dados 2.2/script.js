let postagens = [];

const textarea = document.getElementById('texto-postagem');
const btnPostar = document.getElementById('btn-postar');
const feed = document.getElementById('feed');

async function obterGatinho() {
    try {
        const resposta = await fetch('https://thecatapi.com');
        const dados = await resposta.json();
        return dados[0].url; 
    } catch (erro) {
        console.error("Erro ao buscar API de gato:", erro);
        return 'https://placeholder.com'; 
    }
}

async function enviarPostagem() {
    const texto = textarea.value.trim();

    if (texto === "") {
        alert("Escreva algo na sua postagem!");
        return;
    }

    btnPostar.disabled = true;
    btnPostar.textContent = "Carregando...";

    const linkImagemGato = await obterGatinho();

    const novaPostagem = {
        data: new Date(),
        nomeUsuario: "@usuario_dev",
        avatar: "https://dicebear.com", 
        texto: texto,
        imagem: linkImagemGato,
        likes: 0
    };

    postagens.unshift(novaPostagem);

    textarea.value = "";
    btnPostar.disabled = false;
    btnPostar.textContent = "Postar";

    desenharFeed();
}

function desenharFeed() {
    feed.innerHTML = ""; 

    postagens.forEach((post, index) => {
        const divPost = document.createElement('div');
        divPost.className = 'card-post';

        const divHeader = document.createElement('div');
        divHeader.className = 'post-header';
        divHeader.innerHTML = `
            <img src="${post.avatar}" class="avatar-img" alt="Avatar">
            <span class="usuario-nome">${post.nomeUsuario}</span>
        `;

        const pTexto = document.createElement('p');
        pTexto.className = 'post-texto';
        pTexto.textContent = post.texto;

        const imgGato = document.createElement('img');
        imgGato.src = post.imagem;
        imgGato.className = 'post-gato-img';

        const divFooter = document.createElement('div');
        divFooter.className = 'post-footer';

        const btnCurtir = document.createElement('button');
        btnCurtir.className = 'btn-like';
        btnCurtir.textContent = `❤️ Curtir (${post.likes})`;

        btnCurtir.addEventListener('click', () => {
            post.likes++;
            btnCurtir.textContent = `❤️ Curtir (${post.likes})`;
        });

        divFooter.appendChild(btnCurtir);

        divPost.appendChild(divHeader);
        divPost.appendChild(pTexto);
        divPost.appendChild(imgGato);
        divPost.appendChild(divFooter);

        feed.appendChild(divPost);
    });
}

btnPostar.addEventListener('click', enviarPostagem);

