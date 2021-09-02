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
      cartaz:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6Wdl9N6dL0Hi0T1qJLWSz6gMLbd.jpg',
      generos:['Ação, Fantasia, Aventura'],
      classificacao:6.1, 

    },
    {
      nome: 'Queen & Slim',
      lancamento:'27/11/2019 (BR)',
      duracao:'2h 12m',
      diretor:'Melina Matsoukas',
      cartaz:'https://upload.wikimedia.org/wikipedia/pt/e/ef/Queen_%26_Slim.jpeg',
      generos:['Crime, Drama, Romance'],
      classificacao:7.1, 
    },
    {
      nome: 'The Grand Budapest Hotel',
      lancamento:'03/07/2014 (BR)',
      duracao:'1h 39m',
      diretor:'Wes Anderson',
      cartaz:'https://images-na.ssl-images-amazon.com/images/I/81Z6-ieAIyL.jpg',
      generos:['Aventura, Comédia, Crim'],
      classificacao:8.1, 
    },
    {
      nome: 'Matrix',
      lancamento:'21/05/1999 (BR)',
      duracao:'3h 16m',
      diretor:'Lana Wachowski e Lilly Wachowski',
      cartaz:'https://br.web.img2.acsta.net/medias/nmedia/18/91/08/82/20128877.JPG',
      generos:['Ação, Sci-Fi'],
      classificacao:8.7, 
    },
    {
      nome: 'Alta Sociedade',
      lancamento:'17/07/1956 (EUA)',
      duracao:'1h 51m',
      diretor:'Charles Walters',
      cartaz:'https://upload.wikimedia.org/wikipedia/pt/d/dd/High_Society.jpg',
      generos:['Comedia, Musical, Romance'],
      classificacao:7.0, 
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
 