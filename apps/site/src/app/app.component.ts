import { Component } from '@angular/core';

export interface Name {
  firstName: string;
  middleName?: string;
  lastName: string;  
}

export interface Phone {
  phoneNumber: string;
}

export interface Email {
  emailAddress: string;
}

export interface Address {

}

export interface User extends Name {

}

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

}
