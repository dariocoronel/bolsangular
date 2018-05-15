import { Injectable } from '@angular/core';
import { RestangularModule, Restangular } from 'ngx-restangular';

import { Observable } from 'rxjs'
import { Operacion } from '../shared/operacion';
import { Oferta } from '../shared/oferta';

@Injectable({
  providedIn: 'root'
})
export class BolsaService {

  constructor(private restangular: Restangular) { }

  getOperaciones(nombre: string): Observable<Operacion[]> {
    return this.restangular.all('accion/' + nombre).getList();
  }

  getOfertas(nombre: string): Observable<Oferta[]> {
    return this.restangular.all('opcion/' + nombre).getList();
  }
}
