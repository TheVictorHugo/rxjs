import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BufferComponent } from './buffer/buffer.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { TheHeroEditorComponent } from './the-hero-editor/the-hero-editor.component';
import { FormsModule } from '@angular/forms';
import { HerosComponent } from './heros/heros.component';
import { OperatosRxjsComponent } from './operatos-rxjs/operatos-rxjs.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BufferComponent,
    ToArrayComponent,
    TheHeroEditorComponent,
    HerosComponent,
    OperatosRxjsComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
