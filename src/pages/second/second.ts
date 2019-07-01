import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  item ={a:'',b:'',ph:''};

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondPage');
    let data = this.navParams.data
    console.log(data);
    this.item = data;
  }

}
