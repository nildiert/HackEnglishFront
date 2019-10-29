import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component';
import { ProjectsComponent } from './projects/projects.component';
import { PeersComponent } from './peers/peers.component';
import { ProfileComponent } from './profile/profile.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsService } from './services/projects/projects.service';
import { SigninComponent } from './signin/signin.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { TaskComponent } from './task/task.component';
import { TaskModalComponent } from './task-modal/task-modal.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { CheckerComponent } from './checker/checker.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LayoutComponent,
    ProjectsComponent,
    PeersComponent,
    ProfileComponent,
    ConceptsComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    SigninComponent,
    ProjectDetailComponent,
    TaskComponent,
    TaskModalComponent,
    CheckerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SweetAlert2Module,
    FontAwesomeModule
  ],
  exports: [
    TaskComponent
  ],
  providers: [
    ProjectsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
