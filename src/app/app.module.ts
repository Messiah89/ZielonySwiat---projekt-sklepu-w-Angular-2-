import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OmnieComponent } from './omnie/omnie.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { MojeRealizacjeComponent } from './moje-realizacje/moje-realizacje.component';
import { JakDbacOSloikComponent } from './jak-dbac-osloik/jak-dbac-osloik.component';
import { ZlozZamowienieComponent } from './zloz-zamowienie/zloz-zamowienie.component';

@NgModule({
  declarations: [
    AppComponent,
    OmnieComponent,
    KontaktComponent,
    MojeRealizacjeComponent,
    JakDbacOSloikComponent,
    ZlozZamowienieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
