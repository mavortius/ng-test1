import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Photo } from '../models/photo';

@Injectable()
export class PhotoBoardService {
  constructor(private http: HttpClient) {
  }

  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>('http://localhost:3000/photos')
      .pipe(delay(2000));
  }
}