import { Component, OnInit } from '@angular/core';
import { Category } from './models/categoria.models';
import { NewCategory } from './models/new-category-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
// export class CategoryComponent {
  visibleNewCategoryPopup: boolean = false;

  categories: Array<Category> = [
    // {
    //   id: 1,
    //   name: 'Rent',
    //   icon: 'rent',
    //   type: 'expense',
    //   color: 'gray',
    //   total: '500',
    // },
    {
      id: 1,
      name: 'Rent',
      icon: 'bi bi-house-door',
      type: 'expense',
      color: 'gray',
      total: '500',
    },
    {
      id: 2,
      name: 'Groceries',
      icon: 'bi bi-cart4',
      type: 'expense',
      color: 'dark-sky-blue',
      total: '100',
    },
    {
      id: 3,
      name: 'Transport',
      icon: 'bi bi-car-front-fill',
      type: 'expense',
      color: 'dark-orange',
      total: '150',
    },
    {
      id: 4,
      name: 'Health',
      icon: 'bi bi-plus-lg',
      type: 'income',
      color: 'red',
      total: '200',
    },
    {
      id: 5,
      name: 'Gifts',
      icon: 'bi bi-gift',
      type: 'income',
      color: 'purple',
      total: '50',
    },
    {
      id: 6,
      name: 'Education',
      icon: 'bi bi-journal-richtext',
      type: 'expense',
      color: 'blue',
      total: '250',
    },
  ];

  addCategory(): void {
    this.visibleNewCategoryPopup = true;
  }

  closePopup(): void {
    this.visibleNewCategoryPopup = false;
  }

  createCategory(categorie: NewCategory): void {
    this.categories.push({ ...categorie, id: this.categories.length + 1 });

    // console.error('Mostrando Categorias');
    // console.log(this.categories);
    
  }
}
