import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './res/view/header/header.component';
import { FirstSliderComponent } from './single-page/res/view/first-slider/first-slider.component';
import { BlogPostComponent } from './res/view/blog-post/blog-post.component';
import { PopularComponent } from './single-page/res/view/popular/popular.component';
import { EventsComponent } from './single-page/res/view/events/events.component';
import { SubscribeComponent } from './res/view/subscribe/subscribe.component';
import { FooterComponent } from './res/view/footer/footer.component';
import { SinglePageComponent } from './single-page/single-page.component';
import {SecondPageComponent} from "./second-page/second-page.component";
import { ListItemsComponent } from './list-items/list-items.component';

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
    SecondPageComponent,
    ListItemsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
