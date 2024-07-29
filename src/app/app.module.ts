import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { ProfileComponent } from './profile/profile.component';
import { LftComponent } from './shared/lft/lft.component';
import { RitComponent } from './shared/rit/rit.component';
import { TweetserviceService } from './controllers/tweetservice.service';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './access/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExploreComponent,
    NotificationsComponent,
    MessagesComponent,
    ListsComponent,
    ProfileComponent,
    LftComponent,
    RitComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    TweetserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
