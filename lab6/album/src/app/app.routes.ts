import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './Components/home/home.component';
import {AboutComponent} from './Components/about/about.component';
import {AlbumsComponent} from './Components/albums/albums.component';
import {AlbumPhotosComponent} from './Components/album-photos/album-photos.component';
import {AlbumDetailComponent} from './Components/album-detail/albums-detail.component';
import {NgModule} from '@angular/core';


export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'albums', component: AlbumsComponent},
  {path: 'albums/:id', component: AlbumDetailComponent, pathMatch: 'full' },
  {path: 'albums/:id/photos', component: AlbumPhotosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
