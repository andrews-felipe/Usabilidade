import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherModule as TeacherModuleView } from './teacher-module';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from '../components/menu/menu.component';
import { UpbarComponent } from '../components/upbar/upbar.component';
import { PainelAlunoComponent } from '../studant-module/painel-aluno/painel-aluno.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { CriarCursoComponent } from './course/criar-curso/criar-curso.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RankingComponent } from './ranking/ranking.component';
import { CursoComponent } from './course/course-detail/curso.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: TeacherModuleView,
    children: [
      
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      
      { path: 'dashboard', component: DashboardComponent },

      { path: 'curso', component: CursoComponent },

      { path: 'listagem-cursos', component: CourseListComponent },

    ]
  }
]

@NgModule({
  declarations: [
    TeacherModuleView,
    MenuComponent,
    UpbarComponent,
    PainelAlunoComponent,
    CourseListComponent,
    CriarCursoComponent,
    DashboardComponent,
    RankingComponent,
    CursoComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
  ],
  exports: [RouterModule]
})
export class TeacherModule { }
