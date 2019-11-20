import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  sigup_flag: boolean
  login_flag: boolean

  username: ''
  password: ''

  readonly users = [
    { user: 'teacher', password: '123', route: 'teacher/dashboard' },
    { user: 'studant', password: '123', route: 'studant/dashboard' }
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    for (const user of this.users) {
      if (user['user'] === this.username) {
        this.router.navigate([user['route']])
      }
    }
  }

}
