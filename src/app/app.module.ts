import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { HomeComponent } from './component/home/home.component';
import { ToastrModule } from 'ngx-toastr';
import { BingoComponent } from './component/bingo/bingo.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BingoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    ToastrModule.forRoot(
      {
        timeOut: 3000,
        positionClass: 'toast-bottom-right',
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
