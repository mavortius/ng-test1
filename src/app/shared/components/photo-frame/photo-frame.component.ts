import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-photo-frame',
  templateUrl: './photo-frame.component.html',
  styleUrls: ['./photo-frame.component.scss']
})
export class PhotoFrameComponent implements OnInit, OnDestroy {
  @Output() liked = new EventEmitter<void>();
  @Input() src = '';
  @Input() description = '';
  @Input() likes = 0;

  private debounceSubject = new Subject<void>();
  private unsubscriber = new Subject<void>();

  ngOnInit(): void {
    this.debounceSubject.asObservable()
      .pipe(debounceTime(500))
      .subscribe(() => this.liked.emit());
  }

  like(): void {
    this.debounceSubject.next();
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
