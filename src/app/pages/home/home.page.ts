import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
 
  constructor(private router : Router) { }

  ngOnInit() {
  }
 

  OnClickSeeAll(){
    this.router.navigate(['pickup-calls']);
  }

  OnAddNewPickupCall(){
    this.router.navigate(['pickup-call']);
  }

  async share(){
    await Share.share({
      title: 'Share via recycleSmart',
      text: 'Details regarding recycledd products will be sent',
      url: 'http://ionicframework.com/',
      dialogTitle: 'Share with friends',
    });
  }

 

}
