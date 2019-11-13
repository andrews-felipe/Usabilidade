import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-painel-gestor',
  templateUrl: './painel-gestor.component.html'
})
export class PainelGestorComponent implements OnInit {

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
      title: 'Micro Front-ends com Vue.js',
      questions: 4
    }

  ]


  constructor() { }

  ngOnInit() {
  }

}
