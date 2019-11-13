import { Component } from '@angular/core';
import { MenuService } from './menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {

  constructor(public service : MenuService, private route : Router) { }

  /**
   * Método direcionador de rotas
   * @param routerName nome da rota que foi clicada no menu
   */
  changeRoute(routerName : string){
    this.route.navigate([routerName])
  }

}

