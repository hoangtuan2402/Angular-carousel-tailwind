import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CaroselSlideComponent } from './carosel-slide/carosel-slide.component';
import { HeaderComponent } from './header/header.component';
import { Body1Component } from './body1/body1.component';
import { FooterComponent } from './footer/footer.component';
import { DetailComponent } from './detail/detail.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ListChapterComponent } from './list-chapter/list-chapter.component';
import { ReadingPageComponent } from './reading-page/reading-page.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { NavbarReadingComponent } from './navbar-reading/navbar-reading.component';

@NgModule({
  declarations: [
    AppComponent,
    CaroselSlideComponent,
    HeaderComponent,
    Body1Component,
    FooterComponent,
    DetailComponent,
    ReviewsComponent,
    ListChapterComponent,
    ReadingPageComponent,
    CommentFormComponent,
    NavbarReadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
