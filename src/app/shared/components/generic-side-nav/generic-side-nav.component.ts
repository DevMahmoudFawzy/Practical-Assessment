import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { NavigationService } from '../../services/generic/navigation.service';
import { GenericSideNavDirection } from './generic-side-nav-direction';

@Component({
  selector: 'app-generic-side-nav',
  templateUrl: './generic-side-nav.component.html',
  styleUrls: ['./generic-side-nav.component.scss']
})
export class GenericSideNavComponent implements OnInit {

  showSideNav: Observable<boolean> = new Observable<boolean>;

  @Input() duration: number = 0.25;
  @Input() navWidth: number = window.innerWidth;
  @Input() direction: string = GenericSideNavDirection.Left;
  @Input() backgroundColor: string = 'white';
  @Input() closeBtnColor: string = 'black';

  constructor(private navService: NavigationService) { }

  ngOnInit(): void {
    this.showSideNav = this.navService.getShowNav();
  }

  onSidebarClose() {
    this.navService.setShowNav(false);
  }

  getSideNavBarStyle(showNav: any) {
    let navBarStyle: any = {};

    navBarStyle.background = this.backgroundColor;
    navBarStyle.transition = this.direction + ' ' + this.duration + 's, visibility ' + this.duration + 's';
    navBarStyle.width = this.navWidth + 'px';
    navBarStyle[this.direction] = (showNav ? 0 : (this.navWidth * -1)) + 'px';

    return navBarStyle;
  }
}
