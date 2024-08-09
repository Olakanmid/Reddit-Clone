import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  authForm: FormGroup;
  isLogin = true;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.authForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  toggleAuthMode() {
    this.isLogin = !this.isLogin;
  }

  onSubmit() {
    if (this.authForm.valid) {
      if (this.isLogin) {
        this.authService.login(this.authForm.value.username, this.authForm.value.password).subscribe();
      } else {
        this.authService.signup(this.authForm.value.username, this.authForm.value.password).subscribe();
      }
    }
  }
}
