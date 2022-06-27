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
import { ComicsComponent } from './publish/comics/comics.component';
import { NovelsComponent } from './publish/novels/novels.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { StepsComponent } from './steps/steps.component';
import { UploadCoverComponent } from './publish/upload-cover/upload-cover.component';
import { HttpClientModule } from '@angular/common/http';
import { UploadChapterComponent } from './publish/upload-chapter/upload-chapter.component';

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
    NavbarReadingComponent,
    ComicsComponent,
    NovelsComponent,
    StepsComponent,
    UploadCoverComponent,
    UploadChapterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
