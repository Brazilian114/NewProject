import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import { Http,Headers, RequestOptions } from '@angular/http';
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
  @ViewChild("doughnutCanvas") doughnutCanvas: ElementRef;
  @ViewChild("lineCanvas") lineCanvas: ElementRef;

  private barChart: Chart;
  private doughnutChart: Chart;
  private lineChart: Chart;
  items:any;
  posts:any;
  var_x:any;
  var_y:any;
  constructor(public http : Http,public navCtrl: NavController, public navParams: NavParams) {
    
    
  }

  ionViewWillEnter()
  {
    this.initializeItems();


     this.loadData();
    this.ngOnInit();
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChartPage');
    
  }
  loadData(){
    this.http.get('https://braziliandev.000webhostapp.com/DB123/retrieve-data.php')
    .map(res => res.json())
    .subscribe(data =>
      {
        
      this.items  = data;
      this.var_x = this.items.map(item=>item.service_name);
      this.var_y = this.items.map(item=>item.service_price);
      //console.log(this.var_x);
      //console.log(this.var_y);

      
      //console.log(this.items);
      });
  }
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
      
      
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: "doughnut",
      data: {
        labels: ["mon","tue","wed","thu","fri","sat","sun"],
        datasets: [
          {
            label: "# of Votes",
            data:  this.var_y,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF6384", "#36A2EB", "#FFCE56"]
          }
        ]
      }
    });
console.log(this.var_y);

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
 
  initializeItems() {
    this.items =this.posts;
    
  }
}

