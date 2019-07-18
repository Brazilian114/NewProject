import { Component , OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams ,PopoverController,ViewController} from 'ionic-angular';
import { MainPage } from '../main/main';
import { SecondPage } from '../second/second';
/**
 * Generated class for the PopupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popup4',
  templateUrl: 'popup4.html',
})
export class Popup4Page {
  public userDetails : any;
  public userDetails2 : any;
  item ={id:'',title:'',completed:''};
    passedId = null;
    constructor(public navCtrl: NavController, public navParams: NavParams,private popover:PopoverController,private ViewController:ViewController) {
     /* const data = JSON.parse(localStorage.getItem('queueData'));
                   this.userDetails = data.queueData; 
      const data2 = JSON.parse(localStorage.getItem('userData'));
    this.userDetails2 = data2.userData;  */}


  ionViewDidLoad() {
    console.log('ionViewDidLoad PopupPage');
    let data = this.navParams.data;
    this.item = data;
  }

  dismiss() {
    this.ViewController.dismiss();
  }
  converTime(time) {
    let a = new Date(time * 1000);
    return a;
  }
}
