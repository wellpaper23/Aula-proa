
function atv1() { 
    let div1 = document.createElement('h1'); 
    div1.setAttribute('id', 'titulo2'); 
    div1.textContent = "Olá pamonhas"; 
    document.body.append(div1); 
}

atv1();


function atv2() { 
    let paragrafo = document.createElement('p'); 
    paragrafo.setAttribute('id', 'titulo2'); 
    paragrafo.textContent = "Olá Picanha"; 
paragrafo.setAttribute('style', 'color: red; font-size: 24px;');
    document.body.append(paragrafo); 
}

atv2();


function atv3() { 
    let imagem = document.createElement('img'); 
    imagem.setAttribute('src', 'ronova.png'); 
    imagem.setAttribute('alt', 'Ronovell'); 

    document.body.append(imagem); 
    document.body.style.backgroundColor = 'red';

    let audio = document.createElement('audio'); 
    audio.setAttribute('src', 'O Mors - HOYO-MiX.mp3'); 
    audio.setAttribute('autoplay', ''); 
    audio.setAttribute('loop', ''); 

    document.body.append(audio); 
} 
atv3();

function atv4() { 


    let paragrafo = document.createElement('div'); 
    paragrafo.setAttribute('src', 'ronova.png'); 
    paragrafo.setAttribute('alt', 'Ronovell'); 


    paragrafo.textContent = "Modo Escuro Ativado"; 
    paragrafo.setAttribute('style', 'color: #fff; background-color: #000;');
    document.body.append(paragrafo); 
}

atv4();

function atv5() { 
    let compras = ["Maçã", "Banana", "Uva"];

    let lista = document.createElement('ul');
    compras.forEach(compra => {
        let fruta = document.createElement('li');
        fruta.textContent = compra;
        lista.appendChild(fruta);
    });
    document.body.append(lista)
}
atv5();

function atv6(){
    let produto = { nome: "Tênis", preco: 200 };
    let vitrine = document.createElement('div');
    vitrine.setAttribute('id','vitrine');
    vitrine.innerHTML = `<h2>${produto.nome}</h2> <p>${produto.preco}</p>`;
    document.body.appendChild(vitrine);

}

atv6();

function atv7(){
    let div = document.createElement('div');
    div.id = "propaganda";
    div.innerText = 'Compre agora!';

    document.body.appendChild(div);
    const propagandaFechada = document.getElementById("propaganda");
    propagandaFechada.remove();
}

atv7();


function atv8() {
    for (let i = 0; i < 3; i++) {
        const paragrafo = document.createElement("p");
        paragrafo.className = "segredo";
        paragrafo.textContent = "Senha123";
        document.body.appendChild(paragrafo);
    }

    const senhas = document.querySelectorAll(".segredo");

    for (let i = 0; i < senhas.length; i++) {
        senhas[i].textContent = "********";
    }
}

atv8();

function atv9(){
    let fila = document.createElement('ol');
    let cliente1 = document.createElement("li");
    let cliente2 = document.createElement("li");

    cliente1.textContent = "joão";
    cliente2.textContent = "Maria";

    fila.appendChild(cliente1);
    fila.appendChild(cliente2);

    const clienteVip = document.createElement("li");
    clienteVip.textContent = "cliente VIP";

    fila.insertBefore(clienteVip,cliente1);

    document.body.append(fila);

}

atv9();

function atv10(){
    let painel = document.createElement("div");
    painel.id = "painel"
    document.body.append(painel);

    let  statusAntigo = document.createElement("div");
    statusAntigo.id = "statusAntigo";
    statusAntigo.textContent = "Pedido pendente..."

    painel.append(statusAntigo);

    let  statusNovo = document.createElement("div");
    statusNovo.className = "sucesso";
    statusNovo.textContent = "Pedido Entregue!";

    painel.replaceChild(statusNovo, statusAntigo);

    
}
atv10();



