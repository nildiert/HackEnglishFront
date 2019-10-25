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
import { ProjectsService } from './projects.service';
import { SigninComponent } from './signin/signin.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


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
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ProjectsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
