import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PricesService } from '../../services/prices.service';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css']
})
export class ResultsTableComponent implements OnInit, OnDestroy {

  constructor( private pricesService: PricesService ) {}

  public records: any[] = [];
  public star = [];
  private subsList: Subscription[] = [];

  ngOnInit(): void {
      this.getPrices();
  }

  algp(id): void
    {
     this.star.push(id);
     console.log(this.star);
    }

  ngOnDestroy(): void {
    this.subsList.forEach(sub => sub.unsubscribe);
  }

  getPrices(): void {
    setInterval(() => {
      this.subsList.push( this.pricesService.getPrice().subscribe(resp => {
        this.records = resp.records;
      }));
      }, 1500);
  }
}
