import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  navItem: any;
  navItem1: any;
  navItem2: any;
  navItem3: any;
  navItem4: any;
  isActive: boolean;

  constructor() {}

  ngOnInit(): void {}

  onClick = (check) => {
    if (check == 1) {
      this.navItem = 'navItem1';
    } else if (check == 2) {
      this.navItem = 'navItem2';
    } else if (check == 3) {
      this.navItem = 'navItem3';
    } else if (check == 4) {
      this.navItem = 'navItem4';
    }
  };
}
