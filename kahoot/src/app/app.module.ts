import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PainelGestorComponent } from './painel-gestor/painel-gestor.component';
import { LoginComponent } from './login/login.component';
import { CursoComponent } from './curso/curso.component';
import { RankingComponent } from './ranking/ranking.component';
import { CriarCursoComponent } from './criar-curso/criar-curso.component';
import { MenuComponent } from './components/menu/menu.component';
import { UpbarComponent } from './components/upbar/upbar.component';
import { MenuService } from './components/menu/menu.service';
import { PainelAlunoComponent } from './painel-aluno/painel-aluno.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    PainelGestorComponent,
    PainelAlunoComponent,
    LoginComponent,
    CursoComponent,
    RankingComponent,
    CriarCursoComponent,
    MenuComponent,
    UpbarComponent,
    PainelAlunoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
