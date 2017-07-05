import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsService {
  constructor (public http: Http){

  }

  public deleteNews(id : string) : Promise<any> {
    return new Promise((resolve : Function, reject : Function) => {
      this.http.delete('https://servernews.herokuapp.com/news/' + id)
      .map(res => res.json())
      .subscribe(data => {
        resolve(data);
      }, (error) => {
        reject(error);
      });
    });
  }

  public addNews(newPost) : Promise<any> {
    return new Promise((resolve : Function, reject : Function) => {
      this.http.post('https://servernews.herokuapp.com/news/', newPost)
      .map(res => res.json())
      .subscribe(data => {
        resolve(data);
      }, (error) => {
        reject(error);
      });
    });
  }

  public loadOneNews(id : string) : Promise<any> { //Promise<any> indica il tipo di ritorno, è un template.
    return new Promise((resolve : Function, reject : Function) => {
      this.http.get('https://servernews.herokuapp.com/news/' + id)
      .map(res => res.json())
      .subscribe(data => {
        resolve(data);
      }, (error) => {
        reject(error);
      })
    })
  }

  public loadNews() : Promise<any> { //Promise<any> indica il tipo di ritorno, è un template.
    return new Promise((resolve : Function, reject : Function) => {
      this.http.get('https://servernews.herokuapp.com/news/')
      .map(res => res.json())
      .subscribe(data => {
        resolve(data);
      }, (error) => {
        reject(error);
      })
    })
  }





}
