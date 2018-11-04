import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/Home/home.component';
import { HeaderComponent } from './Components/Header/header.component';
import { StatsComponent } from './Pages/Stats/stats.component';
import { GradesComponent } from './Pages/Grades/grades.component';
import { SidebarComponent } from './Components/Sidebar/sidebar.component';
import { LoginComponent } from './Pages/Login/login.component';
import { RegisterComponent } from './Pages/Register/register.component';
import { BackendService } from 'src/Services/backend.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    StatsComponent,
    GradesComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'stats', component: StatsComponent },
      { path: 'grades', component: GradesComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ])
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule {}
