import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './public-module/cadastro/cadastro.component';
import { LoginComponent } from './public-module/login/login.component';


const routes: Routes = [

  { path: '', redirectTo: 'teacher', pathMatch: 'full' },

  { path: 'cadastro', component: CadastroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'teacher', loadChildren: './teacher-module/teacher.module#TeacherModule'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

