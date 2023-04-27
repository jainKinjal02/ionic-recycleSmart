import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType ,CameraSource } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  selectImage : any ;
  constructor(private router : Router) { }

  ngOnInit() {
  }
  checkPlatformForWeb(){
    if(Capacitor.getPlatform() == 'web') return true;
    return false;
  }

  OnClickSeeAll(){
    this.router.navigate(['pickup-calls']);
  }

  OnAddNewPickupCall(){
    this.router.navigate(['pickup-call']);
  }

  async OnAddPhoto(){
    if(!this.checkPlatformForWeb()){
      const status= await Camera.requestPermissions();
      const image = await Camera.getPhoto({
        quality: 90, // there are many options ,check official site
        allowEditing: false,
				source: CameraSource.Prompt,
        resultType: CameraResultType.Uri
      });
    
      // image.webPath will contain a path that can be set as an image src.
      // You can access the original file using image.path, which can be
      // passed to the Filesystem API to read the raw data of the image,
      // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
      //var imageUrl = image.webPath;
    this.selectImage = image;
    console.log(this.selectImage);
    console.log('-----------------');
    console.log(this.selectImage.webPath);
    console.log(this.selectImage.path);
      // Can be set to the src of an image now
      //imageElement.src = imageUrl;
		//to share the image , we can use share plugin
      // let shareRet =  await Share.share({
      //   title: 'Image shared',
      //   text: 'Share the image',
      //   url: this.selectImage.path, // to share an imag always specify the path and not webPath
      //   dialogTitle: 'Image sharing via share plugin',
      // });
    }else{
      console.log('camera is not available for web');
    }
  }

}
