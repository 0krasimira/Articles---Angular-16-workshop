import { Component, OnInit } from '@angular/core';
import {ArticleData} from '../data/data'
import { Article } from '../models/article.model';
import { data } from '../data/seed';




@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
articles: Article[] | undefined;
constructor(){}
ngOnInit(){
  this.articles = new ArticleData().getData();
}
}