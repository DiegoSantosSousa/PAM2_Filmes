import { IFilmes } from './../models/IFilmes.model';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo = 'App Filmes';

  listaFilmes: IFilmes[] = [ 
    {
      nome: 'Mortal Kombat',
      lancamento:'15/04/2021 (BR) ',
      duracao:' 1h 50m',
      diretor:'Simon McQuoid',
      cartaz:'..\assets\mortalkombat.jpg',
      generos:['Ação, Fantasia, Aventura'],
      nota:'6.1/10 - IMDb',

    },
    {
      nome: 'Queen & Slim',
      lancamento:'27/11/2019 (BR)',
      duracao:'2h 12m',
      diretor:'Melina Matsoukas',
      cartaz:'..\assets\Queen_&_Slim.jpg',
      generos:['Crime, Drama, Romance'],
      nota:'7.1/10 - IMDb',
    },
    {
      nome: 'The Grand Budapest Hotel',
      lancamento:'03/07/2014 (BR)',
      duracao:'1h 39m',
      diretor:'Wes Anderson',
      cartaz:'..\assets\TheGrandHotelBudapest.jpg',
      generos:['Aventura, Comédia, Crim'],
      nota:'8.1/10 - IMDb',
    },
    {
      nome: 'Matrix',
      lancamento:'21/05/1999 (BR)',
      duracao:'3h 16m',
      diretor:'Lana Wachowski e Lilly Wachowski',
      cartaz:'..\assets\matrix.jpg',
      generos:['Ação, Sci-Fi'],
      nota:'8.7/10 - IMDb',
    },
    {
      nome: 'Alta Sociedade',
      lancamento:'17/07/1956 (EUA)',
      duracao:'1h 51m',
      diretor:'Charles Walters',
      cartaz:'..\assets\High_Society.jpg',
      generos:['Comedia, Musical, Romance'],
      nota:'7.0/10 - IMDb',
    },
   
  ];

  constructor(public alertController: AlertController, public toastController: ToastController ) {}

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'ALERTA',
      message: 'Deseja realmente adicionar este filme aos <strong>favoritos</strong>?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'SIM, adicionar',
          handler: () => {
            this.apresentarToast();
          }
        }
      ]
    });

    await alert.present();
    
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
    message: 'Filme adicionado aos favoritos',
    duration: 2000,
    color: 'success'
    });
    toast.present();
   } 
  

}
 