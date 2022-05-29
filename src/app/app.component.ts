import { Component, OnInit } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isDark: boolean = true;
  link = '';

  changeTheme() {
    console.log('Change Theme processing');
    if (this.isDark) {
      document.documentElement.classList.remove('dark');
      this.isDark = false;
    } else {
      document.documentElement.classList.add('dark');
      this.isDark = true;
    }
  }

  dynamicSlides = [
    {
      id: 1,
      src: 'https://source.unsplash.com/Z8dtTatMVMw',
      alt: 'Side 1',
      title: 'Side 1',
    },
    {
      id: 2,
      src: 'https://source.unsplash.com/m7K4KzL5aQ8',
      alt: 'Side 2',
      title: 'Side 2',
    },
    {
      id: 3,
      src: 'https://source.unsplash.com/m7K4KzL5aQ8',
      alt: 'Side 3',
      title: 'Side 3',
    },
    {
      id: 1,
      src: 'https://source.unsplash.com/Z8dtTatMVMw',
      alt: 'Side 1',
      title: 'Side 1',
    },
  ];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 600,
    autoHeight: true,
    autoWidth: true,
    center: true,
    navText: ['pre', 'next'],
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 1,
      },
      768: {
        items: 3,
        nav: true,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
    nav: false,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    lazyLoad: true,
  };
  activeSlides?: SlidesOutputData;

  getPassedData(data: SlidesOutputData) {
    this.activeSlides = data;
    let startPosi : number= data.startPosition!;
    this.link = this.dynamicSlides[startPosi].src;
    // console.log(this.activeSlides);
  }

  getData(data: SlidesOutputData) {
    // console.log(data);
    let startPosi : number= data.startPosition!;
    this.link = this.dynamicSlides[startPosi].src;
    
  }
}
