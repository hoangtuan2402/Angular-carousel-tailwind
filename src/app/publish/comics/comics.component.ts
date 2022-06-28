import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css'],
})
export class ComicsComponent implements OnInit {
  cars = [
    { id: 1, name: 'BMW Hyundai' },
    { id: 2, name: 'Kia Tata' },
    { id: 3, name: 'Volkswagen Ford' },
    { id: 4, name: 'Renault Audi' },
    { id: 5, name: 'Mercedes Benz Skoda' },
  ];

  tags = [
    { id: 1, name: 'Manhua' },
    { id: 2, name: 'Manga' },
    { id: 3, name: 'English' },
  ];
  selected = [{ id: 3, name: 'Volkswagen Ford' }];
  selectedTags = [{ id: 1, name: 'Manhua' }];
  ratting = [{ id: 1,name:'ABC' }, { id: 2,name:'DEF' }];
  radioSelected ={};


  registerComicsForm = new FormGroup({
    comicName: new FormControl(),
    author: new FormControl(),
    category: new FormControl(),
    tags: new FormControl(),
    introduction: new FormControl(),
    ratting: new FormControl(),
  });


  constructor() { }

  ngOnInit(): void { }

  changeSelected(val: any) {
    console.log(val);
  }

  onItemChange(item:any){
      console.log(item);

  }

  saveRegisterComic(){
    console.log(this.registerComicsForm.value);
    
  }
}
