// Declaración de clases sus propiedades y métodos.  

//Triunfos cards
export class typeTriunfoCard {
    constructor(alto,ancho,identificador,valor){
        this.triunfoCardAlto = alto;
        this.triunfoCardAncho = ancho;
        this.triunfoCardIdentificador = identificador;
        this.triunfoCardValor = valor;
    }
    identificador(){
        return this.triunfoCardIdentificador;
    }

    valor(){
        return this.triunfoCardValor;
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
    identificador(){
        return this.paloCardIdentificador;
    }

    valor(){
        return this.paloCardValor;
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


  