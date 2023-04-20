import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactForm!: FormGroup;
  constructor(private snackBar: MatSnackBar) {}
  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      organization: new FormControl(null, Validators.required),
      telephone: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      message: new FormControl(null, Validators.required),
      agree: new FormControl(false, Validators.requiredTrue),
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Contact information', this.contactForm.value);
      // Send form data to your server here
      this.snackBar.open('Success! Form submitted.', 'Close', {
        duration: 7000,
        panelClass: ['success-snackbar'],
      });
      this.contactForm.reset();
    } else {
      console.log('Form is not valid');
      this.snackBar.open(
        'Inputs Invalid ! Please check your inputs.',
        'Close',
        {
          duration: 7000,
          panelClass: ['invalid-form-snackbar'],
        }
      );
    }
  }
}
