import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
photos:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.takePhoto(0);//photo library
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }
  /*
  TakeCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.photos.push(base64Image);
      this.photos.reverse();
    }, (err) => {
      console.log(err);
    });
  }*/

}
