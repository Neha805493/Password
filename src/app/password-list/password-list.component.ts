import { Component, OnInit } from '@angular/core';
import { PasswordService } from '../password.service'; // Adjust the import path
import { Password } from '../password'; // Adjust the import path
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-password-list',
  templateUrl: './password-list.component.html',
  styleUrls: ['./password-list.component.css']
})
export class PasswordListComponent implements OnInit {
  passwords: Password[] = [];

  constructor(private passwordService: PasswordService) { }
  

  ngOnInit(): void {
    this.getPasswords();
  }

  getPasswords(): void {
    this.passwordService.getPasswords()
      .subscribe(
        passwords => {
          this.passwords = passwords;
          console.log('Passwords:', this.passwords);
        },
        error => {
          console.error('Error fetching passwords:', error);
        }
      );
  }
}

