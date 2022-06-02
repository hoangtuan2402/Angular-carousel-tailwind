import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  show: boolean = false

  showMenu(){
    this.show =! this.show

  }
  isDark: boolean = false;
  changeTheme() {
    console.log("Change Theme processing");
    if(this.isDark){
      document.documentElement.classList.remove('dark');
      this.isDark = false;
    }else{
      document.documentElement.classList.add('dark');
      this.isDark = true;
    }
  }
}
