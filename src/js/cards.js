// Declaración de clases sus propiedades y métodos.  

//Triunfos cards
export class typeTriunfoCard {
    constructor(alto,ancho,identificador,valor){
        this.triunfoCardAlto = alto;
        this.triunfoCardAncho = ancho;
        this.triunfoCardIdentificador = identificador;
        this.triunfoCardValor = valor;
    }
 }

//Palos cards

export class typePaloCard {

    constructor(alto,ancho,identificador,palo,valor){
        this.paloCardAlto = alto;
        this.paloCardAncho = ancho;
        this.paloCardIdentificador = identificador ;
        this.simboloPaloCard = palo;
        this.paloCardValor = valor;
    }
 }

//Especial card
export class typeSpecialCard {
    constructor(alto,ancho,identificador){
        this.specialCardAlto = alto;
        this.specialCardancho = ancho;
        this.specialCardidentificador = identificador;
    }
 }


  