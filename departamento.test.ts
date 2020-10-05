import {Coordenador} from './coordenador'
import {Departamento, dados_departamento} from './departamento'

function verificaCampoObrigatorio(
    mensagemEsperada: string, 
    departamento : Departamento
) {
    try {
        dados_departamento(departamento)
    } catch(e) {
        expect(e.message).toBe(mensagemEsperada)
    }
}

const TEXTO_ESPERADO_DEPARTAMENTO_COMPLETO = (
`Departamento 1, Sigla 1
Coordenadas: 11.1111111, 11.1111111

Coordenação:
Coordenador 1
Idade: 11
CPF: 111.111.111-11
`
)

const TEXTO_ESPERADO_SEM_SIGLA = (
`Departamento 1
Coordenadas: 11.1111111, 11.1111111

Coordenação:
Coordenador 1
Idade: 11
CPF: 111.111.111-11
`
)

const TEXTO_ESPERADO_SEM_IDADE = (
`Departamento 1, Sigla 1
Coordenadas: 11.1111111, 11.1111111

Coordenação:
Coordenador 1
CPF: 111.111.111-11
`
)

const TEXTO_ESPERADO_SEM_SIGLA_E_IDADE = (
`Departamento 1
Coordenadas: 11.1111111, 11.1111111

Coordenação:
Coordenador 1
CPF: 111.111.111-11
`
)

const TEXTO_ESPERADO_EXERCICIO_CUSTOMIZADO = (
`Departamento de artes russas, DRA
Coordenadas: 59.9144855, 30.3341104

Coordenação:
Dima
CPF: 18.888-000
`
)

let NOME_DEPARTAMENTO : string = "Departamento 1"
let SIGLA : string = "Sigla 1"
let LOCALIZACAO : string = "11.1111111, 11.1111111"
let NOME_COORDENADOR : string = "Coordenador 1"
let IDADE : number = 11
let CPF : string = "111.111.111-11"


test('Departamento Completo', () => {
    let coordenador : Coordenador = {
        nome : NOME_COORDENADOR,
        idade : IDADE,
        cpf : CPF
    }
    
    let departamentoCompleto : Departamento = {
        nome : NOME_DEPARTAMENTO,
        sigla : SIGLA,
        localizacao : LOCALIZACAO,
        coordenador
    }
    
    expect(dados_departamento(departamentoCompleto)).toBe(
        TEXTO_ESPERADO_DEPARTAMENTO_COMPLETO
    )
})
    
/**
 * Campos Opcionais
 * @Coordenador idade
 * @Departamento sigla
 */

test('Sigla vazia', () => {
    let coordenador : Coordenador = {
        nome : NOME_COORDENADOR,
        idade : IDADE,
        cpf : CPF
    }

    let departamentoCompleto : Departamento = {
        nome : NOME_DEPARTAMENTO,
        sigla : "",
        localizacao : LOCALIZACAO,
        coordenador
    }

    expect(dados_departamento(departamentoCompleto)).toBe(
        TEXTO_ESPERADO_SEM_SIGLA
    )
})

test('Idade vazia', () => {
    let coordenador : Coordenador = {
        nome : NOME_COORDENADOR,
        idade : 0,
        cpf : CPF
    }

    let idadeVazia : Departamento = {
        nome : NOME_DEPARTAMENTO,
        sigla : SIGLA,
        localizacao : LOCALIZACAO,
        coordenador
    }

    expect(dados_departamento(idadeVazia)).toBe(
        TEXTO_ESPERADO_SEM_IDADE
    )
})

test('Sigla e idade vazias', () => {
    let coordenador : Coordenador = {
        nome : NOME_COORDENADOR,
        idade : 0,
        cpf : CPF
    }

    let siglaIdadeVazio : Departamento = {
        nome : NOME_DEPARTAMENTO,
        sigla : "",
        localizacao : LOCALIZACAO,
        coordenador
    }

    expect(dados_departamento(siglaIdadeVazio)).toBe(
        TEXTO_ESPERADO_SEM_SIGLA_E_IDADE
    )
})

/**
 * Campos Obrigatórios
 * @Coordenador nome e cpf
 * @Departamento nome e localização
 */



test('Nome Coordenador vazio', () => {
    let coordenador : Coordenador = {
        nome : "",
        idade : IDADE,
        cpf : CPF
    }

    let nomeCoordenadorVazio : Departamento = {
        nome : NOME_DEPARTAMENTO,
        sigla : SIGLA,
        localizacao : LOCALIZACAO,
        coordenador
    }

    verificaCampoObrigatorio(`O nome do coordenador é obrigatório.`, nomeCoordenadorVazio);
})

test('CPF vazio', () => {
    let coordenador : Coordenador = {
        nome : NOME_COORDENADOR,
        idade : IDADE,
        cpf : ""
    }

    let cpfVazio : Departamento = {
        nome : NOME_DEPARTAMENTO,
        sigla : SIGLA,
        localizacao : LOCALIZACAO,
        coordenador
    }

    verificaCampoObrigatorio(`O CPF do coordenador é obrigatório.`, cpfVazio);
})

test('Nome Departamento vazio', () => {
    let coordenador : Coordenador = {
        nome : NOME_COORDENADOR,
        idade : IDADE,
        cpf : CPF
    }

    let nomeDepartamentoVazio : Departamento = {
        nome : "",
        sigla : SIGLA,
        localizacao : LOCALIZACAO,
        coordenador
    }

    verificaCampoObrigatorio(`O nome do departamento é obrigatório.`, nomeDepartamentoVazio);
})

test('Localização vazia', () => {
    let coordenador : Coordenador = {
        nome : NOME_COORDENADOR,
        idade : IDADE,
        cpf : CPF
    }

    let localizacaoVazia : Departamento = {
        nome : NOME_DEPARTAMENTO,
        sigla : SIGLA,
        localizacao : "",
        coordenador
    }

    verificaCampoObrigatorio(`A localização do departamento é obrigatória.`, localizacaoVazia);
})

test('Exercício customizado', () => {

    // Defina seus próprios valores para as variáveis a seguir
    let nome_departamento = "Departamento de artes russas";
    let sigla = "DRA";
    let localizacao = "59.9144855, 30.3341104";
    let nome_coordenador = "Dima";
    let idade = 0;
    let cpf = "18.888-000";
  
    let coordenador : Coordenador = {
        nome : nome_coordenador,
        idade,
        cpf
    }

    let customDepartamento : Departamento = {
        nome : nome_departamento,
        sigla,
        localizacao,
        coordenador
    }
    
    //E atualize o texto esperado abaixo
    expect(dados_departamento(customDepartamento)).toBe(
        TEXTO_ESPERADO_EXERCICIO_CUSTOMIZADO
    )
})


