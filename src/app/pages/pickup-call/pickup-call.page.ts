import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalNotifications } from '@capacitor/local-notifications';
import { isPlatform } from '@ionic/angular';
@Component({
  selector: 'app-pickup-call',
  templateUrl: './pickup-call.page.html',
  styleUrls: ['./pickup-call.page.scss'],
})
export class PickupCallPage implements OnInit {

  constructor(private router: Router) { }

  async ngOnInit() {
    await LocalNotifications.requestPermissions();
  }
  async OnCreatePickupCall(){
    if(isPlatform('android') == true){
      console.log('inside platform check');
      LocalNotifications.createChannel({
        id: '1',
        name: 'local nitifications',
        //sound: 'sound.wav'
      });
    }

    const notifs = await LocalNotifications.schedule({
      notifications :[
        {
          title: "Ionic app",
          body: "checking local notification",
          id: 1,
          schedule: {at: new Date(Date.now() + 1000*5 )},
          //sound: 'sound.wav',
          //attachments: null,
          //smallIcon: 'ic_stat_adb',
          actionTypeId:"",
          extra:{
            data: 'Checking extra'
          },
        }
      ]
    });
    console.log('scheduled notifications',notifs);
    this.router.navigate(['home']);
  }

}
