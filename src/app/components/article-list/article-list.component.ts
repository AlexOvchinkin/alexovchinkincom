import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import IArticle from '../../interfaces/IArticle';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  articles: IArticle[] = [];

  constructor(private blogService: BlogService, private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.menuTogglerStream.next(true);

    this.blogService.getArticles()
      .subscribe(data => this.articles = data);
  }

}
