import { Component, OnInit } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  @Output() route= new EventEmitter();
 

  constructor(private router:Router) {}

  ngOnInit(): void {}

  logout(){}

 
  notesClicked(){
    this.router.navigate(["/dashboard"])
  }
  archieveClick(){
    console.log("hit");
    this.router.navigate(['/dashboard/archieve'])
  }

  trashClick(){
    this.router.navigate(['/dashboard/trash'])
  }
}
