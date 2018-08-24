import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import IArticle from '../../interfaces/IArticle';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  articles: IArticle[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getArticles()
      .subscribe(data => this.articles = data);
  }

}
