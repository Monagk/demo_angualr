import { Component} from '@angular/core';
import { FormGroup, FormControl, FormControlName} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent  {
title ='Angular Reactive Form';

loginForm= new FormGroup({
user:new FormControl(''),
password:new FormControl(''),
})

loginuser(){
  console.warn(this.loginForm.value)
}


}


