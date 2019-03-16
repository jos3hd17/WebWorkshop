import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutesRoutingModule } from './routes/routes-routing.module';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { SegundarioComponent } from './componentes/segundario/segundario.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    SegundarioComponent
  ],
  imports: [
    BrowserModule,
    RoutesRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
