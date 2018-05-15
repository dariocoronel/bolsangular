import { Component, OnInit } from '@angular/core';
import { BolsaService } from '../servicios/bolsa.service';
import { Operacion } from '../shared/operacion';
import { Oferta } from '../shared/oferta';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {

  operaciones : Operacion[];
  ofertas: Oferta[];

  constructor(private bolsaService: BolsaService) { }

  ngOnInit() {
    this.bolsaService.getOperaciones("PAMP").subscribe(o => this.operaciones = o);
    this.bolsaService.getOfertas("PAMC40.1OC").subscribe(o => this.ofertas = o);
  }

}
