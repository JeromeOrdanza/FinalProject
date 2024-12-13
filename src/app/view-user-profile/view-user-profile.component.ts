import { Component } from '@angular/core';

@Component({
  selector: 'app-view-user-profile',
  templateUrl: './view-user-profile.component.html',
  styleUrls: ['./view-user-profile.component.css']
})
export class ViewUserProfileComponent {
  user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    courses: ['Course 1', 'Course 2', 'Course 3']
  };
}