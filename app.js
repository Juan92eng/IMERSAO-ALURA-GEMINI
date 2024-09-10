function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    //campoPesquisa pesquisa estiver vazio, retorna msg dizendo pra digitar alguma coisa
    if (!campoPesquisa) { 
    section.innerHTML="<p>digite algo na busca, uma criptomoeda.</p>"
    return
}
//transformar tudo em minusculas
campoPesquisa = campoPesquisa.toLowerCase()
    
let resultados= "";
let titulo= "";
let descricao= "";


    //para cada dado na lista de dado queremos uma ocorrencia 
    for (let dado of dados)  {
        titulo= dado.titulo.toLowerCase()
        descricao= dado.descricao.toLowerCase()
        
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                        <h2>
                          <a href="#" target="_blank">${dado.titulo}</a>
                        </h2>
                        <p class="descricao-meta">${dado.descricao}</p>
                        <a href=${dado.link} target="_blank">Saiba mais</a>
                    </div>
            `;
        } 
        }   
        if (!resultados){
            resultados="<p>Nada foi encontrado</p>"
        }

    section.innerHTML = resultados;
}


