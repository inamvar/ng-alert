import { Component, OnInit } from '@angular/core';
import { Alert } from 'selenium-webdriver';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor(private alertService: AlertService) { }

  ngOnInit() {
  }

  get alerts() {
    return this.alertService.alerts;
  }

}
