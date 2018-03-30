import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  public pitchId: number;
  public starts: string;
  public ends: string;
  @Output() filterOptions = new EventEmitter();

  constructor() { }

  ngOnInit() {
    const configs = {
      format: 'yyyy-mm-dd',
      autoclose: true
    }
    $('#from').datepicker(configs).on('changeDate',(ev) => {
        this.ends = $("#from").val();
        this.search();
    });
    $('#to').datepicker(configs).on('changeDate',(ev) => {
        this.ends = $("#to").val();
        this.search();
    });

    this.pitchId = 32990;
    this.starts = '2018-01-09';
    $("#from").datepicker("update", this.starts);
    this.ends = '2018-01-15';
    $("#to").datepicker("update", this.ends);
    this.filterOptions.emit({
      pitchId: this.pitchId,
      starts: this.starts,
      ends: this.ends
    });
  }

  search(){
    this.filterOptions.emit({
      pitchId: this.pitchId,
      starts: this.starts,
      ends: this.ends
    });
  }

}
