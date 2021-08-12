import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PhotoBoardService } from './shared/components/photo-board/photo-board.service';
import { Photo } from './shared/components/models/photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular testing';

  photos$: Observable<Photo[]>;

  constructor(private photoBoardService: PhotoBoardService) {
  }

  ngOnInit(): void {
    this.photos$ = this.photoBoardService.getPhotos();
  }
}
