import { Component, OnInit } from '@angular/core';
import { isNull, isNumber } from 'util';
import { VideoPreview } from '../VideoPreview';

@Component({
  selector: 'app-animies',
  templateUrl: './animies.page.html',
  styleUrls: ['./animies.page.scss'],
})
export class AnimiesPage extends VideoPreview{
  public Animies:any;
  private AnimeList : any;
  private SelectedAnime : any;
  constructor() { 
    super();
    this.GetAnimies(); 

    let id = new URL(document.URL).searchParams.get("id");
    
    if(!isNull(id) && !Number.isNaN(parseInt(id))){
      this.GetSelectedAnime(id);
    }

    this.Animies = {
      SelectedAnime: this.SelectedAnime,
      AnimeList: this.AnimeList
    };
  }

  GetSelectedAnime(id){
    this.SelectedAnime = this.AnimeList.find(element => element.VidId == id);
  }

  GetAnimies(){
    this.AnimeList = [
      {FileName:"mov_bbb", 
      Path:"/assets/mov_bbb.mp4",
      VidType:"mp4", 
      Thumbnail:"/assets/MarkyTube.png",
      Content:"Test Title Anime 1",
      VidId:1},
      {FileName:"bb_bunny", 
      Path:"/assets/bb_bunny.webm",
      VidType:"webm", 
      Thumbnail:"/assets/MarkyTube.png",
      Content:"Test Title Anime 2",
      VidId:2},
      {FileName:"bb_bunny", 
      Path:"/assets/bb_bunny.webm",
      VidType:"webm", 
      Thumbnail:"/assets/MarkyTube.png",
      Content:"Test Title Anime 3",
      VidId:3},
      {FileName:"bb_bunny", 
      Path:"/assets/bb_bunny.webm",
      VidType:"webm", 
      Thumbnail:"/assets/MarkyTube.png",
      Content:"Test Title Anime 4",
      VidId:4}
    ];
  }

}
