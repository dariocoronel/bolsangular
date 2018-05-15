import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DataTablesModule } from 'angular-datatables';
import { MatCardModule, MatProgressSpinnerModule } from '@angular/material';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { RestangularConfigFactory } from './shared/restConfig';

import { AppComponent } from './app.component';
import { TablaComponent } from './tabla/tabla.component';
import { GraficoComponent } from './grafico/grafico.component';

import { BolsaService } from './servicios/bolsa.service'

@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    GraficoComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule, MatProgressSpinnerModule,
    RestangularModule.forRoot(RestangularConfigFactory),
    DataTablesModule,
  ],
  providers: [
    BolsaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
