import { Component } from '@angular/core';
import {  IonicPage, NavController, NavParams , ModalController,LoadingController, AlertController, ToastController, InfiniteScroll  } from 'ionic-angular';
import 'rxjs/add/operator/map'; 
import { Http,Headers, RequestOptions } from '@angular/http';
import { HomePage } from '../home/home';
/**
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {

  public items:any =[] ; 
  maximumPages = 4;
  page = 1;
  posts: any;
  devices: any;
  number1:string="";
  number2:string="";
  number3:string="";
  private skills:string[];
  private name:string;
  private age:number;
  private email:string;
  //data: any[] = Array();
  item ={a:'',b:'',ph:''};
  constructor(public navCtrl: NavController, public navParams: NavParams, public http : Http, public Modal: ModalController) {
    //this.loadMoreNews();
    this.posts = {
      number1 :'',
      number2:'',
      number3:''
    
    }
    
  }
  
  ionViewWillEnter()
  {
    this.initializeItems();


     {
     //this.load2();
     
    
      
   }
     
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondPage');
    let data = this.navParams.data
    console.log(data);
    this.item = data;
    this.skills=["Football","Piano","Guitar","Drums"];
    this.name = "Koravit Mahamad";
    this.age = 22;
    this.email = "Koravit114@gmail.com"
  }

  sendBack(){
   console.log(this.posts);
   this.navCtrl.push(HomePage,
    { posts:{
      number1: this.posts.number1,
      number2: this.posts.number2,
      number3: this.posts.number3
    }

    });
   
  }

  addSkill(skill){
    this.skills.unshift(skill)
    return false;
  }
  removeSkill(skill){
    this.skills.forEach((element, idex) => {
      if (element == skill){
        this.skills.splice(idex, 1);
      }
      
    });
  }

  /*load2()
  {
     this.http.get('https://jsonplaceholder.typicode.com/todos')
     .map(res => res.json())
     .subscribe(data => 
     {
       console.log(data);
        this.items = data;    
           
     });
  }
*/
/*
  load2()
  {
     this.http.get('https://newsapi.org/v2/everything?q=bitcoin&from=2019-06-11&sortBy=publishedAt&apiKey=42b803126c7e45bc9798305b2e72a1f7')
     .map(res => res.json())
     .subscribe(data => 
     {
       console.log(data);
        this.items = data;    
           
     });
  }

*/
  initializeItems() {
 
    this.items =this.posts;
   }

   async content(item){
    let modal = this.Modal.create("Popup4Page",item);
    console.log(item);
    localStorage.setItem('record',JSON.stringify(item))
    //localStorage.setItem('userPostData',JSON.stringify(this.resposeData))
    // this.navCtrl.push(modal);
    modal.present();
  }
/*
  loadMoreNews(infiniteScroll?){
    
    
    this.http.get('https://newsapi.org/v2/everything?q=bitcoin&from=2019-06-11&sortBy=publishedAt&apiKey=42b803126c7e45bc9798305b2e72a1f7')
    
    .subscribe(data => 
    {
      console.log(data);
      this.items = this.items.concat(['article']);    
      if(infiniteScroll){
        infiniteScroll.complete();
      }
      
    });
    
  }

  loadMore(infiniteScroll){
    this.page++;
    this.loadMoreNews(infiniteScroll)

    if(this.page == this.maximumPages){
      infiniteScroll.enable(false);
    }
  }
*/
    checknum(){
      var a;
      var b;
      a = parseInt(this.number1);
      b = parseInt(this.number2);
      if(a % 2 == 0){
        alert("เลขคู่")
      }
      else{
        alert("เลขคี่")
      }
     
    }

    checkGrade(){

      var a;
      var b;
      var c;
      var d;
      var sum;
      var sum2;
      a = parseInt(this.number1);
      b = parseInt(this.number2);
      c = parseInt(this.number3);

      d = 5;


  if( a > 10){
    sum = a + c + d ;
  }else if ( b > 10){
    sum = b + d;
  }else if ( c > 10){
    sum = c + d ;
  }else{

  }
alert(d + "+" + a + "+" + b + "+" + c + "=" +sum);
      /*
      sum = a + b +c ;
      if(sum < 100 ){
        alert(sum);
      }else{
        sum2 = sum + 50;
        
        alert(sum2);
      }
      */


      /*if( a > 45 ){
         
        alert("Grade F");

      }else if( a < 50 ){
         
        alert("Grade F");

      }else if( a >= 46 || a <= 59){

        alert("Grade D");

      }else if( a >= 60 || a <= 69){

        alert("Grade C");

      }else if( a >= 70 || a <= 79){

        alert("Grade B");

      }else if( a >= 80 || a <= 100){

        alert("Grade A");

      }else{
      alert("Error")
      }*/
    }
}
