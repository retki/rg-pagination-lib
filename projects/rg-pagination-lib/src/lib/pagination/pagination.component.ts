import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rg-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  encapsulation: ViewEncapsulation.Native,
})
export class PaginationComponent implements OnInit {

  selectedItemsPerPage = 10;
  totalPages = 1;
  // input imported
  @Input() currentPage: number; // the current page
  @Input() count: number; // how many total items there are in all pages
  // @Input() perPage: number; // how many items we want to show per page
  @Input() pagesToShow: number; // how many pages between next/prev
  @Input() loading: boolean;
  @Input()  itemsPerPageList: number[];
  @Input() selectedItemPerPage: number; // check if content is being loaded
  // output imported
  @Output() goPrev = new EventEmitter<boolean>();
  @Output() goNext = new EventEmitter<boolean>();
  @Output() goPage = new EventEmitter<number>();
  @Output() goToItemPerPage = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
    this.selectedItemsPerPage = 10;
    this.currentPage = 1;
    this.pagesToShow = Math.ceil(this.count / this.selectedItemsPerPage);
  }
  pagecount(itemsPerPage) {
    this.selectedItemsPerPage = itemsPerPage;
  }
  onPrev(): void {
    this.currentPage--;
    this.goPrev.emit(true);
  }
  onNext(): void {
    if (this.currentPage === this.pagesToShow) {} else {
    this.currentPage++;
    this.goNext.emit(true);
    }
  }
  changeItemPerPage(event): any {
    this.pagesToShow = Math.ceil(this.count / event);
    this.currentPage = 1;
    this.goToItemPerPage.emit(event);
  }
}
