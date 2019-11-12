import { Component } from '@angular/core';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  constructor(public service : MenuService) { }
}
