const inputBusca = document.getElementById('input-busca');
const btnBuscar = document.getElementById('btn-buscar');
const containerResultado = document.getElementById('resultado');

async function buscarUsuarios() {
    const termo = inputBusca.value.trim();

    if (termo === '') {
        containerResultado.innerHTML = '';
        return;
    }

    containerResultado.innerHTML = '<p style="text-align:center; color:#657786;">Buscando...</p>';

    try {
        const url = `https://github.com{encodeURIComponent(termo)}`;
        const resposta = await fetch(url);
        
        if (!resposta.ok) {
            throw new Error('Erro na requisição');
        }

        const dados = await resposta.json();

        // Regra do enunciado cumprida
        if (!dados.items || dados.items.length === 0) {
            containerResultado.innerHTML = '<p style="text-align:center; color:#dc3545;">Não foram encontrados usuários para essa pesquisa</p>';
            return;
        }

        renderizarLista(dados.items);

    } catch (erro) {
        console.error(erro);
        containerResultado.innerHTML = '<p style="text-align:center; color:#dc3545;">Ocorreu um erro ao realizar a busca. Tente novamente.</p>';
    }
}

function renderizarLista(usuarios) {
    containerResultado.innerHTML = ''; 

    const ul = document.createElement('ul');
    ul.style.listStyle = 'none';
    ul.style.padding = '0';

    usuarios.forEach(usuario => {
        const li = document.createElement('li');
        li.style.padding = '10px';
        li.style.borderBottom = '1px solid #e1e8ed';

        const link = document.createElement('a');
        link.href = usuario.html_url;
        link.target = '_blank';
        link.textContent = usuario.login;
        link.style.color = '#1da1f2';
        link.style.textDecoration = 'none';
        link.style.fontWeight = 'bold';

        li.appendChild(link);
        ul.appendChild(li);
    });

    containerResultado.appendChild(ul);
}

btnBuscar.addEventListener('click', buscarUsuarios);

inputBusca.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        buscarUsuarios();
    }
});