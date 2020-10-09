import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ActiveNavService {
  navItem: any;
  navItem1: any;
  navItem2: any;
  navItem3: any;
  navItem4: any;

  constructor() {}

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
