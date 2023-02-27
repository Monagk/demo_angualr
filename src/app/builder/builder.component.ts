import { Component } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent {

contactForm:FormGroup;

  constructor(private formbuilder:FormBuilder){ 

this.contactForm = this.formbuilder.group({
userName:['', Validators.required],
password:['',Validators.required],
});
}

formSubmit(value:any){
var userName=value.userName;
var password=value.password;
console.log (userName+", "+password);
  }
  
  setData(){
    this.contactForm.setValue({
      "userName":'Gurpreet Kaur',
      "password":"Gurpreet@123",
    })
  }
}
 