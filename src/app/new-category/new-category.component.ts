import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Category } from '../models/categoria.models';
// import { NewCategory } from 'src/app/models/new-category.model';
import { NewCategory } from '../models/new-category-model';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})

// export class CreateNewCategoryComponent {

export class NewCategoryComponent {

  @Input() visible: boolean = false;
  name: string = '';
  type: string = 'gastos';
  color: string = '';
  icon: string = '';

  newCategory!: NewCategory;

  // @Output() onClose = new EventEmitter<boolean>();

  @Output() onCreate = new EventEmitter<NewCategory>();

  // close() {
    // this.onClose.emit();
  // }

  nameValue(): void {
    this.name = this.name;
    // this.type = this.type;
    this.color = this.color;
  }

  selectColor(color: string): void {
    this.color = color;
  }

  selectIcon(icon: string): void {
    this.icon = icon;
  }

  crearCategoria(): void {
    this.newCategory = {
      name: this.name,
      icon: this.icon,
      type: this.type,
      color: this.color,
      total: '0',
    };

    this.onCreate.emit(this.newCategory);

    // this.close();

    this.name = '';
    this.type = '';
    this.color = '';
    this.icon = '';

    console.log('---------------------------');
    console.log(this.newCategory);
  }

  mostrar_1:boolean = false;
  mostrar_2:boolean = false;
  mostrar_3:boolean = false;
  mostrar_4:boolean = false;
  mostrar_5:boolean = false;
  mostrar_6:boolean = false;
  mostrar_7:boolean = false;
  mostrar_8:boolean = false;

  agregar_1:boolean = false;
  agregar_2:boolean = false;
  agregar_3:boolean = false;
  agregar_4:boolean = false;
  agregar_5:boolean = false;
  agregar_6:boolean = false;
  agregar_7:boolean = false;
  agregar_8:boolean = false;

  Mostrar1(){
    this.mostrar_1=!this.mostrar_1;    
    this.mostrar_2=false ;
    this.mostrar_3=false ;
    this.mostrar_4=false ;
    this.mostrar_5=false ;
    this.mostrar_6=false ;
    this.mostrar_7=false ;
    this.mostrar_8=false ;
  }

  Mostrar2(){
    this.mostrar_2=!this.mostrar_2;
    this.mostrar_1=false ;
    this.mostrar_3=false ;
    this.mostrar_4=false ;
    this.mostrar_5=false ;
    this.mostrar_6=false ;
    this.mostrar_7=false ;
    this.mostrar_8=false ;
  }
  Mostrar3(){
    this.mostrar_3=!this.mostrar_3;
    this.mostrar_1=false ;
    this.mostrar_2=false ;
    this.mostrar_4=false ;
    this.mostrar_5=false ;
    this.mostrar_6=false ;
    this.mostrar_7=false ;
    this.mostrar_8=false ;
  }
  Mostrar4(){
    this.mostrar_4=!this.mostrar_4;
    this.mostrar_1=false ;
    this.mostrar_2=false ;
    this.mostrar_3=false ;
    this.mostrar_5=false ;
    this.mostrar_6=false ;
    this.mostrar_7=false ;
    this.mostrar_8=false ;
  }
  Mostrar5(){
    this.mostrar_5=!this.mostrar_5;
    this.mostrar_1=false ;
    this.mostrar_2=false ;
    this.mostrar_3=false ;
    this.mostrar_4=false ;
    this.mostrar_6=false ;
    this.mostrar_7=false ;
    this.mostrar_8=false ;
  }
  Mostrar6(){
    this.mostrar_6=!this.mostrar_6;
    this.mostrar_1=false ;
    this.mostrar_2=false ;
    this.mostrar_3=false ;
    this.mostrar_4=false ;
    this.mostrar_5=false ;
    this.mostrar_7=false ;
    this.mostrar_8=false ;
  }
  Mostrar7(){
    this.mostrar_7=!this.mostrar_7;
    this.mostrar_1=false ;
    this.mostrar_2=false ;
    this.mostrar_3=false ;
    this.mostrar_4=false ;
    this.mostrar_5=false ;
    this.mostrar_6=false ;
    this.mostrar_8=false ;
  }
  Mostrar8(){
    this.mostrar_8=!this.mostrar_8;
    this.mostrar_1=false ;
    this.mostrar_2=false ;
    this.mostrar_3=false ;
    this.mostrar_4=false ;
    this.mostrar_5=false ;
    this.mostrar_6=false ;
    this.mostrar_7=false ;
  }


agregar1(){
  this.agregar_1=!this.agregar_1;
  this.agregar_2=false ;
  this.agregar_3=false ;
  this.agregar_4=false ;
  this.agregar_5=false ;
  this.agregar_6=false ;
  this.agregar_7=false ;
  this.agregar_8=false ;
}

agregar2(){
  this.agregar_2=!this.agregar_2;
  this.agregar_1=false ;
  this.agregar_3=false ;
  this.agregar_4=false ;
  this.agregar_5=false ;
  this.agregar_6=false ;
  this.agregar_7=false ;
  this.agregar_8=false ;
}
agregar3(){
  this.agregar_3=!this.agregar_3;
  this.agregar_1=false ;
  this.agregar_2=false ;
  this.agregar_4=false ;
  this.agregar_5=false ;
  this.agregar_6=false ;
  this.agregar_7=false ;
  this.agregar_8=false ;
}
agregar4(){
  this.agregar_4=!this.agregar_4;
  this.agregar_1=false ;
  this.agregar_2=false ;
  this.agregar_3=false ;
  this.agregar_5=false ;
  this.agregar_6=false ;
  this.agregar_7=false ;
  this.agregar_8=false ;
}
agregar5(){
  this.agregar_5=!this.agregar_5;
  this.agregar_1=false ;
  this.agregar_2=false ;
  this.agregar_3=false ;
  this.agregar_4=false ;
  this.agregar_6=false ;
  this.agregar_7=false ;
  this.agregar_8=false ;
}
agregar6(){
  this.agregar_6=!this.agregar_6;
  this.agregar_1=false ;
  this.agregar_2=false ;
  this.agregar_3=false ;
  this.agregar_4=false ;
  this.agregar_5=false ;
  this.agregar_7=false ;
  this.agregar_8=false ;
}
agregar7(){
  this.agregar_7=!this.agregar_7;
  this.agregar_1=false ;
  this.agregar_2=false ;
  this.agregar_3=false ;
  this.agregar_4=false ;
  this.agregar_5=false ;
  this.agregar_6=false ;
  this.agregar_8=false ;
}
agregar8(){
  this.agregar_8=!this.agregar_8;
  this.agregar_1=false ;
  this.agregar_2=false ;
  this.agregar_3=false ;
  this.agregar_4=false ;
  this.agregar_5=false ;
  this.agregar_6=false ;
  this.agregar_7=false ;
}

}
