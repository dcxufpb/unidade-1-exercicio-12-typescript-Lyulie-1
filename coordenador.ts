
interface Coordenador {
    nome : string,
    idade : number,
    cpf : string
}

const validarCamposObrigatoriosCoordenador = (coord : Coordenador) : any => {
    if (!coord.nome)
        throw new Error("O nome do coordenador é obrigatório.");

    if (!coord.cpf)
        throw new Error("O CPF do coordenador é obrigatório.");
}

const dados_coordenador = (coord : Coordenador) : string => {
    
    validarCamposObrigatoriosCoordenador(coord)  
    const _idade = coord.idade == 0? "" : "\nIdade: " + coord.idade;
    const _cpf = "CPF: " + coord.cpf;

    return(
`
Coordenação:
${coord.nome}${_idade}
${_cpf}
`
    )
}

export {Coordenador, dados_coordenador}