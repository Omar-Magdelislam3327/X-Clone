import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { ListsComponent } from './lists/lists.component';
import { ProfileComponent } from './profile/profile.component';
import { MessagesComponent } from './messages/messages.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { LoginComponent } from './access/login/login.component';

const routes: Routes = [
  {path:"", component:LoginComponent , title:"Log in to X / X"},
  {path:"home" , component:HomeComponent , title:"Home / X"},
  {path:"explore" , component:ExploreComponent , title:"Explore / X"},
  {path:"lists" , component:ListsComponent , title:"Lists / X"},
  {path:"profile" , component:ProfileComponent , title:"Profile / X"},
  {path:"messages" , component:MessagesComponent , title:"Messages / X"},
  {path:"notifications" , component:NotificationsComponent , title:"Notifications / X"},
  {path:"**" , redirectTo:"home" , pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
