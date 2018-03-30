import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { MainComponent } from './main.component';
import { FilterComponent } from '../filter/filter.component';
import { DataTableComponent } from '../data-table/data-table.component';
import { ModalComponent } from '../modal/modal.component';
import { DateDiffPipe } from '../../pipes/datediff.pipe';
import { MainService } from '../../services/main.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';


describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let mainService: MainService;
  const mockResponse = {
    data: []
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpModule,
        NgxPaginationModule
      ],
      declarations: [ 
        MainComponent,
        FilterComponent,
        DataTableComponent,
        ModalComponent,
        DateDiffPipe 
      ],
      providers : [
        MainService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();   
    
    mainService = new MainService(null);
    spyOn(mainService, 'getList').and.callFake(() => {
      return Observable.from([mockResponse]);
    });
  }));

  it('should create', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should call mainService', async(() => {
    expect(component.pitches).toBeTruthy();
  }));
  
});
