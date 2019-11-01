import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';
import { PeersComponent } from './peers/peers.component';
import { ProfileComponent } from './profile/profile.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { SigninComponent } from './signin/signin.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/projects',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'projects',
        component: ProjectsComponent
      },
      {
        path: 'projects/:id',
        component: ProjectDetailComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'concepts',
        component: ConceptsComponent
      },
      {
        path: 'peers',
        component: PeersComponent
      }
    ]
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
