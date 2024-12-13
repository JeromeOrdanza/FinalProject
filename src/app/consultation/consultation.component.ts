import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-consultation',
  imports: [FormsModule,CommonModule, RouterModule],
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent {
  consultationSchedule = [
    { day: 'Monday', time: '10:00 AM - 12:00 PM' },
    { day: 'Wednesday', time: '2:00 PM - 4:00 PM' },
    { day: 'Friday', time: '1:00 PM - 3:00 PM' }
  ];

  onSetAppointment(): void {
    console.log('Appointment set.');
    // Handle the appointment logic (e.g., form submission or redirection)
  }
}
