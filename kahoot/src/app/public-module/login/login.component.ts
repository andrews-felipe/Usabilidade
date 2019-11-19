import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  sigup_flag : boolean
  login_flag : boolean

  constructor(private router: Router) { }

 
  ngOnInit() {
  }

  login(){
    this.router.navigate(['teacher/dashboard'])
  }

}
