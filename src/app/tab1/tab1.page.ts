import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private router:Router, public actionSheetController: ActionSheetController) { }

  viewGuideline(){
    this.router.navigate(['/guidelines']);
  }

  viewSafety(){
    this.router.navigate(['/safety']);
  }

  viewShopping(){
    this.router.navigate(['/shopping']);
  }

  viewFacilities(){
    this.router.navigate(['/facilities']);
  }

  bookTickets(){
    this.router.navigate(['/tickets']);
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: 'Safety and hygiene',
        icon: 'medkit',
        handler: () => {
          this.viewSafety();
        }
      }, {
        text: 'Shopping and eating',
        icon: 'fast-food',
        handler: () => {
          this.viewShopping();
        }
      }, {
        text: 'Facilities and amenities',
        icon: 'wifi',
        handler: () => {
          this.viewFacilities();
        }
      },
      {
        text: 'Visiting guidelines',
        icon: 'document-text',
        handler: () => {
          this.viewGuideline();
        }
      }, {
        text: 'Book tickets',
        icon: 'ticket',
        handler: () => {
          this.bookTickets();
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
