import { Component, OnInit } from '@angular/core';
import { isNull, isNumber } from 'util';
import { VideoPreview } from '../VideoPreview';

@Component({
  selector: 'app-tv-series',
  templateUrl: './tv-series.page.html',
  styleUrls: ['./tv-series.page.scss'],
})
export class TvSeriesPage extends VideoPreview {
  public TvSeries:any;
  private TvSeriesList : any;
  private SelectedTvSeries : any;
  constructor() { 
    super();
    this.GetTvSeries(); 

    let id = new URL(document.URL).searchParams.get("id");
    
    if(!isNull(id) && !Number.isNaN(parseInt(id))){
      this.GetSelectedTvSeries(id);
    }

    this.TvSeries = {
      SelectedTvSeries: this.SelectedTvSeries,
      TvSeriesList: this.TvSeriesList
    };
  }

  GetSelectedTvSeries(id){
    this.SelectedTvSeries = this.TvSeriesList.find(element => element.VidId == id);
  }

  GetTvSeries(){
    this.TvSeriesList = [
      {FileName:"mov_bbb", 
      Path:"/assets/mov_bbb.mp4",
      VidType:"mp4", 
      Thumbnail:"/assets/MarkyTube.png",
      Content:"Test Title TV 1",
      VidId:1},
      {FileName:"bb_bunny", 
      Path:"/assets/bb_bunny.webm",
      VidType:"webm", 
      Thumbnail:"/assets/MarkyTube.png",
      Content:"Test Title TV 2",
      VidId:2},
      {FileName:"bb_bunny", 
      Path:"/assets/bb_bunny.webm",
      VidType:"webm", 
      Thumbnail:"/assets/MarkyTube.png",
      Content:"Test Title TV 3",
      VidId:3},
      {FileName:"bb_bunny", 
      Path:"/assets/bb_bunny.webm",
      VidType:"webm", 
      Thumbnail:"/assets/MarkyTube.png",
      Content:"Test Title TV 4",
      VidId:4}
    ]
  }

}
