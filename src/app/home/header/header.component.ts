import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userInfo = {
    name: '用户名',
    pwd: '',
    login: false
  }

  constructor() { }

  ngOnInit() {
    if (this.userInfo.login == true) {
      this.userInfo.name = 'viola';
    }

  }

}
