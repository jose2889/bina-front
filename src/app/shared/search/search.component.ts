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
  public data2$: Observable<any[]>;
  public keyword = 'symbol';

  constructor( private pricesService: PricesService ) { }

  ngOnInit(): void {
    this.buscarTodo();
  }


  buscar(event: any): void {
    this.data$ = this.pricesService.getPriceforASymbol(event.symbol);
  }

  buscarTodo(): void {
    this.data2$ = this.pricesService.getPriceForAllSymbol();
  }

}
