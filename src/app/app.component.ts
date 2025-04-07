import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { UserCardComponent } from "./user-card/user-card.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { CommonModule } from '@angular/common';

import { UserService } from './services/user.service';
import { AppHighlightDirective } from "./directives/app-highlight.directive";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLinkActive, RouterLink, AppHighlightDirective, HttpClientModule,RouterOutlet, UserCardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  template: `<h1>  </h1>`
})
export class AppComponent implements OnInit{
  users:any[] =[];
  title = 'CurosBigotonAngular18';
  constructor(private userService: UserService){}

  ngOnInit() {
    this.userService.getUsers().subscribe(
      (data)=>{
        this.users = data;
      },
      (error)=>{
        console.log('Error al obtener los usuarios', error);
      }
    );
  }
}
