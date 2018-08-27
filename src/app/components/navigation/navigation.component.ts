import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, AfterViewInit {

  fragment: string = '';
  show: boolean = true;
  smallMenu: boolean = false;

  constructor(private route: ActivatedRoute, private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.menuTogglerStream
      .subscribe(toggle => {
        this.smallMenu = toggle;
      });

    this.profileService.menuTogglerStream
      .next(false);

    /* this.route.fragment
      .subscribe(fragment => {
        this.fragment = fragment;
        console.log(this.fragment);
      }); */
  }

  ngAfterViewInit(): void {

  }

  onLinkClick(): void {
    /* this.route.fragment
      .subscribe(fragment => {
        if(fragment) {
          document.querySelector('#' + fragment).scrollIntoView();
        }
      });*/
  }

  toggleMenu(): void {
    this.show = !this.show;
  }

}
