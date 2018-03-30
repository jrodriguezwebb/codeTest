import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

//components
import { MainComponent } from './components/main/main.component';

//services
import { MainService } from './services/main.service';
import { FilterComponent } from './components/filter/filter.component';
import { DataTableComponent } from './components/data-table/data-table.component';

//pipes

import { DateDiffPipe } from './pipes/datediff.pipe';

//imports
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    NgxPaginationModule
  ],
  declarations: [
    MainComponent, 
    FilterComponent, 
    DataTableComponent,
    DateDiffPipe,
    ModalComponent   
  ],
  exports: [
    MainComponent
  ],
  providers : [
    MainService
  ]
})
export class MainModule { }
