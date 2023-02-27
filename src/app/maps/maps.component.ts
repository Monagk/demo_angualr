import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent {
  items: any;
  p: number = 1;
  itemsPerpage: number = 200;

  constructor(private usersservice: UsersService ) {
    this.usersservice.getData().subscribe(data => {
      console.warn(data);
      this.items = data
    })     
}
addData(items:any){
console.warn(this.items.value)
}
}
