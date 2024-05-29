import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  template:  `<div class = "alert alert-warning" [ngClass]="{fadeOut: displayNotification}">
                <p> This website uses cookies to provide better user experience</p>
                <div class = "close"><button class = "btn" (click)="closeNotification()">X</button></div>
  </div>`,
  styles: [".notification-div{margin: 10px 0px; padding: 10px 20px; background-color: #fad7a0; text-align: center;}", 
  "p{font-size: 14px;}", 
  ".close{float: right; margin-top: -45px;}",
    ".fadeOut {visibility: hidden; opacity: 0; transition: visibility 0s 2s, opacity 2s linear;}"]
})
export class NotificationComponent {
  displayNotification:boolean = false;

  closeNotification(){
    this.displayNotification = true;
  }
}
