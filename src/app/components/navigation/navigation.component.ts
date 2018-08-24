import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, AfterViewInit {

  fragment: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
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

}
