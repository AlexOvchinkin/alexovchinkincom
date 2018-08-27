import { Component, OnInit } from '@angular/core';
import IArticle from '../../interfaces/IArticle';
import { NavigationService } from '../../services/navigation.service';
import ITag from '../../interfaces/ITag';
import { APIService } from '../../services/api.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  articles: IArticle[] = [];
  tags: ITag[] = [];
  tagsModeOpen: boolean = false;
  currentTag: ITag = { tag: '' };

  constructor(private navService: NavigationService,
    private apiService: APIService) { }

  ngOnInit() {
    this.navService.menuTogglerStream.next(true);

    this.apiService.getArticles()
      .subscribe(data => this.articles = data);

    this.apiService.getTags()
      .subscribe(tags => this.tags = tags);
  }

  toggleDropdownTags(): void {
    this.tagsModeOpen = !this.tagsModeOpen;
  }

  tagClick(tag: ITag): void {
    this.toggleDropdownTags();
    this.currentTag = tag;
  }

  cleanCurrentTag(): void {
    this.currentTag = { tag: '' };
  }

  loadTags(): void {

  }

}
