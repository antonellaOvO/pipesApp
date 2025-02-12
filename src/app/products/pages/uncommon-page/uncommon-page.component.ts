import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
  //i18n Select
  public name: string = 'Antonella';
  public gender: 'male' | 'female' = 'female';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    this.name = 'Pedro';
    this.gender = 'male';
  }

  //i18nPlural Pipe

  public clients: string[] = [
    'Maria',
    'Pedro',
    'Fernando',
    'Hernando',
    'Eduardo',
    'Melissa',
    'Natalia',
  ];

  public clientsMap = {
    '=0': ' no tenemos ningún cliente esperando.',
    '=1': ' tenemos un cliente esperando.',
    '=2': ' tenemos 2 clientes esperando.',
    other: ' tenemos # clientes esperando.',
  };

  deleteClient(): void {
    this.clients.shift();
  }

  //KeyValue Pipe

  public person = {
    name: 'Fernando',
    age: 36,
    address: 'Ottawa, Canada',
  };
}
