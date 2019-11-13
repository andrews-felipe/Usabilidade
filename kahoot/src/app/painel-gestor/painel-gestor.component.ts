import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../components/menu/menu.service';

@Component({
  selector: 'app-painel-gestor',
  templateUrl: './painel-gestor.component.html'
})
export class PainelGestorComponent implements OnInit {

  readonly title = "Dashboard"

  readonly itens = [
    {
      image: '../../assets/java.jpg',
      title: 'Orientação objetos com java',
      questions: 3
    },
    {
      image: '../../assets/nodeJs.png',
      title: 'Introdução ao Node.js',
      questions: 8
    },
    {
      image: '../../assets/vuejs.jpg',
      title: 'Micro front-ends com Vue.js',
      questions: 4
    },
    {
      image: '../../assets/adonis.jpg',
      title: 'Gerando API em node.js com Adonis',
      questions: 4
    },
    {
      image: '../../assets/kibernetes.jpg',
      title: 'Introdução a kubernetes',
      questions: 4
    }

  ]


  constructor(public service : MenuService) { }

  ngOnInit() {
    this.service.setStatusMenuItem(this.title)
  }

}
