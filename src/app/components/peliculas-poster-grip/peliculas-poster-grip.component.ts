import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/cartelera-response';

@Component({
  selector: 'app-peliculas-poster-grip',
  templateUrl: './peliculas-poster-grip.component.html',
  styleUrls: ['./peliculas-poster-grip.css']

})
export class PeliculasPosterGripComponent implements OnInit {
  
  @Input() movies: Movie[] | undefined;

  constructor(private router: Router){}
 

  ngOnInit(): void {
     //   console.log(this.movies); 
      }

  onMovieClick(movie : Movie){
 
    this.router.navigate(['/pelicula' , movie.id])
  }


}
