import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PricesService } from '../../services/prices.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public records: any[] = [];
  public data$: Observable<any> = of([]);

  constructor( private pricesService: PricesService ) { }

  ngOnInit(): void {}

  buscar(termino: string): void {
    const termMayus = termino.toUpperCase();
    this.data$ = this.pricesService.getPriceforASymbol(termMayus);
      // .subscribe(resp => {
      //   const data = Object.entries(resp);
      //   this.records = data;
      // });
  }

}
