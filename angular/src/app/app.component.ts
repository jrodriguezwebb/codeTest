import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(){
    const configs = {
      format: 'yyyy-mm-dd',
      autoclose: true
    }
    $('#from').datepicker(configs);
    $('#to').datepicker(configs);
  }
}
