import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OneCard } from '../onecard/onecard';
import { NewsService } from '../../providers/news.service';


@Component({
  selector: 'page-form',
  templateUrl: 'form.html'
})
export class FormPage {

  public  newPost = {
    title: '',
    img: '',
    description: '',
    category:''
  }




  public postInserted : any = []

  constructor(public navCtrl: NavController,public newsService: NewsService) {

  }


  public addNews(){
    this.newsService.addNews(this.newPost).then(data => {
      this.postInserted = data;
      console.log("postInserted:", this.postInserted);

    });


  }

}
