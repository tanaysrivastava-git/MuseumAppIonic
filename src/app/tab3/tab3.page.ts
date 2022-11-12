import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private router: Router, public alertController: AlertController, public toastController: ToastController) { }

  contest1() {
    window.open("https://www.picassoartcontest.com/");
  }

  contest2() {
    window.open("https://ogdencontemporaryarts.org/upcoming-exhibitions/");
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: '',
      message: 'Are you interested to attend this event ?',
      buttons: [{
        text: 'Yes',
        handler: () => {
          this.presentToast();
        }
      }, {
        text: 'No',
        handler: () => {
          console.log('Confirm Ok');
        }
      }]

    });

    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Interested!',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }
}
