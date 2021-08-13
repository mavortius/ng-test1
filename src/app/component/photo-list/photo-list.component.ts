import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

import { Photo } from '../../shared/components/models/photo';
import { PhotoBoardService } from '../../shared/components/photo-board/photo-board.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {
  photos$: Observable<Photo[]>;
  fa = { faCircleNotch };

  constructor(private photoBoardService: PhotoBoardService) {
  }

  ngOnInit(): void {
    this.photos$ = this.photoBoardService.getPhotos();
  }
}
