import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import IArticle from '../../interfaces/IArticle';

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

  constructor(private route: ActivatedRoute,
    private blogService: BlogService) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        const id = params['id'];

        if (id) {
          this.blogService.getArticleById(id)
            .subscribe(article => this.article = article);
        }
      });
  }

}
