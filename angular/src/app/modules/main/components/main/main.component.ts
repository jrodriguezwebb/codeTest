import { Component, OnInit } from '@angular/core';

import { MainService } from '../../services/main.service';
import { Pitch } from '../../models/pitch.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public pitches: Array<Pitch>;
  public error: string;

  constructor(
    private mainService: MainService
  ) { }  

  ngOnInit(): void {}

  list(filterOptions){
    this.mainService.getList(filterOptions.pitchId,filterOptions.starts,filterOptions.ends).subscribe(
      response => {
        //console.log(response);
        this.pitches = response.data;   
        //console.log(this.pitches);   
      },
      error => {
        console.log(error);
        if(error.status == 400 || error.status == 404){
          const er = JSON.parse(error._body);
          this.error = er.errors[0].title;
          $('#errorModal').modal('show');
          //alert(er.errors[0].title);
        }
      }
    );
  }
}
