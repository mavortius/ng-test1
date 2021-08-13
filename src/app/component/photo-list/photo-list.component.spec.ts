import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

import { PhotoListComponent } from './photo-list.component';
import { PhotoListModule } from './photo-list.module';
import { PhotoBoardService } from '../../shared/components/photo-board/photo-board.service';
import { buildPhotoList } from '../../shared/components/photo-board/test/photo-list-builder';

describe(PhotoListComponent.name, () => {
  let component: PhotoListComponent;
  let fixture: ComponentFixture<PhotoListComponent>;
  let service: PhotoBoardService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, PhotoListModule]
    }).compileComponents();
    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PhotoBoardService);
  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  it('Should display board data arrives', () => {
    const photos = buildPhotoList();
    spyOn(service, 'getPhotos').and.returnValue(of(photos));
    fixture.detectChanges();
    const board = fixture.nativeElement.querySelector('app-photo-board');
    const spinner = fixture.nativeElement.querySelector('.spinner');

    expect(board).not.toBeNull();
    expect(spinner).toBeNull();
  });

  it('Should display spinner while waiting for data', () => {
    spyOn(service, 'getPhotos').and.returnValue(null);
    fixture.detectChanges();
    const board = fixture.nativeElement.querySelector('app-photo-board');
    const spinner = fixture.nativeElement.querySelector('.spinner');

    expect(board).toBeNull();
    expect(spinner).not.toBeNull();
  });
});
