function sobre_mim(){
    var d1 = document.getElementById("content");
    d1.innerHTML = '' 
    d1.insertAdjacentHTML('afterbegin', sobre_mim_html())
}


function portifolio(){
    var d1 = document.getElementById("content");
    d1.innerHTML = '' 
    d1.insertAdjacentHTML('afterbegin', portfolio_html())
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
      <img class="header-img" src="https://storage.googleapis.com/basedosdados-website-images/account/4745.jpeg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=website-backend%40basedosdados-dev.iam.gserviceaccount.com%2F20250110%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250110T041839Z&X-Goog-Expires=604800&X-Goog-SignedHeaders=host&X-Goog-Signature=966b324a64e45e9757c9375165f8ba16349e0897778731f53985696c1754be9de38042f05e7565083846271090e7539548e5d9146203cb85773ce455d61dff045e162c930229a41658183f5e50f77eaea3d106f81379ef8e76de75d11c8cdd4fa3047effcc63cbd155cf7109d9a3f3942e3fdccfcbabe2e1fbbcd40c48b3a3aae8d94210e0507fbf7db367181916e5ccb0869c088d5c14b9b5edebb62a5dfcc062fa8155b2a5f6377f00a7983be7f22298346f329280aea3b2677b74dea1f09c5639890ec743bbb8f5bfa0310f1468812ca50fb2aa8f65aabc052ae23f3225647eab2885e44960f6c238b16f7c515d62398c2a1c73167ff71ecd9a0f447e7289" width="150">
    <h1>Luiz Eduardo - Engenheiro de Dados</h1>
      </div>
    <p class="texto">
      Olá, meu nome é Luiz Eduardo.<br> Aprendi a programar basicamente por conta própria, minha linguagem principal é Python, mas não me sinto desconfortável de usar outra linguagem caso seja necessário.</p> <br>

        <p class="texto">Tento fazer e postar um código novo por dia aqui no Github, para me manter afiado e sempre colocando em pratica o que vou descobrindo. Muitos deles não são públicos, mas eventualmente podem ser..</p> <br>

        <p class="texto">Gosto muito de resolver problemas e sempre busco achar coisas que posso estar ajudando a melhorar.</p><br>

        <p class="texto">Sinta se livre para entrar em contato caso sinta que eu possa te ajudar.</p>

    <div class="footer">
    <a href="https://github.com/Winzen" target=_blank><img class="github_icon" src="imagens\\github.png"></a>
    <a href="https://www.linkedin.com/in/luiz-winzen/" target=_blank><img class="github_icon" src="imagens\\linkedin.png"></a>
    </div>` 

    return html
}



function portfolio_html(){
    
  const html = `
  <div class="atividades_fundo">
    <div class="atividade_fundo">
        <div class="atividade_titulo">Deck Builder Master Duel Macro</div>
        <div class="atividade_link">
            <a href="https://github.com/Winzen/Deck-Builder-Master-Duel-Macro" target=_blank><img class="atividade_icon_link" src="imagens\\world-wide-web.png" alt=""></a>
            <a class="atividade_texto_link" href="https://github.com/Winzen/Deck-Builder-Master-Duel-Macro" target=_blank>ACESSE O PROJETO</a>
        </div>
        <div class="atividade_descricao">
            Raspagem e automação de 
            conjunto de cartas dentro 
            do jogo MASTER DUEL</div>
        <div class="principais_ferramentas">Principais Ferramentas:</div>    
        <div class="atividade_ferramentas">
            <ul class="atividade_lista">
                <li>BeautifulSoup</li>
                <li>re</li>
                <li>pyautogui</li>
                <li>pytesseract</li>
                <li>PIL</li>
            </ul>
        </div>
    </div>

    <div class="atividade_fundo">
        <div class="atividade_titulo">Deck Builder Master Duel Macro</div>
        <div class="atividade_link">
            <a href="https://github.com/Winzen/Deck-Builder-Master-Duel-Macro" target=_blank><img class="atividade_icon_link" src="imagens\\world-wide-web.png" alt=""></a>
            <a class="atividade_texto_link" href="https://github.com/Winzen/Deck-Builder-Master-Duel-Macro" target=_blank>ACESSE O PROJETO</a>
        </div>
        <div class="atividade_descricao">
            Raspagem e automação de 
            conjunto de cartas dentro 
            do jogo MASTER DUEL</div>
        <div class="principais_ferramentas">Principais Ferramentas:</div>    
        <div class="atividade_ferramentas">
            <ul class="atividade_lista">
                <li>BeautifulSoup</li>
                <li>re</li>
                <li>pyautogui</li>
                <li>pytesseract</li>
                <li>PIL</li>
            </ul>
        </div>
    </div>

    <div class="atividade_fundo">
        <div class="atividade_titulo">Deck Builder Master Duel Macro</div>
        <div class="atividade_link">
            <a href="https://github.com/Winzen/Deck-Builder-Master-Duel-Macro" target=_blank><img class="atividade_icon_link" src="imagens\\world-wide-web.png" alt=""></a>
            <a class="atividade_texto_link" href="https://github.com/Winzen/Deck-Builder-Master-Duel-Macro" target=_blank>ACESSE O PROJETO</a>
        </div>
        <div class="atividade_descricao">
            Raspagem e automação de 
            conjunto de cartas dentro 
            do jogo MASTER DUEL</div>
        <div class="principais_ferramentas">Principais Ferramentas:</div>    
        <div class="atividade_ferramentas">
            <ul class="atividade_lista">
                <li>BeautifulSoup</li>
                <li>re</li>
                <li>pyautogui</li>
                <li>pytesseract</li>
                <li>PIL</li>
            </ul>
        </div>
    </div>

    <div class="atividade_fundo">
        <div class="atividade_titulo">Deck Builder Master Duel Macro</div>
        <div class="atividade_link">
            <a href="https://github.com/Winzen/Deck-Builder-Master-Duel-Macro" target=_blank><img class="atividade_icon_link" src="imagens\\world-wide-web.png" alt=""></a>
            <a class="atividade_texto_link" href="https://github.com/Winzen/Deck-Builder-Master-Duel-Macro" target=_blank>ACESSE O PROJETO</a>
        </div>
        <div class="atividade_descricao">
            Raspagem e automação de 
            conjunto de cartas dentro 
            do jogo MASTER DUEL</div>
        <div class="principais_ferramentas">Principais Ferramentas:</div>    
        <div class="atividade_ferramentas">
            <ul class="atividade_lista">
                <li>BeautifulSoup</li>
                <li>re</li>
                <li>pyautogui</li>
                <li>pytesseract</li>
                <li>PIL</li>
            </ul>
        </div>
    </div>

    <div class="atividade_fundo">
        <div class="atividade_titulo">Deck Builder Master Duel Macro</div>
        <div class="atividade_link">
            <a href="https://github.com/Winzen/Deck-Builder-Master-Duel-Macro" target=_blank><img class="atividade_icon_link" src="imagens\\world-wide-web.png" alt=""></a>
            <a class="atividade_texto_link" href="https://github.com/Winzen/Deck-Builder-Master-Duel-Macro" target=_blank>ACESSE O PROJETO</a>
        </div>
        <div class="atividade_descricao">
            Raspagem e automação de 
            conjunto de cartas dentro 
            do jogo MASTER DUEL</div>
        <div class="principais_ferramentas">Principais Ferramentas:</div>    
        <div class="atividade_ferramentas">
            <ul class="atividade_lista">
                <li>BeautifulSoup</li>
                <li>re</li>
                <li>pyautogui</li>
                <li>pytesseract</li>
                <li>PIL</li>
            </ul>
        </div>
    </div>

    <div class="atividade_fundo">
        <div class="atividade_titulo">Deck Builder Master Duel Macro</div>
        <div class="atividade_link">
            <a href="https://github.com/Winzen/Deck-Builder-Master-Duel-Macro" target=_blank><img class="atividade_icon_link" src="imagens\\world-wide-web.png" alt=""></a>
            <a class="atividade_texto_link" href="https://github.com/Winzen/Deck-Builder-Master-Duel-Macro" target=_blank>ACESSE O PROJETO</a>
        </div>
        <div class="atividade_descricao">
            Raspagem e automação de 
            conjunto de cartas dentro 
            do jogo MASTER DUEL</div>
        <div class="principais_ferramentas">Principais Ferramentas:</div>    
        <div class="atividade_ferramentas">
            <ul class="atividade_lista">
                <li>BeautifulSoup</li>
                <li>re</li>
                <li>pyautogui</li>
                <li>pytesseract</li>
                <li>PIL</li>
            </ul>
        </div>
    </div>
</div>
    ` 

  return html
}