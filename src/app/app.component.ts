import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../styles.css']
  
})
export class AppComponent {

  titulo: string = 'Bienvenido al Sistema NEGMERZA';
   email:string = '';
   password:string = '';

  constructor(){}

  login(){
    console.log(this.email);
    console.log(this.password);
  }



}
