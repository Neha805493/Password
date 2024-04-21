import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PasswordService } from '../password.service';
import { Password } from '../password';

@Component({
  selector: 'app-password-details',
  templateUrl: './password-details.component.html',
  styleUrls: ['./password-details.component.css']
})
export class PasswordDetailsComponent implements OnInit {
  password: Password | null = null;

  constructor(
    private route: ActivatedRoute,
    private passwordService: PasswordService
  ) { }

  ngOnInit(): void {
    this.getPassword();
  }

  getPassword(): void {
    const snapshot = this.route.snapshot;
    if (snapshot !== null) {
      const id = snapshot.paramMap.get('id');
      if (id !== null) {
        const parsedId = +id;
        if (!isNaN(parsedId)) {
          this.passwordService.getPassword(parsedId)
            .subscribe(password => this.password = password);
        } else {
          console.error('Invalid ID provided.');
        }
      } else {
        console.error('ID not provided.');
      }
    } else {
      console.error('Route snapshot is null.');
    }
  }
}
