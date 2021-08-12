import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionDirective } from './action.directive';
import { ActionDirectiveModule } from './action.directive.module';
import { By } from '@angular/platform-browser';

describe(ActionDirective.name, () => {
  let fixture: ComponentFixture<ActionDirectiveTestComponent>;
  let component: ActionDirectiveTestComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActionDirectiveTestComponent],
      imports: [ActionDirectiveModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ActionDirectiveTestComponent);
    component = fixture.componentInstance;
  });

  it('Should create an instance', () => {
    const directive = new ActionDirective();
    expect(directive).toBeTruthy();
  });

  it('(@Output appAction) should emit event with payload when ENTER key is pressed', () => {
    const element: HTMLElement = fixture.debugElement.query(By.directive(ActionDirective)).nativeElement;
    const keyupEvent = new KeyboardEvent('keyup', { key: 'Enter' });
    element.dispatchEvent(keyupEvent);

    expect(component.hasEvent()).toBeTrue();
  });

  it('(@Output appAction) should emit event with payload when clicked', () => {
    const element: HTMLElement = fixture.debugElement.query(By.directive(ActionDirective)).nativeElement;
    const clickEvent = new Event('click');
    element.dispatchEvent(clickEvent);

    expect(component.hasEvent()).toBeTrue();
  });
});

@Component({
  template: `<div (appAction)="actionHandler($event)"></div>`
})
class ActionDirectiveTestComponent {
  private event: Event = null;

  actionHandler(event: Event): void {
    this.event = event;
  }

  hasEvent(): boolean {
    return !!this.event;
  }
}
