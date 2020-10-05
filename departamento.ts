import { Coordenador, dados_coordenador } from "./coordenador";

interface Departamento {
    nome : string,
    sigla : string,
    localizacao : string,
    coordenador : Coordenador
}

const validarCamposObrigatoriosDepartamento = (dp : Departamento) : any => {
    if (!dp.nome)
        throw new Error("O nome do departamento é obrigatório.");

    if (!dp.localizacao)
        throw new Error("A localização do departamento é obrigatória.")
}

const dados_departamento = (dp : Departamento) : string => {
    
    validarCamposObrigatoriosDepartamento(dp)

    const _nome = dp.sigla? dp.nome + ", " : dp.nome;
    const _sigla = dp.sigla? dp.sigla : ""; 
    const _localizacao = "Coordenadas: " + dp.localizacao;

    return (
`${_nome}${_sigla}
${_localizacao}
${dados_coordenador(dp.coordenador)}`
    )
}

export {Departamento, dados_departamento}