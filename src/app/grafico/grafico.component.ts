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
    //this.bolsaService.getOperaciones("PAMP").subscribe(o => this.operaciones = o);
    //this.bolsaService.getOfertas("PAMC40.1OC").subscribe(o => this.ofertas = o);
  }

  // lineChart
  public lineChartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40, 59, 80, 81, 56, 55, 40, 59, 80, 81, 56, 55, 40], label: 'Series A', cubicInterpolationMode: 'monotone', fill:'false' },
    { data: [28, 48, 40, 19, 86, 27, 90, 59, 80, 81, 56, 55, 40, 59, 80, 81, 56, 55, 40], label: 'Series B', cubicInterpolationMode: 'monotone', fill:'false' },
    { data: [18, 48, 77, 9, 100, 27, 40, 59, 80, 81, 56, 55, 40, 59, 80, 81, 56, 55, 40], label: 'Series C', cubicInterpolationMode: 'monotone', fill:'false' }
  ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'February', 'March', 'April', 'May', 'June', 'July', 'February', 'March', 'April', 'May', 'June', 'July', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false
  };
  public lineChartColors: Array<any> = [
    {
      borderColor: 'red',
      backgroundColor: 'white',
      pointBackgroundColor: 'red',
      pointHoverBackgroundColor: 'white',
    },
    {
      borderColor: 'green',
      backgroundColor: 'white',
      pointBackgroundColor: 'green',
      pointHoverBackgroundColor: 'white',
    },
    {
      borderColor: 'black',
      backgroundColor: 'white',
      pointBackgroundColor: 'black',
      pointHoverBackgroundColor: 'white',
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  public randomize(): void {
    let _lineChartData: Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
