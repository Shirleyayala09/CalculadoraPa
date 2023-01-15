import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { OperacionesComponent } from './operaciones/operaciones.component';
import { FechaComponent } from './fecha/fecha.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Harry y sus cosas turbias...con el gran oscar... :

import localePy from '@angular/common/locales/es-PY'
import { registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { TransactionsComponent } from './transactions/transactions.component';
import { MenuComponent } from './menu/menu.component';
import { NewCategoryComponent } from './new-category/new-category.component';
import { FilterComponent } from './filter/filter.component';
import { ListTransactionsComponent  } from './lista-transaction/lista-transaction.component';

registerLocaleData(localePy, 'es');


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    OperacionesComponent,
    FechaComponent,
    TransactionsComponent,
    MenuComponent,
    NewCategoryComponent,
    FilterComponent,
    ListTransactionsComponent ,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
