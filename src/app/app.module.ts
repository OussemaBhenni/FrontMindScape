import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Button2Component } from './components/profil-page/button2/button2.component';
import { Button3Component } from './components/profil-page/button3/button3.component';
import { Button4Component } from './components/profil-page/button4/button4.component';
import { ButtonComponent } from './components/profil-page/button/button.component';
import { ProfilPageComponent } from './components/profil-page/profil-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    Button2Component,
    Button3Component,
    Button4Component,
    ProfilPageComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
