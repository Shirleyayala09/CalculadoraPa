import { Component } from '@angular/core';
import { MinLengthValidator } from '@angular/forms';


@Component({
    selector: 'app-operaciones',
    templateUrl: './operaciones.component.html',
    styleUrls: ['./operaciones.component.css'],
})

export class OperacionesComponent {
    unasolacosa = '10+';
    digitando = true;
    resultado = 'HOla';

    moneda1 = '';
    moneda2 = '';

    pivot = true;

    pantalla = '0';
    nbefore:string = '';
    operador!: string;
    nafter: string = '';

    operar = true;

    eliminados = '';



    addPunto(val: boolean, puto: string):void {

        if(this.pivot && (this.nbefore && !this.nafter) ) {
            this.nbefore  = this.nbefore + puto;
            this.pivot = false;
        }

        if(!this.pivot && this.nafter) {
            if(this.nafter.includes('.')) {
                return;
            }
            this.nafter = this.nafter + puto;

            this.pivot = true;
        }

    }

    resetear():void {
        this.nbefore = '';
        this.nafter = '';
        this.operador = '';
        this.digitando = true;
        this.pivot = true;
        this.moneda1 = '';
        this.moneda2 = '';
    }

    eliminar(): void {
        if(this.nafter){
            let final:number = this.nafter.length;
            this.nafter = this.nafter.slice(0, final-1);
            if(!this.nbefore.includes('.')){
                this.pivot = true;
            }
        }else if(this.operador){
            this.moneda2 = '';

            let final:number = this.operador.length;
    
            this.operador = this.operador.slice(0, final-1);

        }else{
            let final:number = this.nbefore.length;

            this.nbefore = this.nbefore.slice(0, final-1);

            if(!this.nbefore) {
                this.moneda1 = '';
            }
            if(!this.nbefore.includes('.')){
                this.pivot = true;
            }
        }
        
    }

    
    ejecutar():void {
        
        if(this.operador === '+') {
            this.nbefore = (parseFloat(this.nbefore) + parseFloat(this.nafter)).toString();
        }
     
        if(this.operador === '-') {
            this.nbefore = (parseFloat(this.nbefore) - parseFloat(this.nafter)).toString();
        }

        if(this.operador === 'x') {
            this.nbefore = (parseFloat(this.nbefore) * parseFloat(this.nafter)).toString();
        }

        if(this.operador === '÷') {
            this.nbefore = (parseFloat(this.nbefore) / parseFloat(this.nafter)).toString();
        }

        this.nafter = '';
        this.operador = '';
        this.pivot = false;
        this.moneda2 = '';
        console.log(this.nbefore)

    }

    addOperador(operador: string):void {
        if(this.nbefore || this.nafter) {
            this.operador = operador;
            this.operar = false;
        }
    }

// agregamos el numero:
    addNumero(numero: string):void {
        if(this.operador) {
            if(this.nafter === '0'){
                 this.nafter = numero
                 return;
                }
            this.nafter = this.nafter + numero;
            this.pivot = false;
            this.moneda2 = '$';
        }else {
            if(this.nbefore === '0'){
                this.nbefore = numero
                return;
               }
            this.nbefore = this.nbefore + numero;
            this.moneda1 = '$';
        }
        
    }

}
