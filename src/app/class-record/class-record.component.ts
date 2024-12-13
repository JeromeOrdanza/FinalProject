import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';




@Component({
  selector: 'app-class-record',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './class-record.component.html',
  styleUrls: ['./class-record.component.css'],
})





export class ClassRecordComponent {

  studentRecords = Array.from({ length: 50 }, (_, i) => ({
    id: ``,
    name: ``,
    activityType: ``,

  }));



  

  currentPage = 1;
  itemsPerPage = 10;
  totalPages = Math.ceil(this.studentRecords.length / this.itemsPerPage);

  get paginatedRecords() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.studentRecords.slice(startIndex, startIndex + this.itemsPerPage);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) this.currentPage = page;
  }


  showModal = false;
  selectedStudent: any = null;

  viewStudent(student: any) {
    this.selectedStudent = student;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }


  showEditModal = false;
  editStudent: any = {};

  openEditModal(student: any) {
    this.editStudent = { ...student }; 
    this.showEditModal = true;
  }

  closeEditModal() {
    this.showEditModal = false;
  }

  saveEdits() {
    const index = this.studentRecords.findIndex(
      (student) => student.id === this.editStudent.id
    );
    if (index !== -1) {
      this.studentRecords[index] = { ...this.editStudent }; 
    }
    this.showEditModal = false;
  }
  
}
