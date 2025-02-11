import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css',
})
export class BasicsPageComponent {
  public nameLower: string = 'antonella';
  public nameUpper: string = 'ANTONELLA';
  public fullName: string = 'aNtOnElLa';

  public customDate: Date = new Date();
}
