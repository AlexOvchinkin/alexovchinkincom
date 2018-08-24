import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from '../../components/article/article.component';
import { ArticleListComponent } from '../../components/article-list/article-list.component';
import { ArticleListItemComponent } from '../../components/article-list-item/article-list-item.component';

const routes: Routes = [
  { path: '', component: ArticleListComponent },
  { path: ':id', component: ArticleComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ArticleComponent, ArticleListComponent, ArticleListItemComponent]
})
export class BlogModule { }
