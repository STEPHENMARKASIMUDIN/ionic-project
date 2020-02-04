import { Component } from '@angular/core';
import { VideoPreview } from '../VideoPreview';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage extends VideoPreview {
  public VideoList: any;
  private Movie;
  private Anime;
  private TVSeries;
  constructor() {
    super();
    this.GetVideoList();
  }

  GetVideoList() {
    this.Movie = [
      {
        FileName: "mov_bbb",
        Path: "/assets/mov_bbb.mp4",
        VidType: "mp4",
        Thumbnail: "/assets/MarkyTube.png",
        Content: "Test Title Movie 1",
        VidId: 1
      },
      {
        FileName: "bb_bunny",
        Path: "/assets/bb_bunny.webm",
        VidType: "webm",
        Thumbnail: "/assets/MarkyTube.png",
        Content: "Test Title Movie 2",
        VidId: 2
      },
      {
        FileName: "bb_bunny",
        Path: "/assets/bb_bunny.webm",
        VidType: "webm",
        Thumbnail: "/assets/MarkyTube.png",
        Content: "Test Title Movie 3",
        VidId: 3
      },
      {
        FileName: "bb_bunny",
        Path: "/assets/bb_bunny.webm",
        VidType: "webm",
        Thumbnail: "/assets/MarkyTube.png",
        Content: "Test Title Movie 4",
        VidId: 4
      }
    ];

    this.Anime = [
      {
        FileName: "mov_bbb",
        Path: "/assets/mov_bbb.mp4",
        VidType: "mp4",
        Thumbnail: "/assets/MarkyTube.png",
        Content: "Test Title Anime 1",
        VidId: 1
      },
      {
        FileName: "bb_bunny",
        Path: "/assets/bb_bunny.webm",
        VidType: "webm",
        Thumbnail: "/assets/MarkyTube.png",
        Content: "Test Title Anime 2",
        VidId: 2
      },
      {
        FileName: "bb_bunny",
        Path: "/assets/bb_bunny.webm",
        VidType: "webm",
        Thumbnail: "/assets/MarkyTube.png",
        Content: "Test Title Anime 3",
        VidId: 3
      },
      {
        FileName: "bb_bunny",
        Path: "/assets/bb_bunny.webm",
        VidType: "webm",
        Thumbnail: "/assets/MarkyTube.png",
        Content: "Test Title Anime 4",
        VidId: 4
      }
    ];

    this.TVSeries = [
      {
        FileName: "mov_bbb",
        Path: "/assets/mov_bbb.mp4",
        VidType: "mp4",
        Thumbnail: "/assets/MarkyTube.png",
        Content: "Test Title TV 1",
        VidId: 1
      },
      {
        FileName: "bb_bunny",
        Path: "/assets/bb_bunny.webm",
        VidType: "webm",
        Thumbnail: "/assets/MarkyTube.png",
        Content: "Test Title TV 2",
        VidId: 2
      },
      {
        FileName: "bb_bunny",
        Path: "/assets/bb_bunny.webm",
        VidType: "webm",
        Thumbnail: "/assets/MarkyTube.png",
        Content: "Test Title TV 3",
        VidId: 3
      },
      {
        FileName: "bb_bunny",
        Path: "/assets/bb_bunny.webm",
        VidType: "webm",
        Thumbnail: "/assets/MarkyTube.png",
        Content: "Test Title TV 4",
        VidId: 4
      }
    ];

    this.VideoList = {
      Movie: this.Movie,
      Anime: this.Anime,
      TVSeries: this.TVSeries
    };
  }

}
