import { Routes } from '@angular/router';
import { ClassRecordComponent } from './class-record/class-record.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RegistrationComponent } from './registration/registration.component';
import { ViewUserProfileComponent } from './view-user-profile/view-user-profile.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { ConsultationComponent } from './consultation/consultation.component';

export const routes: Routes = [
  { path: 'class-record', component: ClassRecordComponent },
  { path: 'navigation', component: NavigationComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'view-user-profile', component:  ViewUserProfileComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'consultation', component: ConsultationComponent},

];
