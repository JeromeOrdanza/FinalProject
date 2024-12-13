import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassRecordComponent } from './class-record/class-record.component';
import { RegistrationComponent } from './registration/registration.component';
import { ViewUser ProfileComponent } from './view-user-profile/view-user-profile.component';
import { EditStudentRecordComponent } from './edit-student-record/edit-student-record.component';

const routes: Routes = [
    { path: 'class-record', component: ClassRecordComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'view-user-profile', component: ViewUser ProfileComponent },
    { path: 'edit-student-record', component: EditStudentRecordComponent },
    { path: '', redirectTo: '/class-record', pathMatch: 'full' } // Default route
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }