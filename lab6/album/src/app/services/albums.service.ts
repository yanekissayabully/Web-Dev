import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/albums';
  constructor(private http: HttpClient) {}

  getAlbums(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getAlbum(id: number): Observable<any> {
    console.log(`Запрашиваем альбом: ${id}`);
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  updateAlbum(id: number, title: string): Observable<any> {
    console.log(title);
    return this.http.patch<any>(`https://jsonplaceholder.typicode.com/albums/${id}`, { title });
  }

  deleteAlbum(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getPhotos(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}/photos`);
  }
}

