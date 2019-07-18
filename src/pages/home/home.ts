import { Component,ViewChild} from '@angular/core';
import { NavController,ToastController,AlertController,ViewController,LoadingController,NavParams} from 'ionic-angular';

import { RegisterPage } from '../register/register';
import { MainPage } from '../main/main';

import { LoginProvider } from '../../providers/login/login';
import { Storage } from '@ionic/storage';


//import{ AngularFireDatabase} from 'angularfire2/database';

//import 'rxjs/add/operator/map'; 
import { Http } from '@angular/http';
import { SecondPage } from '../second/second';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage { 

    brazilian = [
      {a:'koravit',b:'mahamad',ph:'084456987'},
      {a:'somchai',b:'thongdee',ph:'0664997885'},
      {a:'somchit',b:'thongmon',ph:'033669844'},
      {a:'sombat',b:'thongpoo',ph:'0889636985'},
      {a:'chitlom',b:'thongshit!',ph:'027778855'},

    ] 
    posts:{
      number1:string,
      number2:string,
      number3:string,
    }
  resposeData : any;
  userData = {"username":"","password":""};
  number1:string
  number2:string;
  number3:string;
  public items : any = [];
  

 constructor(private loading : LoadingController,private viewCtrl: ViewController, public http:Http ,public navParams: NavParams,public navCtrl: NavController,private toastCtrl:ToastController,
  private alert:AlertController,private auth:LoginProvider )  {
    const data = JSON.parse(localStorage.getItem('deviceNum'));
    //this.items = data.deviceNum; 
    
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.posts = this.navParams.get("posts");
    console.log(this.posts);
    
  
  }

 showData(item){
   //alert(item.a + item.b);
   this.navCtrl.push("SecondPage",item);
   //console.log(item);
 }
  
  loginn(position: string){
    if(this.userData.username && this.userData.password){
          this.auth.postData(this.userData, "login").then((result) =>{
          this.resposeData = result;
          console.log(this.resposeData);
          
          if(this.resposeData.userData){
            localStorage.setItem('userData',JSON.stringify(this.resposeData))
            this.navCtrl.push(MainPage);

            const loader = this.loading.create({
              content: "Please wait...",
              duration: 1000
            });
            loader.present();
          

          }else{

            
            
            const toast = this.toastCtrl.create({
              message: 'อีเมล์ หรือ รหัสผ่าน ไม่ถูกต้อง',
              duration: 1900,
              position: position,
              cssClass: "color"
            });
            toast.present();

          }
        
          }, (err) =>{
            
      });
    }      
        }


  click(){
     this.navCtrl.push(RegisterPage);


  }
  main(){
    this.navCtrl.setRoot(MainPage);


 }

}






























 

 




