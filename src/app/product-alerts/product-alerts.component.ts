import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  // En entrée, on reçoit le product du parent :
  @Input() product;
  // En sortie on emet vers le parent un event
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}