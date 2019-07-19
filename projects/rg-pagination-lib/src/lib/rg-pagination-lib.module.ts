import { NgModule } from '@angular/core';
import { RgPaginationLibComponent } from './rg-pagination-lib.component';
import { PaginationComponent } from './pagination/pagination.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [RgPaginationLibComponent, PaginationComponent],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [RgPaginationLibComponent, PaginationComponent]
})
export class RgPaginationLibModule { }
