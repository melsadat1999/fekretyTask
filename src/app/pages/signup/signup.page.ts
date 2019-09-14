import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
``
@Component({
  selector: "app-signup",
  templateUrl: "./signup.page.html",
  styleUrls: ["./signup.page.scss"]
})
export class SignupPage {
  image:any;
  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router,private camera: Camera) {
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      address: ['', Validators.required],
      birthday: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
  });
  }


    openCamera(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.image=(<any>window).Ionic.WebView.convertFileSrc(imageData);
     }, (err) => {
      // Handle error
      alert("error "+JSON.stringify(err))
     });
  }
}
