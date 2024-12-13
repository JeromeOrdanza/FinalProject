import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  instructorInfo = {
    name: 'Erna-Kristi Martinez',
    email: '20215343@s.ubaguio.edu',
    school: 'University of Baguio',
    courses: ['Appdev1']
  };

  onSubmit(contactForm: any): void {
    console.log('Form submitted:', contactForm.value);
   
  }
}
