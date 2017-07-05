import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular/index';
import {OneCard} from '../onecard/onecard';
import { NewsService } from '../../providers/news.service';



@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  public news: any = [];


  constructor(public navCtrl: NavController,public newsService: NewsService,public loadingCtrl: LoadingController) {
    this.newsService.loadNews().then(data => {
      this.news = data;

      console.log("this.news:", this.news);

    });
  }

  public oneNews(id: string){
    var param = {id: id}
    this.navCtrl.push(OneCard, param);
    console.log("this.id:", param);


  }




  ionViewWillEnter(){


    this.newsService.loadNews().then(data => {
      this.news = data;
      console.log("this.news:", this.news);

    });
  }



}
