import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CVComponent } from './cv/cv.component';
import { ListeComponent } from './liste/liste.component';
import { ItemComponent } from './item/item.component';
import { DetailComponent } from './detail/detail.component';
import { SurvolDirDirective } from './survol-dir.directive';
import { ListeRecrutesComponent } from './liste-recrutes/liste-recrutes.component';
import { RecruterComponent } from './recruter/recruter.component';
@NgModule({
  declarations: [
    AppComponent,
    CVComponent,
    ListeComponent,
    ItemComponent,
    DetailComponent,
    SurvolDirDirective,
    ListeRecrutesComponent,
    RecruterComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
