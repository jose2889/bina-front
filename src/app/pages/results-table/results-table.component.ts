import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PricesService } from '../../services/prices.service';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css']
})
export class ResultsTableComponent implements OnInit, OnDestroy {

  constructor( private pricesService: PricesService ) {
    this.config = {
      itemsPerPage: 3,
      currentPage: 1,
      totalItems: this.records.length
    };
  }

  public records: any[] = [];
  public star = [];
  private subsList: Subscription[] = [];
  public loading = true;
  public config: any;

  ngOnInit(): void {
    this.getPrices();
  }

  algp(id): void
    {
     this.star.push(id);
     console.log(this.star);
    }

  ngOnDestroy(): void {
    this.subsList.forEach(sub => sub.unsubscribe());
  }

  getPrices(): void {
    setInterval(() => {
      this.subsList.push( this.pricesService.getPrice().subscribe(resp => {
        this.loading = false;
        this.records = resp.records;
      }) );
      }, 500);
  }

  pageChanged(event): void {
    this.config.currentPage = event;
  }
}
