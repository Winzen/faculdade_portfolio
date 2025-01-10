function sobre_mim(){
    var d1 = document.getElementById("content");
    d1.innerHTML = '' 
    d1.insertAdjacentHTML('afterbegin', sobre_mim_html())
}


function portifolio(){
    var d1 = document.getElementById("content");
    d1.innerHTML = '' 
    d1.insertAdjacentHTML('afterbegin', '<div><h1>Socorro</h1></div>')
}

function formacao(){
    var d1 = document.getElementById("content");
    d1.innerHTML = '' 
    d1.insertAdjacentHTML('afterbegin', '<div><h1>Me</h1></div>')
}

function contato(){
    var d1 = document.getElementById("content");
    d1.innerHTML = '' 
    d1.insertAdjacentHTML('afterbegin', '<div><h1>Ajuda</h1></div>')
}



function sobre_mim_html(){
    
    const html = `
      <div class="header">
      <img class="header-img" src="imagens\\76561198162290882.png" width="150">
    <h1>Luiz Eduardo - Engenheiro de Dados</h1>
      </div>
    <p class="texto">
      Olá, meu nome é Luiz Eduardo.<br> Aprendi a programar basicamente por conta própria, minha linguagem principal é Python, mas não me sinto desconfortável de usar outra linguagem caso seja necessário.</p> <br>

        <p class="texto">Tento fazer e postar um código novo por dia aqui no Github, para me manter afiado e sempre colocando em pratica o que vou descobrindo. Muitos deles não são públicos, mas eventualmente podem ser..</p> <br>

        <p class="texto">Gosto muito de resolver problemas e sempre busco achar coisas que posso estar ajudando a melhorar.</p><br>

        <p class="texto">Sinta se livre para entrar em contato caso sinta que eu possa te ajudar.</p>

    <footer class="footer">
    <a href="https://github.com/Winzen" target=_blank><img class="github_icon" src="imagens\\github.png"></a>
    <a href="https://www.linkedin.com/in/luiz-winzen/" target=_blank><img class="github_icon" src="imagens\\linkedin.png"></a>
    </footer>` 

    return html
}
