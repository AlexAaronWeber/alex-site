import { Component, OnInit } from '@angular/core';
import { ActiveNavService } from '../active-nav.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  navItem: any = this.service.navItem;
  navItem1: any = this.service.navItem1;
  navItem2: any = this.service.navItem2;
  navItem3: any = this.service.navItem3;
  navItem4: any = this.service.navItem4;
  // isActive: boolean;
  constructor(private service: ActiveNavService) {}

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
