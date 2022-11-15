import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { ApiServiceService } from '../services/api-service.service';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface exchangeRatesInterface{
symbol: string,
priceChange: string,
priceChangePercent: string,
weightedAvgPrice:string,
prevClosePrice: string,
lastPrice: string,
lastQty:string,
bidPrice: string,
bidQty:string,
askPrice: string,
askQty: string,
openPrice: string,
highPrice: string,
lowPrice: string,
volume: string,
quoteVolume: string,
openTime: number,
closeTime: number,
firstId: number,
lastId: number,
count: number
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  saleData = [
    { name: "Mobiles", value: 105000 },
    { name: "Laptop", value: 55000 },
    { name: "AC", value: 15000 },
    { name: "Headset", value: 150000 },
    { name: "Fridge", value: 20000 }
  ];


  dateControl = new FormControl('');

  displayedColumns: string[] = 
  ['symbol', 'priceChange', 'priceChangePercent', 'weightedAvgPrice','prevClosePrice',
   'lastPrice', 'lastQty','bidPrice'];

   dataSource = new MatTableDataSource();
  exchangeArray :exchangeRatesInterface [] = []

  // MatPaginator Inputs
  length! : number;
  pageSize = environment.page_size;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent?: PageEvent;

  constructor( private exchange:ApiServiceService) { }

  ngOnInit(): void {
    this.exchange.getExchangerates().subscribe((res) =>{

      this.dataSource.data = res
      this.length = this.dataSource.data.length
      // console.log(this.length);
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
