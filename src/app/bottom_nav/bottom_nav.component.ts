import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-bottom_nav',
  templateUrl: './bottom_nav.component.html',
  styleUrls: ['./bottom_nav.component.css']
})
// tslint:disable-next-line:class-name
export class Bottom_navComponent implements OnInit {

  bnav_icon_1 = true;
  bnav_icon_2 = false;
  bnav_icon_3 = false;
  bnav_icon_4 = false;
  bnav_icon_5 = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  ActiveStyle($event) {
    console.log('js=' + $event.target.dataset.icon);
    switch ($event.target.dataset.icon) {

      case '1':
          this.bnav_icon_1 = true;
          this.bnav_icon_2 = false;
          this.bnav_icon_3 = false;
          this.bnav_icon_4 = false;
          this.bnav_icon_5 = false;
        break;

      case '2':
          this.bnav_icon_1 = false;
          this.bnav_icon_2 = true;
          this.bnav_icon_3 = false;
          this.bnav_icon_4 = false;
          this.bnav_icon_5 = false;
        break;

      case '3':
          this.bnav_icon_1 = false;
          this.bnav_icon_2 = false;
          this.bnav_icon_3 = true;
          this.bnav_icon_4 = false;
          this.bnav_icon_5 = false;
        break;

      case '4':
          this.bnav_icon_1 = false;
          this.bnav_icon_2 = false;
          this.bnav_icon_3 = false;
          this.bnav_icon_4 = true;
          this.bnav_icon_5 = false;
        break;

      case '5':
          this.bnav_icon_1 = false;
          this.bnav_icon_2 = false;
          this.bnav_icon_3 = false;
          this.bnav_icon_4 = false;
          this.bnav_icon_5 = true;
        break;

      default:
        break;
    }
  }

}
