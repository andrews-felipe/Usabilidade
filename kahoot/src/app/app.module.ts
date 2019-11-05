import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PainelGestorComponent } from './painel-gestor/painel-gestor.component';
import { LoginComponent } from './login/login.component';
import { CursoComponent } from './curso/curso.component';
import { RankingComponent } from './ranking/ranking.component';
import { CriarCursoComponent } from './criar-curso/criar-curso.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    PainelGestorComponent,
    LoginComponent,
    CursoComponent,
    RankingComponent,
    CriarCursoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
