import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
import { SettingsPage } from '../settings/settings';
import { ProfilePage } from '../profile/profile';
import { ChatPage } from '../chat/chat';
import { CalendarPage } from '../calendar/calendar';
import { EventsPage } from '../events/events';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = SettingsPage;
  tab2Root: any = ProfilePage;
  tab3Root: any = ChatPage;
  tab4Root: any = CalendarPage;
  tab5Root: any = EventsPage;
  constructor(public navCtrl: NavController) {
  }
  goToChat(params){
    if (!params) params = {};
    this.navCtrl.push(ChatPage);
  }
}
