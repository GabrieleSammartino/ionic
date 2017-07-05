import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { NewsService } from '../../providers/news.service';



@Component({
  selector: 'page-onecard',
  templateUrl: 'onecard.html'
})
export class OneCard {

  public news: any = [];
  public id: string = "";


  constructor(public navCtrl: NavController,public newsService: NewsService,public NavParams: NavParams) {
    this.id = NavParams.get("id");
    console.log("this.idOP:", this.id);
    this.newsService.loadOneNews(this.id).then(data => {
      this.news = data;

      console.log("this.news:", this.news);
    });
  }








}
