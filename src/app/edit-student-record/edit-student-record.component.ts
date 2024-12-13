import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-student-record',
  templateUrl: './edit-student-record.component.html',
  styleUrls: ['./edit-student-record.component.css']
})
export class EditStudentRecordComponent {
  student = {
    id: 1,
    name: 'Alice',
    activityType: 'Lecture',
    additionalInfo: ''
  };

  saveChanges() {
    // Logic to save changes
    console.log('Changes saved for:', this.student);
  }
}