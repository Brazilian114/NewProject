import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import { Http,Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";

/**
 * Generated class for the ChartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chart',
  templateUrl: 'chart.html',
})
export class ChartPage implements OnInit{
  @ViewChild("barCanvas") barCanvas: ElementRef;
  @ViewChild("lineCanvas") lineCanvas: ElementRef;

  private barChart: Chart;
  private doughnutChart: Chart;
  private lineChart: Chart;
  items:any = [];
  posts:any;
  var_x:any;
  var_y:any;
  sum:any;
  sum2:any;
  num1:any;
  noRecord:any;
  url:string;
 item3 = [];
 items2:any;
 currentPage = 1;
totalPage = 0;
totalData = 0;
perPageData = 0;
displayItems: any = [];
item_arr= ["one","two","three","four","five","six","seven","eight","nine","ten","eleven","tvele","threteen","fourteen","fifteen","sixteen","eighteen","nineteen","twenty"];

ngOnInit() {
   
  this.http.get('https://braziliandev.000webhostapp.com/DB123/retrieve-data.php')
  .map(res => res.json())
  .subscribe(data =>
    {
      
    this.items  = data;
    this.var_x = this.items.map(item=>item.booking_service_id);
    this.var_y = this.items.map(item=>item.service_price);
    //console.log(this.var_x);
    //console.log(this.var_y);

    
    //console.log(this.items);
    
    
  
  let index = 0;
  for (let array of this.items) {
    index += parseInt(array.service_price);
    this.sum = index.toFixed(2);       
    
  }
  console.log(this.items);
  console.log(this.var_y);
  console.log(this.sum);


  this.lineChart = new Chart(this.lineCanvas.nativeElement, {
    type: "line",
    data: {
      labels:  ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
      datasets: [
        {
          label: "My First dataset",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 3,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.var_y,
          spanGaps: true
        }
      ]
    }
  });
});
}

  constructor(public http : Http,public navCtrl: NavController, public navParams: NavParams) {
    this.getData()
    
    
    
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ChartPage');
    
  }

  getData(){
   this.http.get("https://braziliandev.000webhostapp.com/DB123/retrieve-data.php")
   .map(res => res.json())
   .subscribe(data => {
     this.items2 = data
     for(let i = 0; i < 6; i++){
      this.item3.push(this.items2[this.item3.length]);
      }
    }); 
  }
  
  doInfinite(ionInfinite) {
   console.log("Start Scroll");
     
  
    setTimeout(() => {
      
      for(let i = 0; i < 6; i++){
        this.item3.push(this.items2[this.item3.length]);
        }

      console.log('End Scroll');
      
      ionInfinite.complete();
      
    }, 3500);
    
  
   
  
  }

  loadData(){
    this.http.get('https://braziliandev.000webhostapp.com/DB123/retrieve-data.php')
    .map(res => res.json())
    .subscribe(data =>
      {
        
      this.items2  = data;
      this.var_x = this.items2.map(item=>item.service_name);
      this.var_y = this.items2.map(item=>item.service_price);
      //console.log(this.var_x);
      //console.log(this.var_y);

      
      //console.log(this.items);
      });
  }
  
 

}

