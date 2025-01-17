import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherModule as TeacherModuleView } from './teacher-module';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from '../components/menu/menu.component';
import { UpbarComponent } from '../components/upbar/upbar.component';
import { PainelAlunoComponent } from '../studant-module/painel-aluno/painel-aluno.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { CreateCourseComponent } from './course/course-create/create-course.component';
import { DashboardComponent as Dash } from './dashboard/dashboard.component';
import { RankingComponent } from './ranking/ranking.component';
import { CursoComponent } from './course/course-detail/curso.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../components/footer/footer.component';
import { DashboardComponent } from '../studant-module/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: TeacherModuleView,
    children: [
      
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      
      { path: 'dashboard', component: DashboardComponent },

      { path: 'curso', component: CursoComponent },

      { path: 'listagem-cursos', component: CourseListComponent },

      { path: 'ranking', component: RankingComponent },

      { path: 'aluno', component: PainelAlunoComponent }

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
    CreateCourseComponent,
    DashboardComponent,
    RankingComponent,
    CursoComponent,
    Dash,
    FooterComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
  ],
  exports: [RouterModule]
})
export class TeacherModule { }
