import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/Home/home.component';
import { HeaderComponent } from './Components/Header/header.component';
import { StatsComponent } from './Pages/Stats/stats.component';
import { GradesComponent } from './Pages/Grades/grades.component';
import { SidebarComponent } from './Components/Sidebar/sidebar.component';
import { LoginComponent } from './Pages/Login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    StatsComponent,
    GradesComponent,
    SidebarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'stats', component: StatsComponent },
      { path: 'grades', component: GradesComponent },
      { path: 'login', component: LoginComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
