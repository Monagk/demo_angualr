import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  title = 'Gurpreet Kaur';
today=Date();
user={
name:"Gurpreet Kaur", Age:'30 years',
};

}
