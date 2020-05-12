import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FirstSliderComponent } from './first-slider/first-slider.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { PopularComponent } from './popular/popular.component';
import { EventsComponent } from './events/events.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { FooterComponent } from './footer/footer.component';
import { SinglePageComponent } from './single-page/single-page.component';
import {SecondPageComponent} from "./second-page/second-page.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FirstSliderComponent,
    BlogPostComponent,
    PopularComponent,
    EventsComponent,
    SubscribeComponent,
    FooterComponent,
    SinglePageComponent,
    SecondPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
