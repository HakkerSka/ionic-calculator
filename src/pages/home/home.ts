import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  numberA;
  numberB;
  result;
  operationName;
  type;

  constructor(public navCtrl: NavController) {

  }

calci(type){
  var a = parseInt(this.numberA);
  var b = parseInt(this.numberB);

  if(type == 'a')
  {
    this.operationName = "Addition";
    this.result = a+b;
  }
  else if(type == 's')
  {
    this.result = a-b;
    this.operationName = "Subtract";
  }
  else if(type == 'm')
  {
    this.result = a*b;
    this.operationName = "Multiply";
  }
  else if(type == 'd')
  {
    this.result = a/b;
    this.operationName = "Division";
  }
}


}
