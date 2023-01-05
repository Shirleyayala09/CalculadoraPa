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
    // nbefore!:number;
    nbefore:string = '';
    operador!: string;
    // nafter!: number;
    nafter: string = '';

    operar = true;

    eliminados = '';



    addPunto(val: boolean, puto: string):void {
        console.log('PIVOT : ', this.pivot);
        

        if(this.pivot && (this.nbefore && !this.nafter) ) {
            console.log('Ingresamos: al primero');

            this.nbefore  = this.nbefore + puto;
            
            this.pivot = false;
        }

        if(!this.pivot && this.nafter) {
            console.log('Ingresamos al segundo');
            
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
    
            console.log('numero de leng:', final);
            this.nafter = this.nafter.slice(0, final-1);
            console.log(this.nafter);
        }else if(this.operador){
            this.moneda2 = '';

            let final:number = this.operador.length;
    
            console.log('numero de leng:', final);
            this.operador = this.operador.slice(0, final-1);
            console.log(this.operador);
        }else{
            let final:number = this.nbefore.length;
    
            console.log('numero de leng:', final);
            this.nbefore = this.nbefore.slice(0, final-1);
            console.log(this.nbefore);
            (!this.nbefore) ? this.moneda1 = '': '';
        }
        
    }

    
    ejecutar():void {
        console.log('Vamos a ejecutar todo');

        // console.log(this.digitando);

        if(this.operador === '+') {
            console.log('Vamos a sumar');
            this.digitando = false;
            this.resultado = (parseFloat(this.nbefore) + parseFloat(this.nafter)).toString();
        }
        
        if(this.operador === '-') {
            console.log('Vamos a restar');
            this.digitando = false;
            this.resultado = (parseFloat(this.nbefore) - parseFloat(this.nafter)).toString();
        }

        if(this.operador === 'x') {
            console.log('Vamos a Multiplicar');
            this.digitando = false;
            this.resultado = (parseFloat(this.nbefore) * parseFloat(this.nafter)).toString();
        }

        if(this.operador === '÷') {
            console.log('Vamos a Dividir');
            this.digitando = false;
            this.resultado = (parseFloat(this.nbefore) / parseFloat(this.nafter)).toString();
        }

        console.log(this.resultado)

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
            console.log('Existe');
            if(this.nafter === '0'){
                 this.nafter = numero
                 return;
                }
            this.nafter = this.nafter + numero;
            this.pivot = false;
            this.moneda2 = '$';
        }else {
            console.log('No Existe');
            if(this.nbefore === '0'){
                this.nbefore = numero
                return;
               }
            this.nbefore = this.nbefore + numero;
            this.moneda1 = '$';
        }
        
        console.log(this.operador);
    }

}
