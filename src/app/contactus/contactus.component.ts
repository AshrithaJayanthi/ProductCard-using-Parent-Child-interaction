import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private dsObj:DataService) { }

  ngOnInit(): void {
    console.log(this.dsObj.getFragranceData)
  }

}
