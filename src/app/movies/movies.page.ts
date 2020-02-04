import { Component, OnInit } from '@angular/core';
import { isNull, isNumber } from 'util';
import { element } from 'protractor';
import { VideoPreview } from '../VideoPreview';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})

export class MoviesPage extends VideoPreview {
  public Movies : any;
  private MovieList : any;
  private SelectedMovie : any;

  constructor() { 
    super();
    this.GetMovies();

    let id = new URL(document.URL).searchParams.get("id");

    if(!isNull(id) && !Number.isNaN(parseInt(id))){
      this.GetSelectedMovie(id);
    }

    this.Movies = {
      SelectedMovie: this.SelectedMovie,
      MovieList: this.MovieList
    };
  }

  GetSelectedMovie(id){
    this.SelectedMovie = this.MovieList.find(element => element.VidId == id);
  }

  GetMovies(){
    this.MovieList = [
      {FileName:"mov_bbb", 
      Path:"/assets/mov_bbb.mp4",
      VidType:"mp4", 
      Thumbnail:"/assets/MarkyTube.png",
      Content:"Test Title Movie 1",
      VidId:1},
      {FileName:"bb_bunny", 
      Path:"/assets/bb_bunny.webm",
      VidType:"webm", 
      Thumbnail:"/assets/MarkyTube.png",
      Content:"Test Title Movie 2",
      VidId:2},
      {FileName:"bb_bunny", 
      Path:"/assets/bb_bunny.webm",
      VidType:"webm", 
      Thumbnail:"/assets/MarkyTube.png",
      Content:"Test Title Movie 3",
      VidId:3},
      {FileName:"bb_bunny", 
      Path:"/assets/bb_bunny.webm",
      VidType:"webm", 
      Thumbnail:"/assets/MarkyTube.png",
      Content:"Test Title Movie 4",
      VidId:4}
    ];
  }

}
