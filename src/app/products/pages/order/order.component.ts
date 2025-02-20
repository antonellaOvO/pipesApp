import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [],
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public orderBy?: keyof Hero;
  public sortDirection: number = 1; // 1 = Ascendente, -1 = Descendente

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Linterna Verde',
      canFly: true,
      color: Color.green,
    },
  ];

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  /*changeOrder(value: keyof Hero): void {
    this.orderBy = value;
  }*/

  // Método para cambiar la propiedad de ordenación y alternar la dirección de orden
  changeOrder(value: keyof Hero): void {
    this.sortDirection = this.orderBy === value ? -this.sortDirection : 1;
    this.orderBy = value;
  }
}
