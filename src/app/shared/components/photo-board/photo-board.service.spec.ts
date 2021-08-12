import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { PhotoBoardService } from './photo-board.service';

describe(PhotoBoardService.name, () => {
  let service: PhotoBoardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [PhotoBoardService]
    });
    service = TestBed.inject(PhotoBoardService);
  });

  it('Should create service', () => {
    expect(service).toBeTruthy();
  });
});
