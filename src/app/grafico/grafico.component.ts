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

  operaciones: Operacion[];
  ofertas: Oferta[];

  constructor(private bolsaService: BolsaService) { }

  ngOnInit() {
    this.bolsaService.getOperaciones("PAMP").subscribe(o => {
      console.log("Archivo recibido");
      this.operaciones = o;
      this.actualizar();
    });
    //this.bolsaService.getOfertas("PAMC40.1OC").subscribe(o => this.ofertas = o);
  }

  public actualizar() {
    this.lineChartLabels.splice(0);
    this.lineChartData[0].data.splice(0);
    for (let i = 0; i < this.operaciones.length; i++) {
      const element = this.operaciones[i];
      this.lineChartLabels.push(element.fecha);
      this.lineChartData[0].data.push(element.precio);
    }
    this.lineChartData = { ...this.lineChartData };
  }

  public boton2() {
    this.lineChartLabels.splice(0);
    this.lineChartData[0].data.splice(0);
    this.lineChartData = {...this.lineChartData};
  }

  public boton3(){
    this.lineChartLabels.push(2);
    this.lineChartData[0].data.push(3);
    this.lineChartData = {...this.lineChartData};
  }

  public log() {
    console.log(this.lineChartLabels);
    console.log(this.lineChartData);
  }

  public lineChartType: string = 'line';
  public lineChartLegend: boolean = false;
  public lineChartLabels: Array<any> = [];
  public lineChartData: Array<any> = [
    {
      data: [],
      label: 'PAMP',
      cubicInterpolationMode: 'monotone',
      fill: 'false'
    },
    {
      data: [],
      label: 'PAMC40.1OC Compra',
      cubicInterpolationMode: 'monotone',
      fill: 'false'
    },
    {
      data: [],
      label: 'PAMC40.1OC Venta',
      cubicInterpolationMode: 'monotone',
      fill: 'false'
    }
  ];
  public lineChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
      mode: 'index',
      intersect: false,
    },
  };
  public lineChartColors: Array<any> = [
    {
      borderColor: 'red',
      pointBackgroundColor: 'red',
    },
    {
      borderColor: 'green',
      pointBackgroundColor: 'green',
    },
    {
      borderColor: 'black',
      pointBackgroundColor: 'black',
    }
  ];
}
