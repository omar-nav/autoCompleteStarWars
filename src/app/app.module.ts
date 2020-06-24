import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    MatAutocompleteModule,
    MatInputModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [MatAutocompleteModule, MatInputModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
