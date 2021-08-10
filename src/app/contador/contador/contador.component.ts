import { Component } from "@angular/core";

@Component({
    selector: "app-contador",
    template: `
        <h1>Hola Mundo</h1>
        <h1> {{ title }} </h1>
        <h1> Esto es una suma {{ 1 + 1 }} </h1>
        <h3>La base es <strong> {{ base }}  </strong></h3>


        <!-- Ejemplo de el contador para el numero -->

        <button (click)="numero = numero + 1"> + 1 </button>
        <span> {{ numero }} </span>
        <button (click)="numero = numero - 1"> - 1 </button>


        <!-- Se realiza lo mismo invocando 2 funciones -->
        <p></p>
        <button (click)="sumar()"> + 1 </button>
        <span> {{ numero }} </span>
        <button (click)="restar()"> - 1 </button>


        <!-- Se realiza lo mismo invocando 1 funcion pasando valores -->
        <p></p>
        <button (click)="acumular(+2)"> + 2 </button>
        <span> {{ numero }} </span>
        <button (click)="acumular(-2)"> - 2 </button>

        <!-- Se realiza lo mismo invocando 1 funcion calculando con la base -->
        <p></p>
        <button (click)="acumular( base )"> + {{ base }} </button>
        <span> {{ numero }} </span>
        <button (click)="acumular(- base)"> - {{ base }} </button>
    `

})

export class ContadorComponent {
    title = 'Contador App';
    numero: number = 10;
    base: number = 5;
  
    sumar (){
      this.numero += 1;
    }
  
    restar (){
      this.numero -= 1;
    }
  
    acumular( valor: number){
      this.numero += valor;
    }


}