import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular/index';
import { NewsService } from '../../providers/news.service';
import {OneCard} from '../onecard/onecard';




@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
})
export class CardsPage {

  public news: any = [];
  public postDelete: any = [];
  public category : string;
  public newsCategory : any = [];
  public boolCat : boolean = false;

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

  public deleteNews(id: string){
    this.newsService.deleteNews(id).then(data => {
      this.postDelete = data;
      console.log("postDelete:",  this.postDelete);

    });
  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Caricamento in corso...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }


  public segmentChanged(category: string){
    this.newsCategory = [];
    console.log("this.news.lenght:", Object.keys(this.news).length)

    for(var i = 0; i < Object.keys(this.news).length;i++){

      console.log("categoryselected:", category);
      console.log("this.news[i].category:", this.news[i].category);
      if(this.news[i].category === category){
        this.newsCategory.push(this.news[i]);
      }


    }
    console.log("this.newsCategory:", this.newsCategory);
    this.boolCat = true;

  }




  ionViewWillEnter(){

    this.presentLoadingDefault()

    this.newsService.loadNews().then(data => {
      this.news = data;
      console.log("this.news:", this.news);

    });
  }



}
