import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, AfterViewInit {

  fragment: string = '';
  show: boolean = false;
  smallMenu: boolean = false;

  constructor(private navService: NavigationService) { }

  ngOnInit() {
    this.navService.menuTogglerStream
      .subscribe(toggle => {
        this.smallMenu = toggle;
      });

    this.navService.setSmallMenu(false);
  }

  ngAfterViewInit(): void {

  }

  onLinkClick(ev: Event, className): void {
    ev.preventDefault();
    document.querySelector(`.${className}`).scrollIntoView();
  }

  toggleMenu(): void {
    this.show = !this.show;
  }

}
