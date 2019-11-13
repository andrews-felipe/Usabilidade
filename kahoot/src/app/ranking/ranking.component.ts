import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  constructor(private router: Router) { }

  LogOn() {
    this.router.navigate(['cadastro']);
  }
  ngOnInit() {
  }

}
