import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../../../components/menu/menu.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
})
export class CursoComponent implements OnInit {

  readonly title = "Cursos"

  question_name : string
  course
  view_flag : boolean
  iterator : number = 1
  
  content = [
    { status : true, title : 'Teorias da Linguagem', qntd : 10, createdAt : '13 Out 2019'},
    { status : true, title : 'Estrutura de dados', qntd : 10, createdAt : '13 Out 2019'},
    { status : true, title : 'Revisão de Orientação Objetos', qntd : 10, createdAt : '13 Out 2019'}
  ]

  questions = [
    
  ]

  constructor(private route: ActivatedRoute, private service : MenuService) { }

  ngOnInit() {
    this.service.setStatusMenuItem(this.title)

    this.route.queryParams.subscribe(params => {this.course = params});
    
  }

  add(){
    this.questions.push({id : this.iterator, name : this.question_name})
    this.iterator++;
    this.question_name = ""
  }
}