import { Component, OnInit } from '@angular/core';
import {TestingService} from '../testing.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
n:number=100
  constructor(private tsObj:TestingService) { }

  ngOnInit(): void {
    this.tsObj.setData(this.n)
  }

}
