import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatCardModule, MatProgressSpinnerModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { RestangularModule, Restangular } from 'ngx-restangular';
import { RestangularConfigFactory } from './shared/restConfig';
import { DataTablesModule } from 'angular-datatables';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AppComponent } from './app.component';
import { GraficoComponent } from './grafico/grafico.component';

import { BolsaService } from './servicios/bolsa.service';


@NgModule({
  declarations: [
    AppComponent,
    GraficoComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule, MatProgressSpinnerModule,
    FlexLayoutModule,
    RestangularModule.forRoot(RestangularConfigFactory),
    DataTablesModule,
    ChartsModule,
  ],
  providers: [
    BolsaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
