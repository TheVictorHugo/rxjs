import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BufferComponent } from './buffer/buffer.component';
import { ToArrayComponent } from './to-array/to-array.component';

@NgModule({
  declarations: [
    AppComponent,
    BufferComponent,
    ToArrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
