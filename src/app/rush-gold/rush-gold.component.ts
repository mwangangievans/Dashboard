import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'app-rush-gold',
  templateUrl: './rush-gold.component.html',
  styleUrls: ['./rush-gold.component.css']
})
export class RushGoldComponent implements OnInit {

  dateControl = new FormControl('');

  searchControl = new FormControl('');

  campaignOne = new FormGroup({
    start: new FormControl(new Date(year, month, 13)),
    end: new FormControl(new Date(year, month, 16)),
  });
  campaignTwo = new FormGroup({
    start: new FormControl(new Date(year, month, 15)),
    end: new FormControl(new Date(year, month, 19)),
  });


  constructor() { }

  ngOnInit(): void {
  }

}
