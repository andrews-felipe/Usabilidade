import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu/menu.service';

@Component({
  selector: 'app-upbar',
  templateUrl: './upbar.component.html',
  styleUrls: []
})
export class UpbarComponent implements OnInit {

  flag_create: boolean
  text = ""


  constructor(private service: MenuService) { }

  ngOnInit() {
  }

  valuechange() {
    this.service.changeListCourse(this.text)

  }

  setModal() {
    this.flag_create = !this.flag_create
  }


}
