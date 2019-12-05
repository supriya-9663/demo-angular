import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userdetails:any=[];

  constructor(private userdetail:UserserviceService) { }

  ngOnInit() {

    this.userdetail.getUsers().subscribe(data=>this.userdetails=data)

  }   

  todayDate : Date = new Date();
}
