import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { MateriPage } from '../materi/materi';
import { QuizPage } from '../quiz/quiz';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alert: AlertController) {

  }

  onLoadMateri(){
    this.navCtrl.push(MateriPage);
  }

  onLoadQuiz(){
    this.navCtrl.push(QuizPage);
  }

  onLoadProfile(){
  	let ups =  this.alert.create({
  		title: "Maaf",
  		message: "Halaman sedang dalam pengembangan",
  		buttons: [{
  			text: "OK",
        handler: ()=>{
          console.log('ok');
        }
  		}]
  	});
    ups.present();
  }

  onLoadAbout(){
  	this.navCtrl.push(AboutPage);
  }


}
