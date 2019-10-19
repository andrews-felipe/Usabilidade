import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-painel-gestor',
  templateUrl: './painel-gestor.component.html',
  styleUrls: ['./painel-gestor.component.css']
})
export class PainelGestorComponent implements OnInit {

  constructor(private router: Router) { }

  LogOn() {
    this.router.navigate(['painel-gestor']);
  }
  ngOnInit() {
  }

}
