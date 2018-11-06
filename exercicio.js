//CLASSE - Hoisting - toda classe deverá ser definida antes de ser chamada
class Mulher {

    constructor (nome, signo, cor_do_cabelo, etnia){
        this.nome = nome
        this.altura = 0.4
        this.signo = signo
        this.cor_do_cabelo = cor_do_cabelo
        this.id_genero = "F"
        this.etnia = etnia
        this.profissao = []
    }

    pintar_o_cabelo(cor) {
        this.cor_do_cabelo = cor
    }

    contratar() {
        this.profissao.push(...arguments)
    }

    crescer() {
        let nova_altura = this.altura + 0.01
        this.altura = parseFloat(nova_altura.toFixed(2))
    }
}



//FUNCAO
function Mulher (nome, signo, cor_do_cabelo, etnia) {
    this.nome = nome
    this.altura = 0.4
    this.signo = signo
    this.cor_do_cabelo = cor_do_cabelo
    this.id_genero = "F"
    this.etnia = etnia
    this.profissao = []
    
    this.pintar_o_cabelo = function (cor){
        this.cor_do_cabelo = cor
    }

    this.contratar = function () {
        this.profissao.push(...arguments)
    }

    this.crescer = function (){
        let nova_altura = this.altura + 0.01
        this.altura = parseFloat(nova_altura.toFixed(2))
    }

}


//EXERCICIO PONTO

class Ponto{

    constructor(nome, cor, eixoX, eixoY){
        this.nome = nome
        this.cor = cor
        this.eixoX = eixoX
        this.eixoY = eixoY
    }

    mover_horizontalmente(distancia){
        this.eixoX += distancia
        return this.eixoX
    }

    mover_verticalmente(){
        this.eixoY += distancia
        return this.eixoY
    }

    //mover em ambos eixos
    mover(distanciaX, distanciaY){
        this.x = distanciaX
        this.y = distanciaY
        return [ this.x, this.y ] 
    }

    //calcular a distância entre os pontos
    distancia_entre_dois_pontos(outro_ponto) {
        const x1 = this.x
        const y1 = this.y
        const x2 = outro_ponto.x
        const y2 = outro_ponto.y
        return Math.sqrt((Math.abs(x1 - x2 )) ** 2 + (Math.abs(y1 - y2)) ** 2)
    }
}
// teste de comentário
