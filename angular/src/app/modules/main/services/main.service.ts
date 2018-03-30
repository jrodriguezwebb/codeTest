import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MainService {
  private url: string;
  constructor(
    private _http: Http
  ) { 
    this.url = 'https://api-v2.mylp.info/pitches/';
  }

  getList(pitchId, starts, ends){
      return this.
              _http
                  .get(this.url+pitchId+'/slots?filter[starts]='+starts+'&filter[ends]='+ends)
                  .map(res => res.json());
  }

}
