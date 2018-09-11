import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService,
    private router: Router, private navService: NavigationService) { }

  ngOnInit() {
    this.navService.setSmallMenu(true);

    this.formGroup = this.fb.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

    this.authService.logout();
  }

  get f(): any {
    return this.formGroup.controls;
  }

  formSubmit(): void {
    if (this.formGroup.invalid) return;

    this.authService.login(this.formGroup.value)
      .subscribe(
        result => {
          if (result) {
            this.router.navigate(['/admin']);
            return;
          }

          alert('Authentication error');
        },
        err => {
          switch(err.status) {
            case 401:
              alert('Invalid login or password');
              this.formGroup.reset();
              break;
            default:
              alert('Server error: 500');  
          }
        });
  }
}
