import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upbar',
  templateUrl: './upbar.component.html',
  styleUrls: []
})
export class UpbarComponent implements OnInit {

  title_page : string = "Cursos"

  constructor() { }

  ngOnInit() {
  }

}
