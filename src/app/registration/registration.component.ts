import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  register() {
    // Logic to handle registration
    console.log('Registered:', { name: this.name, email: this.email, password: this.password });
  }
}