import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body1',
  templateUrl: './body1.component.html',
  styleUrls: ['./body1.component.css']
})
export class Body1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menuHandler(isOpenMenu: boolean) {
    if (isOpenMenu) {
      document.getElementById("list")?.classList.add("top-100");
      document.getElementById("list")?.classList.remove("hidden");
      document.getElementById("close")?.classList.remove("hidden");
      document.getElementById("open")?.classList.add("hidden");
    } else {
      document.getElementById("list")?.classList.remove("top-100");
      document.getElementById("list")?.classList.add("hidden");
      document.getElementById("close")?.classList.add("hidden");
      document.getElementById("open")?.classList.remove("hidden");
    }

  }
}
