import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
        apiKey: "AIzaSyCp0NbLmDQN8JlBh4NmYY7zhzbwjFc2_ic",
        authDomain: "comprasapp-b26a3.firebaseapp.com"
    });
  }
}
