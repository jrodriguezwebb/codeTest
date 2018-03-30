import { TestBed, inject } from '@angular/core/testing';

import { MainService } from './main.service';
import { HttpModule } from '@angular/http';

describe('MainService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainService],
      imports: [
        HttpModule
      ]
    });
  });

  it('should be created', inject([MainService], (service: MainService) => {
    expect(service).toBeTruthy();
  }));
});
