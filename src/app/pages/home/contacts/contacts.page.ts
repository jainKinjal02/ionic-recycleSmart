import { Component, OnInit } from '@angular/core';
import { Contacts } from '@capacitor-community/contacts';
import { Capacitor } from '@capacitor/core';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {
  contacts:any[] =[];
  constructor(private callNumber : CallNumber) { }

  ngOnInit() {
    this.accessContacts();
  }

  checkPlatformForWeb(){
    if(Capacitor.getPlatform() == 'web') return true;
    return false;
  }
  async accessContacts(){
    if(!this.checkPlatformForWeb()){
      try{
         const permission =await Contacts.requestPermissions(); //only for android
         console.log(permission);
         if(!permission.contacts) return;
         else if(permission.contacts == 'granted'){
            const result = await Contacts.getContacts({
              //add options
              projection:{
                name: true,
                phones: true
              }
            });
            this.contacts = result.contacts;
            console.log(this.contacts);
         }
         
      }catch(e){
        console.log(e);
      }
    } else{
      console.log('Contacts plugin is not for web');
    }
  }
  call(contact){
    console.log(contact);
      if(!this.checkPlatformForWeb()){
      let phoneNumber = contact.phones[0].number;
      this.callNumber.callNumber(phoneNumber,true)
      .then(res=> console.log('dialer launched' , res))
      .catch(err => console.log('error lauching dialer', err))

    }else{
      console.log('cannot call in web');
    }
  }

}
