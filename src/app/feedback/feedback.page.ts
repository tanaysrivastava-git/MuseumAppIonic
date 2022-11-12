import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {

  constructor(public alertController: AlertController, public toastController: ToastController ) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: '',
      message: 'Do you want to submit ?',
      buttons: [{
        text: 'Yes',
        handler: () => {
          this.presentToast();
        }
      },{
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
      message: 'Thanks for your valuable feedback!',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }
}