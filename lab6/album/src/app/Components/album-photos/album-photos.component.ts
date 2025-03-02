import { Component } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {AlbumsService} from '../../services/albums.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-album-photos',
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent {
  photos: any[] = [];
  album: any;

  constructor(private route: ActivatedRoute, private albumsService: AlbumsService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.albumsService.getAlbum(id).subscribe(album => {
      this.album = album;
    });

    this.albumsService.getPhotos(id).subscribe((photos: any) => {
      this.photos = photos;
    });
  }
}
