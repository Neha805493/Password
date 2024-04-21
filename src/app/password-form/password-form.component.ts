import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordService } from '../password.service';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.css']
})
export class PasswordFormComponent implements OnInit {
  passwordForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private passwordService: PasswordService) {
    this.passwordForm = this.formBuilder.group({
      category: ['', Validators.required],
      app: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // You can keep ngOnInit() empty if there's no initialization logic needed.
  }

  onSubmit(): void {
    if (this.passwordForm.valid) {
      this.passwordService.addPassword(this.passwordForm.value)
        .subscribe(() => {
          // Handle success
          console.log('Password added successfully.');
          // Reset the form
          this.passwordForm.reset();
        });
    }
  }
}
