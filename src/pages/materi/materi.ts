import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ModulusPage } from './modulus/modulus';
import { PendahuluanPage } from './pendahuluan/pendahuluan';
import { TeganganPage } from './tegangan/tegangan';
import { ReganganPage } from './regangan/regangan';
import { PsebPage } from './pseb/pseb';

/**
 * Generated class for the MateriPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @Component({
 	selector: 'page-materi',
 	templateUrl: 'materi.html',
 })
 export class MateriPage {

 	constructor(public navCtrl: NavController, public navParams: NavParams) {
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad MateriPage');
 	}
 	onLoadPendahuluan(){
 		this.navCtrl.push(PendahuluanPage);
 	}
 	onLoadTegangan(){
 		this.navCtrl.push(TeganganPage);
 	}
 	onLoadRegangan(){
 		this.navCtrl.push(ReganganPage);
 	}
 	onLoadModulus(){
 		this.navCtrl.push(ModulusPage);
 	}
 	onLoadPseb(){
 		this.navCtrl.push(ReganganPage);
 	}
 }
