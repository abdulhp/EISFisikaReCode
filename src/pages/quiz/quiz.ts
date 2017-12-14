import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { NilaiPage } from '../nilai/nilai';

/**
 * Generated class for the QuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
})
export class QuizPage {

  
  public items:any;
  public val:string;
  public ans:any =0;
  public idSoal:any;
  public idget:any;
  public dbans:any;
  public cropped:any;

  constructor(public navCtrl: NavController, public http: Http, public alert: AlertController, public NP: NavParams) {

  }

  ionViewDidLoad(){
    this.http.get('http://eisfisika.dx.am/OBJ/conn.php')
    .map(res => res.json())
    .subscribe(data => {
      this.items = data;
    });
    this.ans = 0;
    this.val = "";

  }

  ansSoal(idSoal,value){
    this.http.get('http://eisfisika.dx.am/OBJ/id.php?id='+idSoal)
    .map(res => res.json())
    .subscribe(data => {
      // this.idget = data;
      // console.log(data[0].ans);
      this.val = value;
      if(this.val == data[0].ans){
        this.ans +=1;
      }
    });

  }

  cropping(){
    this.cropped = {
      ans: this.ans
    };
  }

 konfirmasi(){
   let konfirmasi = this.alert.create({
     title: 'Yakin?',
     message: 'Tidak ada Jawaban yang salah?',
     buttons: [
     {
       text: 'Cek Kembali',
       handler: ()=>{
         console.log(this.ans);
       }
     },
     {
       text: 'Selesai',
       handler: () => {
         this.cropping();
         this.navCtrl.setRoot(NilaiPage,this.cropped,{animate:true, direction:'forward'}),1000;
           // this.navCtrl.push('NilaiPage',this.ans);
           // console.log(this.ans);         
         }
       }
       ]
     });
   konfirmasi.present();
 }
}