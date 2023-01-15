import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTransactionComponent } from './lista-transaction.component';

describe('ListaTransactionComponent', () => {
  let component: ListaTransactionComponent;
  let fixture: ComponentFixture<ListaTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTransactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
