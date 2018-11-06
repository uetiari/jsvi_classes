//Criando objeto
const rect = {
    altura: 10,
    largura: 30,
    cor: "red",
    unidade: "m",
    area: function () {
        return this.altura * this.largura + this.unidade
    } //THIS nesse caso refere-se ao objeto RECT
}

//Crie uma função construtora sem a classe
function Rect (altura, largura, cor, unidade) {
    this.altura = altura
    this.largura = largura 
    this.cor = cor
    this.unidade = unidade
    this.area = function () {
        return this.altura * this.largura + this.unidade
        } 
}

//Reescreva a função acima utilizando as classes
class Rect {
    constructor (altura, largura, cor, unidade) {
        this.altura = altura
        this.largura = largura
        this.cor = cor
        this.unidade = unidade
        }
        
        area() {
            return this.altura * this.largura + this.unidade
        }
        // Para mostrar onde fica o centro do objeto
        center() {
            return [ this.altura / 2, this.largura /2 ]
        }
}

//um objeto novo que irá herdar as características acima
class Quadrado extends Rect {
    constructor(lado,cor, unidade) {
        //super de SUPERIOR, ou seja, do construtor anterior
        super(lado, lado, cor, unidade)
        //para adicionar mais coisa, apenas após SUPER
        // this.eUmQuadrado = true
    }
}