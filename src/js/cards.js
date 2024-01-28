// Declaración de clases sus propiedades y métodos.  

//Triunfos cards
export class triunfocard {
    constructor(alto,ancho,identificador,valor){
        this.triunfoCardAlto = alto;
        this.triunfoCardAncho = ancho;
        this.triunfoCardIdentificador = identificador;
        this.triunfoCardValor = valor;
    }
 }

//Palos cards

export class palocard {

    constructor(alto,ancho,identificador,palo,valor){
        this.simboloPaloCard = palo;
        this.paloCardAlto = alto;
        this.paloCardAncho = ancho;
        this.paloCardIdentificador = identificador ;
        this.paloCardValor = valor;
    }
 }

//Especial card
export class specialcard {
    constructor(alto,ancho,identificador){
        this.specialCardAlto = alto;
        this.specialCardancho = ancho;
        this.specialCardidentificador = identificador;
    }
 }


  