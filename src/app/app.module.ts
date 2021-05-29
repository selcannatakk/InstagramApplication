import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './pages/client/homePage/homepage/homepage.component';
import { CardComponent } from './components/card/card.component';
import { StateComponent } from './components/state/state.component';
import { SmallcardComponent } from './components/smallcard/smallcard.component';
import { RecommendcardComponent } from './components/recommendcard/recommendcard.component';
import { AboutComponent } from './components/about/about.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    CardComponent,
    StateComponent,
    SmallcardComponent,
    RecommendcardComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
