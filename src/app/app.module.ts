import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { OperacionesComponent } from './operaciones/operaciones.component';
import { FechaComponent } from './fecha/fecha.component';
import { FormsModule } from '@angular/forms';

// Harry y sus cosas turbias...con el gran oscar... :

import localePy from '@angular/common/locales/es-PY'
import { registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
registerLocaleData(localePy, 'es');


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    OperacionesComponent,
    FechaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
