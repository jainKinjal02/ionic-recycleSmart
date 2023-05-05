import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation'

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  coordinates;
  constructor() { }

  ngOnInit() {
    this.printCurrentPosition();
  }

  async printCurrentPosition(){
     this.coordinates = await Geolocation.getCurrentPosition();
    console.log(this.coordinates.coords);
  }

}
