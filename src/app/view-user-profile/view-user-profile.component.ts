import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  imports:[FormsModule, CommonModule, RouterModule],
  templateUrl: './view-user-profile.component.html',
  styleUrls: ['./view-user-profile.component.css']
})
export class ViewUserProfileComponent {
  userProfile = {
    name: 'Jerome Ordanza',
    email: '20215432@s.ubaguio.edu',
    enrolledCourses: ['Appdev1']
  };
}
