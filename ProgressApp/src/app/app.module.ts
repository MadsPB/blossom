import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ThumbnailPickerComponent } from './components/thumbnail-picker/thumbnail-picker.component';
import { ThumbnailPickerItemComponent } from './components/thumbnail-picker-item/thumbnail-picker-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateProjectComponent,
    NavbarComponent,
    ThumbnailPickerComponent,
    ThumbnailPickerItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
