import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from '../../services/api.service';
import IArticle from '../../interfaces/IArticle';
import { NavigationService } from '../../services/navigation.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  article: IArticle = {
    _id: 0,
    description: '',
    source: '',
    text: '',
    title: ''
  };

  constructor(private route: ActivatedRoute, private router: Router, 
    private apiService: APIService, private navService: NavigationService) { }

  ngOnInit() {
    this.navService.setSmallMenu(true);

    this.route.params
      .pipe(switchMap(this.apiService.getArticleById.bind(this.apiService)))
      .subscribe(
        article => this.article = article as IArticle,
        err => this.router.navigate(['blog'])
      );
  }

}
