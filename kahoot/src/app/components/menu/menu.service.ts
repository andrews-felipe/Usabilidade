import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {


  public menu = [
    {
      name: "Dashboard",
      route: 'painel-gestor',
      class: "fa fa-pause",
      active: false
    },
    {
      name: "Cursos",
      route: 'painel-gestor',
      class: "fa fa-graduation-cap",
      active: false
    },
    {
      name: "Histórico",
      route: 'painel-gestor',
      class: "fa fa-history",
      active: false
    },
    {
      name: "Usuários",
      route: 'painel-gestor',
      class: "fa fa-users",
      active: false
    },
    {
      name: "Config",
      route: 'painel-gestor',
      class: "fa fa-cog",
      active: false
    }
  ]

  /**
   * Método que altera o status "active" do menu, a finalidade é deixar
   * ativo o item referente a página acessada
   * @param name nome do item do menu.
   */
  setStatusMenuItem(name: string) {
    for (const item in this.menu) {
      if (item[name] === name) {
        this.menu[name].active = true;
      }
    }
  }

  /**
   * Retorna o nome do item ativo para o upbar component mostrar o label
   */
  get activeMenu(){
    for (const item in this.menu) {
      if(item['active'])return item['name']
    }
  }
}
