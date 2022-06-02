import { Component, OnInit } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carosel-slide',
  templateUrl: './carosel-slide.component.html',
  styleUrls: ['./carosel-slide.component.css']
})
export class CaroselSlideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  isDark: boolean = true;
  link = '';
  currentPosition: number = 0;

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
      src: 'https://source.unsplash.com/Z8dtTatMVMw',
      alt: 'Side 3',
      title: 'Side 3',
    },
    {
      id: 4,
      src: 'https://source.unsplash.com/m7K4KzL5aQ8',
      alt: 'Side 4',
      title: 'Side 4',
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
      750: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 3,
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
    setTimeout(() => {
      this.activeSlides = data;
      this.currentPosition = data.startPosition!;
      this.link = this.dynamicSlides[this.currentPosition].src;

    }, 0);
  }

  getData(data: SlidesOutputData) {
    this.currentPosition = data.startPosition!;
    setTimeout(() => {
      this.link = this.dynamicSlides[this.currentPosition].src;
      this.activeSlides = data;
    }, 0);
  }
}
