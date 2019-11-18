import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../../../components/menu/menu.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit, AfterContentChecked {

  readonly title = "Cursos"

  eventFilter: any

   itens = [
    {
      image: '../../assets/java.jpg',
      title: 'Orientação objetos com java',
      questions: 3,
      code: "cod. Q2587410",
    },
    {
      image: '../../assets/nodeJs.png',
      title: 'Introdução ao Node.js',
      questions: 8,
      code: "cod. Q2587410"
    },
    {
      image: '../../assets/vuejs.jpg',
      title: 'Micro front-ends com Vue.js',
      questions: 4,
      code: "cod. Q2587410"
    },
    {
      image: '../../assets/adonis.jpg',
      title: 'Gerando API em node.js com Adonis',
      questions: 4,
      code: "cod. Q2587410"
    },
    {
      image: '../../assets/kibernetes.jpg',
      title: 'Introdução a kubernetes',
      questions: 4,
      code: "cod. Q2587410"
    }

  ]

  itens_to_filter = this.itens

  constructor(private service: MenuService, private route: Router) { }

  ngOnInit() {
    this.service.setStatusMenuItem(this.title)

    
  }
  ngAfterContentChecked() {
    this.eventFilter = this.service.eventSearch.asObservable()
    this.eventFilter.subscribe(item => {
      this.filterList(item.text)
    })
  }

  enterCourse(course) {
    this.route.navigate(['teacher/curso'], { queryParams: course })
  }

  filterList(text: string) {
    this.itens_to_filter = this.itens.filter(item => item.title.toLocaleUpperCase().includes(text.toLocaleUpperCase()))
  }

}

