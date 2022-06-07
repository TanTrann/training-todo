import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
// Icon
import { MatIconModule } from '@angular/material/icon';
// input
import { MatInputModule } from '@angular/material/input';
// btn
import { MatButtonModule } from '@angular/material/button';

import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, DashboardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    MatIconModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
