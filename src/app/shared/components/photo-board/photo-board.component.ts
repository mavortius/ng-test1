import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Photo } from '../models/photo';

@Component({
  selector: 'app-photo-board',
  templateUrl: './photo-board.component.html',
  styleUrls: ['./photo-board.component.scss']
})
export class PhotoBoardComponent implements OnChanges {
  @Input() photos: Photo[];

  rows: any[][] = [];

  private static groupColumns(photos: Photo[]): any[][] {
    const newRows = [];
    const step = 4;

    for (let index = 0; index < photos.length; index += step) {
      newRows.push(photos.slice(index, index + step));
    }

    return newRows;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.photos) {
      this.rows = PhotoBoardComponent.groupColumns(changes.photos.currentValue);
    }
  }
}
