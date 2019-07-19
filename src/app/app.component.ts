import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public currentPage = 1;
  public count = 100;
  public selectedItemPerPage;
  public itemsPerPageList = [10, 20, 50, 100, 500];
  title = 'rg-pagination-app';
  goToItemPerPage(event) {
    this.selectedItemPerPage = event;
  }
  goToPrev() {
  }
  goToNext() {
  }

}
