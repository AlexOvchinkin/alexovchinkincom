import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import IArticle from '../../interfaces/IArticle';
import { ProfileService } from '../../services/profile.service';
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
    private blogService: BlogService, private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.menuTogglerStream.next(true);

    this.route.params
      .pipe(switchMap(this.blogService.getArticleById.bind(this.blogService)))
      .subscribe(
        article => this.article = article as IArticle,
        err => this.router.navigate(['blog'])
      );
  }

}
