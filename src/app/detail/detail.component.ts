import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  dropdown(){
    console.log(document.getElementById("dropdown"));
    document.getElementById("dropdown")?.classList.remove("hidden")
  }

}
