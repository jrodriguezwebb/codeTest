import { Component, OnInit, Input } from '@angular/core';
import { Pitch } from '../../models/pitch.model';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  //this can be consulted with a service
  eurPounds: number = 1.13928743;
  @Input() pitches: Array<Pitch>;
  p: any;
  constructor() { }  

  ngOnInit() {
  }

}
