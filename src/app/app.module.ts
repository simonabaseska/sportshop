import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShortsComponent } from './shorts/shorts.component';
import { SportsbrasComponent } from './sportsbras/sportsbras.component';
import { HoodiesComponent } from './hoodies/hoodies.component';
import { LeggingsComponent } from './leggings/leggings.component';
   

@NgModule({
  declarations: [
    AppComponent,
    ShortsComponent,
    SportsbrasComponent,
    HoodiesComponent,
    LeggingsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
