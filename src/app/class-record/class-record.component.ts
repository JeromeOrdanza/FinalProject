import { Component } from '@angular/core';

@Component({
  selector: 'app-class-record',
  templateUrl: './class-record.component.html',
  styleUrls: ['./class-record.component.css']
})
export class ClassRecordComponent {
  students = [
    { id: 1, name: 'Alice', activityType: 'Lecture' },
    { id: 2, name: 'Bob', activityType: 'Lab' },
    // Add more student records as needed
  ];

  viewDetails(student: any) {
    // Logic to view detailed student information
    console.log('Viewing details for:', student);
  }

  editStudent(student: any) {
    // Logic to edit student information
    console.log('Editing student:', student);
  }
}