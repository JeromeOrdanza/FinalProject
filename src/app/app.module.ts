import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { ViewUserProfileComponent } from './view-user-profile/view-user-profile.component';
import { ClassRecordComponent } from './class-record/class-record.component';
import { EditStudentRecordComponent } from './edit-student-record/edit-student-record.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    ViewUserProfileComponent,
    ClassRecordComponent,
    EditStudentRecordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule // Already includes RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
