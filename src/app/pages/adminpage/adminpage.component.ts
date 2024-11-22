import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'animate.css';
import { OpenweatherService } from '../../services/openweather.service';


@Component({
  selector: 'app-admin-page',
  standalone: true,
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css'],
  imports: [
    CommonModule // Add CommonModule to imports array
  ]
})

export class AdminPageComponent implements OnInit {

  proyectos = [
    { 
      titulo: 'París', 
      texto: 'La ciudad de la luz, conocida por la Torre Eiffel y su rica cultura.', 
      imagen: 'https://media.istockphoto.com/id/1145422105/es/foto/vista-a%C3%A9rea-de-la-torre-eiffel-par%C3%ADs.jpg?s=612x612&w=0&k=20&c=5m12kQp5USuEYJdD71E9jLA04Q0nzqcHHGx1pfTx_pA=' 
    },
    { 
      titulo: 'Nueva York', 
      texto: 'La Gran Manzana, famosa por Times Square y Central Park.', 
      imagen: 'https://media.istockphoto.com/id/525232662/es/foto/nueva-york-edificio-estado-del-imperio-estatua-de-la-libertad.jpg?s=612x612&w=0&k=20&c=z4xeG8qQfhpfUMMOAET1Ga2e4PAQBBccij6bKPJJ0sk=' 
    },
    { 
      titulo: 'Tokio', 
      texto: 'Una metrópolis moderna con templos antiguos y tecnología avanzada.', 
      imagen: 'https://media.istockphoto.com/id/1131743616/es/foto/vista-a%C3%A9rea-del-paisaje-urbano-de-tokio-con-la-monta%C3%B1a-fuji-en-jap%C3%B3n.jpg?s=612x612&w=0&k=20&c=xrmq2s8gXtvz8cjnmmH32auDH6TaMTyAwwS0zXGwV0A=' 
    },
    { 
      titulo: 'Sidney', 
      texto: 'Hogar de la icónica Ópera y hermosas playas.', 
      imagen: 'https://media.istockphoto.com/id/504539120/es/foto/sydney-frente-al-mar-en-la-noche.jpg?s=612x612&w=0&k=20&c=v_82_gyvEN8CsKl5qivg92zj39jFYjflS_hwoH6YsQE=' 
    },
    { 
      titulo: 'Londres', 
      texto: 'Famosa por el Big Ben, el Támesis y su historia.', 
      imagen: 'https://media.istockphoto.com/id/1464359435/es/v%C3%ADdeo/hyperlapse-vista-r%C3%ADo-t%C3%A1mesis-y-ciudad-skyline-londres-reino-unido-inglaterra-timelapse-toma.jpg?s=640x640&k=20&c=R5_4oNASTJBhfjmNxdfOQqqxziAdtMkITMbfA6TQd50=' 
    },
    { 
      titulo: 'Roma', 
      texto: 'La Ciudad Eterna, conocida por el Coliseo y su legado histórico.', 
      imagen: 'https://media.istockphoto.com/id/1326099058/es/foto/vista-de-la-ciudad-del-vaticano.jpg?s=612x612&w=0&k=20&c=BtCE09v13ipLbJTSmrSI1h7h8q0Km0xOzi-9pEYDV8U=' 
    },
    { 
      titulo: 'Rio de Janeiro', 
      texto: 'Famosa por el Cristo Redentor y sus carnavales vibrantes.', 
      imagen: 'https://media.istockphoto.com/id/534215078/es/foto/a%C3%A9rea-delaware-r%C3%ADo-de-janeiro.jpg?s=612x612&w=0&k=20&c=LwbUBihOCyc7WMbBjtI-OKKmLPy2U9H2LrLRTuCM9ZE=' 
    },
    { 
      titulo: 'El Cairo', 
      texto: 'Conocida por las pirámides y su rica historia faraónica.', 
      imagen: 'https://media.istockphoto.com/id/1174818077/es/foto/mezquita-y-pir%C3%A1mides.jpg?s=612x612&w=0&k=20&c=PCSjqvtD7tcDi0AyqY7DGjKyoLDamv4jzdkdI7Mi6YE=' 
    },
    { 
      titulo: 'Bangkok', 
      texto: 'La ciudad de los templos dorados y mercados flotantes.', 
      imagen: 'https://media.istockphoto.com/id/483816132/es/foto/paisaje-de-la-ciudad-de-bangkok.jpg?s=612x612&w=0&k=20&c=xxv1FFPwp2h-t9GrCnWiSkeugt2k2poVm9I-Luo2xeM=' 
    },
    { 
      titulo: 'Cape Town', 
      texto: 'Conocida por su Table Mountain y hermosos paisajes costeros.', 
      imagen: 'https://media.istockphoto.com/id/682284814/es/foto/vista-a%C3%A9rea-de-ciudad-del-cabo.jpg?s=612x612&w=0&k=20&c=PuxHOLz2_uT6Z36r1ZL8fbL-r-a--GSZ0kJusgLdonI=' 
    }
  ];

  weatherData: { [key: string]: any } = {}; 
  constructor(private openweatherService: OpenweatherService) { }

  ngOnInit() {
    this.proyectos.forEach(proyecto => {
    this.getWeather(proyecto.titulo);
  });
}
  getWeather(nombreCiudad: string) {
    this.openweatherService.getWeatherByCity(nombreCiudad).subscribe(data => {
      this.weatherData[nombreCiudad] = data;
      //console.log(this.weatherData);
      //console.log(this.weatherData.main.temp);
    });
  }
}
  
