import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/components/menu/menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  readonly title = "Dashboard"

  itens = [

    {
      image: './assets/nodeJs.png',
      title: 'Introdução ao Node.js',
      questions: 8,
      code: "cod. Q2587410"
    },
    {
      image: './assets/vuejs.jpg',
      title: 'Micro front-ends com Vue.js',
      questions: 4,
      code: "cod. Q2587410"
    },
    {
      image: './assets/adonis.jpg',
      title: 'Gerando API em node.js com Adonis',
      questions: 4,
      code: "cod. Q2587410"
    },
   
  ]

  constructor(private service: MenuService, private route: Router) { }

  ngOnInit() {
    this.service.setStatusMenuItem(this.title)
  }

  enterCourse(course) {
    this.route.navigate(['teacher/curso'], { queryParams: course })
  }

}
