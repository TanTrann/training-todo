import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';


import { FormsModule } from '@angular/forms';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

// icon | button
import { MatIconRegistry } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { User } from 'src/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private info: FormsModule,
    private router: Router
  ) {
    this.matIconRegistry.addSvgIcon(
      'unicorn',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/images/unicorn_icon.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'lock',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/images/lock.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'mail',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/images/mail.svg'
      )
    );
  }

  ngOnInit(): void {}
  loginForm: FormGroup | any;
  user = new User('', '');

  // khi submit thi false -> true
  submitted = false;

  userEmails = new FormGroup({
    primaryEmail: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
  });

  userPassword = new FormGroup({
    userPassword: new FormControl('', [
      Validators.required,
      Validators.pattern('.{6,}'),
    ]),
  });

  onSubmit() {
    if (!this.userEmails.valid) {
      return;
    }
    localStorage.setItem('userEmail', this.userEmails.value);
    this.router.navigate(['/dashboard']);
  }
}
